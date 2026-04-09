<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

import { buttonVariants, type ButtonVariants } from './buttonVariants'

interface Props {
  as?: string
  href?: string
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
})
</script>

<template>
  <component
    :is="href ? 'a' : as"
    :href="href"
    :class="cn(buttonVariants({ variant, size }), $props.class)"
  >
    <slot />
  </component>
</template>
