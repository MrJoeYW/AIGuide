<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

import { docsNavGroups } from '@/content/docs'
import { cn } from '@/lib/utils'

const route = useRoute()
</script>

<template>
  <aside class="hidden lg:block">
    <div class="sticky top-20 pr-6">
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
                'block rounded-md px-3 py-2 text-sm leading-6 transition-colors',
                route.path === item.to
                  ? 'bg-muted font-medium text-foreground'
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
