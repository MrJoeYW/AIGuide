import { createRouter, createWebHistory } from 'vue-router'

import { getDocMeta } from '@/content/docs'
import AIEssencePage from '@/views/docs/AIEssencePage.vue'
import AIDevWorkflowPage from '@/views/docs/AIDevWorkflowPage.vue'
import DocsHomePage from '@/views/docs/DocsHomePage.vue'
import DocsLayout from '@/views/docs/DocsLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DocsLayout,
      children: [
        {
          path: '',
          name: 'docs-introduction',
          component: DocsHomePage,
        },
        {
          path: 'ai-essence',
          name: 'ai-essence',
          component: AIEssencePage,
        },
        {
          path: 'ai-dev-workflow',
          name: 'ai-dev-workflow',
          component: AIDevWorkflowPage,
        },
      ],
    },
  ],
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  const meta = getDocMeta(to.path)

  if (meta) {
    document.title = `${meta.title} | AI Guide`
    return
  }

  document.title = 'AI Guide'
})

export default router
