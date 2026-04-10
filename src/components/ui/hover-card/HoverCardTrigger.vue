<script setup lang="ts">
import { HoverCardTrigger } from 'reka-ui'
</script>

<template>
  <HoverCardTrigger v-bind="$attrs">
    <slot />
  </HoverCardTrigger>
</template>
