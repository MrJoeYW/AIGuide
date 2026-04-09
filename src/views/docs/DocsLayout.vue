<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { MoonStar, Search, SunMedium } from 'lucide-vue-next'
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
const headerCta = computed(() => neighbors.value.next?.to ?? '/')
const headerCtaLabel = computed(() => (neighbors.value.next ? '阅读下一篇' : '回到文档简介'))
const theme = ref<'light' | 'dark'>('light')

function applyTheme(nextTheme: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  localStorage.setItem('aiguide-theme', nextTheme)
}

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  const storedTheme = localStorage.getItem('aiguide-theme')
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = storedTheme === 'dark' || (!storedTheme && preferredDark) ? 'dark' : 'light'
  applyTheme(theme.value)
})

watch(theme, (nextTheme) => {
  applyTheme(nextTheme)
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-4 sm:px-6 xl:px-8">
        <RouterLink to="/" class="flex shrink-0 items-center gap-3">
          <div
            class="flex size-8 items-center justify-center rounded-md bg-foreground text-xs font-semibold text-background"
          >
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
          <button
            type="button"
            :class="cn(buttonVariants({ variant: 'outline', size: 'icon' }), 'size-9 rounded-full')"
            @click="toggleTheme"
          >
            <SunMedium v-if="theme === 'dark'" class="size-4" />
            <MoonStar v-else class="size-4" />
          </button>

          <RouterLink
            :to="headerCta"
            :class="cn(buttonVariants({ size: 'sm' }))"
          >
            {{ headerCtaLabel }}
          </RouterLink>
        </div>
      </div>
    </header>

    <div
      class="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_180px] xl:px-8"
    >
      <DocsSidebar />

      <main class="min-w-0">
        <div class="mx-auto w-full max-w-3xl py-10">
          <div class="mb-8 space-y-3 border-b border-border/70 pb-6">
            <span :class="cn(badgeVariants({ variant: 'outline' }), 'w-fit')">
              {{ route.path === '/' ? 'AI Guide' : 'Concept Notes' }}
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
