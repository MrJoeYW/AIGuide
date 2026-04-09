<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

import type { TocItem } from '@/content/docs'

const props = defineProps<{
  items: TocItem[]
}>()

const activeId = ref('')
let scrollHandler: (() => void) | null = null
let resizeHandler: (() => void) | null = null
let rafId = 0

function cleanupObserver() {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
    scrollHandler = null
  }

  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }

  if (rafId) {
    window.cancelAnimationFrame(rafId)
    rafId = 0
  }
}

async function setupObserver() {
  cleanupObserver()
  activeId.value = props.items[0]?.id ?? ''

  await nextTick()

  const sections = props.items
    .map((item) => document.getElementById(item.id))
    .filter((section): section is HTMLElement => section instanceof HTMLElement)

  if (!sections.length) {
    return
  }

  const updateActiveHeading = () => {
    const offsetTop = 124
    let nextActiveId = sections[0]?.id ?? ''

    for (const section of sections) {
      if (section.getBoundingClientRect().top - offsetTop <= 0) {
        nextActiveId = section.id
      } else {
        break
      }
    }

    activeId.value = nextActiveId
  }

  const scheduleUpdate = () => {
    if (rafId) {
      return
    }

    rafId = window.requestAnimationFrame(() => {
      updateActiveHeading()
      rafId = 0
    })
  }

  scrollHandler = scheduleUpdate
  resizeHandler = scheduleUpdate

  window.addEventListener('scroll', scrollHandler, { passive: true })
  window.addEventListener('resize', resizeHandler, { passive: true })
  updateActiveHeading()
}

watch(
  () => props.items,
  () => {
    void setupObserver()
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  cleanupObserver()
})
</script>

<template>
  <aside class="hidden xl:block">
    <div class="sticky top-20 pl-6">
      <p class="mb-3 text-sm font-medium text-foreground">On This Page</p>
      <nav class="border-l border-border/70 pl-4">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          @click="activeId = item.id"
          :class="[
            'relative block py-1.5 text-sm leading-6 transition-colors',
            item.depth === 3 ? 'pl-4' : '',
            activeId === item.id
              ? 'font-medium text-foreground'
              : 'text-muted-foreground hover:text-foreground',
          ]"
        >
          <span
            v-if="activeId === item.id"
            class="absolute top-1/2 -left-4 h-6 w-px -translate-y-1/2 bg-foreground"
          />
          {{ item.label }}
        </a>
      </nav>
    </div>
  </aside>
</template>
