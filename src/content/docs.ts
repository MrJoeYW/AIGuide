export interface TocItem {
  id: string
  label: string
  depth?: 2 | 3
}

export interface DocsNavItem {
  title: string
  to: string
  description: string
}

export interface DocsNavGroup {
  title: string
  items: DocsNavItem[]
}

export interface DocsMeta {
  title: string
  description: string
  toc: TocItem[]
}

export const topNavItems = [
  { title: '文档简介', to: '/' },
  { title: 'AI 的本质', to: '/ai-essence' },
]

export const docsNavGroups: DocsNavGroup[] = [
  {
    title: '文档目录',
    items: [
      {
        title: '文档简介',
        to: '/',
        description: '说明为什么做这个网站、谁适合看，以及你能直接拿走什么。',
      },
      {
        title: 'AI 的本质',
        to: '/ai-essence',
        description: '解释 AI 为什么会一本正经地胡说，以及它真正的能力边界。',
      },
    ],
  },
]

export const docsMetaByPath: Record<string, DocsMeta> = {
  '/': {
    title: '文档简介',
    description: '这是一份给同事快速上手的内部 AI 使用说明，少讲概念，多讲能直接省时间的用法。',
    toc: [
      { id: 'why', label: '为什么做这个网站' },
      { id: 'audience', label: '谁适合看' },
      { id: 'benefits', label: '你能得到什么' },
      { id: 'how-to-use', label: '建议怎么读' },
    ],
  },
  '/ai-essence': {
    title: 'AI 的本质',
    description: 'AI 是高维概率预测机器，不是会真正理解现实世界的“脑子”。',
    toc: [
      { id: 'prediction', label: 'AI 没有脑子' },
      { id: 'hallucination', label: '事实性的幻觉边界' },
      { id: 'physics', label: '物理常识边界' },
      { id: 'context', label: '实时私有上下文盲区' },
    ],
  },
}

const docsIndex = docsNavGroups.flatMap((group) => group.items)

export function getDocMeta(path: string) {
  return docsMetaByPath[path]
}

export function getDocNeighbors(path: string) {
  const index = docsIndex.findIndex((item) => item.to === path)

  if (index === -1) {
    return { prev: null, next: null }
  }

  return {
    prev: index > 0 ? docsIndex[index - 1] : null,
    next: index < docsIndex.length - 1 ? docsIndex[index + 1] : null,
  }
}
