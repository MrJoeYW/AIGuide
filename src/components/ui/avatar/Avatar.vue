<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    :class="
      cn(
        'relative inline-flex size-10 shrink-0 overflow-hidden rounded-full border border-border/70 bg-muted',
        $props.class,
      )
    "
  >
    <slot />
  </span>
</template>
