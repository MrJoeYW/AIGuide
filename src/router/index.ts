import { createRouter, createWebHistory } from 'vue-router'

import { getDocMeta } from '@/content/docs'
import CaseStudiesPage from '@/views/docs/CaseStudiesPage.vue'
import DocsHomePage from '@/views/docs/DocsHomePage.vue'
import DocsLayout from '@/views/docs/DocsLayout.vue'
import GettingStartedPage from '@/views/docs/GettingStartedPage.vue'
import PoliciesPage from '@/views/docs/PoliciesPage.vue'
import PromptTemplatesPage from '@/views/docs/PromptTemplatesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DocsLayout,
      children: [
        {
          path: '',
          name: 'docs-home',
          component: DocsHomePage,
        },
        {
          path: 'guides/getting-started',
          name: 'guides-getting-started',
          component: GettingStartedPage,
        },
        {
          path: 'playbooks/prompt-templates',
          name: 'playbooks-prompt-templates',
          component: PromptTemplatesPage,
        },
        {
          path: 'playbooks/case-studies',
          name: 'playbooks-case-studies',
          component: CaseStudiesPage,
        },
        {
          path: 'reference/policies',
          name: 'reference-policies',
          component: PoliciesPage,
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
