<script setup lang="ts">
import type { TocItem } from '@/content/docs'

defineProps<{
  items: TocItem[]
}>()
</script>

<template>
  <aside class="hidden xl:block">
    <div class="sticky top-20 pl-6">
      <p class="mb-3 text-sm font-medium text-foreground">On This Page</p>
      <nav class="space-y-1">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          :class="[
            'block text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground',
            item.depth === 3 ? 'pl-4' : '',
          ]"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </aside>
</template>
