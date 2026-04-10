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
        'flex size-full items-center justify-center bg-muted text-sm font-medium text-muted-foreground',
        $props.class,
      )
    "
  >
    <slot />
  </span>
</template>
