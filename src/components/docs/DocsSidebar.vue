<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

import { docsNavGroups } from '@/content/docs'
import { cn } from '@/lib/utils'

const route = useRoute()
</script>

<template>
  <aside class="hidden lg:block">
    <div class="docs-sidebar-shell sticky top-20 pr-8">
      <div
        v-for="group in docsNavGroups"
        :key="group.title"
        class="mb-7 last:mb-0"
      >
        <p class="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {{ group.title }}
        </p>

        <nav class="space-y-1">
          <RouterLink
            v-for="item in group.items"
            :key="item.to"
            :to="item.to"
            :class="
              cn(
                'docs-sidebar-link block rounded-lg px-3 py-2.5 text-sm leading-6 transition-all',
                route.path === item.to
                  ? 'docs-sidebar-link-active font-semibold text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )
            "
          >
            {{ item.title }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </aside>
</template>
