<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { HoverCardArrow, HoverCardContent, HoverCardPortal } from 'reka-ui'

import { cn } from '@/lib/utils'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      :side-offset="14"
      :class="
        cn(
          'z-50 w-56 rounded-2xl border border-border/80 bg-background/95 p-4 text-foreground shadow-xl shadow-black/10 outline-none backdrop-blur-sm',
          $props.class,
        )
      "
      v-bind="$attrs"
    >
      <slot />
      <HoverCardArrow
        :width="12"
        :height="6"
        class="fill-background/95 stroke-border/80"
      />
    </HoverCardContent>
  </HoverCardPortal>
</template>
