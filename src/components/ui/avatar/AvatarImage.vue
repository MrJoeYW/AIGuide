<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    src?: string
    alt?: string
    class?: string
  }>(),
  {
    src: '',
    alt: '',
    class: '',
  },
)

const hasError = ref(false)
</script>

<template>
  <img
    v-if="src && !hasError"
    :src="src"
    :alt="alt"
    :class="['aspect-square size-full object-cover', $props.class]"
    @error="hasError = true"
  />
  <slot
    v-else
    name="fallback"
  />
</template>
