<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { badgeVariants, type BadgeVariants } from './badgeVariants'

interface Props {
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), $props.class)">
    <slot />
  </div>
</template>
