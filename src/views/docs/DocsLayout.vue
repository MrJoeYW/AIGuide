<script setup lang="ts">
import { computed } from 'vue'
import { Search } from 'lucide-vue-next'
import { RouterLink, RouterView, useRoute } from 'vue-router'

import DocsPager from '@/components/docs/DocsPager.vue'
import DocsSidebar from '@/components/docs/DocsSidebar.vue'
import DocsToc from '@/components/docs/DocsToc.vue'
import { getDocMeta, getDocNeighbors, topNavItems } from '@/content/docs'
import { badgeVariants } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const route = useRoute()

const docMeta = computed(() => getDocMeta(route.path))
const neighbors = computed(() => getDocNeighbors(route.path))
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-4 sm:px-6 xl:px-8">
        <RouterLink to="/" class="flex shrink-0 items-center gap-3">
          <div class="flex size-8 items-center justify-center rounded-md bg-foreground text-xs font-semibold text-background">
            AI
          </div>
          <span class="text-sm font-semibold">AI Guide</span>
        </RouterLink>

        <nav class="hidden items-center gap-5 md:flex">
          <RouterLink
            v-for="item in topNavItems"
            :key="item.to"
            :to="item.to"
            class="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {{ item.title }}
          </RouterLink>
        </nav>

        <div class="ml-auto flex items-center gap-3">
          <label
            class="hidden w-[260px] items-center gap-2 rounded-full border border-border bg-background px-3 text-sm text-muted-foreground md:flex"
          >
            <Search class="size-4" />
            <input
              type="text"
              placeholder="Search documentation..."
              class="h-10 w-full bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </label>

          <RouterLink
            to="/guides/getting-started"
            :class="cn(buttonVariants({ size: 'sm' }))"
          >
            开始阅读
          </RouterLink>
        </div>
      </div>
    </header>

    <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_180px] xl:px-8">
      <DocsSidebar />

      <main class="min-w-0">
        <div class="mx-auto w-full max-w-3xl py-10">
          <div class="mb-8 space-y-3 border-b border-border/70 pb-6">
            <span :class="cn(badgeVariants({ variant: 'outline' }), 'w-fit')">
              {{ route.path === '/' ? 'Documentation' : 'Docs Page' }}
            </span>
            <h1 class="text-4xl font-semibold tracking-tight text-balance">
              {{ docMeta?.title }}
            </h1>
            <p class="max-w-2xl text-base leading-7 text-muted-foreground">
              {{ docMeta?.description }}
            </p>
          </div>

          <article class="doc-page">
            <RouterView />
          </article>

          <DocsPager :prev="neighbors.prev ?? null" :next="neighbors.next ?? null" />
        </div>
      </main>

      <DocsToc :items="docMeta?.toc ?? []" />
    </div>
  </div>
</template>
