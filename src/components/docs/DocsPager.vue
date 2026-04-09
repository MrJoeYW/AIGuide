<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import type { DocsNavItem } from '@/content/docs'

defineProps<{
  prev: DocsNavItem | null
  next: DocsNavItem | null
}>()
</script>

<template>
  <div class="mt-14 grid gap-3 border-t border-border/70 pt-6 sm:grid-cols-2">
    <RouterLink
      v-if="prev"
      :to="prev.to"
      class="group rounded-xl border border-border/70 px-4 py-4 transition-colors hover:bg-muted/60"
    >
      <div class="flex items-center gap-2 text-sm text-muted-foreground">
        <ChevronLeft class="size-4" />
        上一篇
      </div>
      <p class="mt-2 font-medium text-foreground">{{ prev.title }}</p>
    </RouterLink>
    <div v-else class="hidden sm:block" />

    <RouterLink
      v-if="next"
      :to="next.to"
      class="group rounded-xl border border-border/70 px-4 py-4 transition-colors hover:bg-muted/60 sm:text-right"
    >
      <div class="flex items-center gap-2 text-sm text-muted-foreground sm:justify-end">
        下一篇
        <ChevronRight class="size-4" />
      </div>
      <p class="mt-2 font-medium text-foreground">{{ next.title }}</p>
    </RouterLink>
  </div>
</template>
