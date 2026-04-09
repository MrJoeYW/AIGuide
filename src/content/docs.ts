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
  { title: '首页', to: '/' },
  { title: '入门', to: '/guides/getting-started' },
  { title: '模板', to: '/playbooks/prompt-templates' },
  { title: '案例', to: '/playbooks/case-studies' },
  { title: '规范', to: '/reference/policies' },
]

export const docsNavGroups: DocsNavGroup[] = [
  {
    title: '开始使用',
    items: [
      {
        title: '文档首页',
        to: '/',
        description: '查看站点定位、阅读顺序和内容地图。',
      },
      {
        title: '快速上手',
        to: '/guides/getting-started',
        description: '给第一次使用这套知识站的同事看什么。',
      },
    ],
  },
  {
    title: 'Playbooks',
    items: [
      {
        title: 'Prompt 模板',
        to: '/playbooks/prompt-templates',
        description: '沉淀稳定好用的提示词结构和写法。',
      },
      {
        title: '案例复盘',
        to: '/playbooks/case-studies',
        description: '记录一次完整协作过程与可复用经验。',
      },
    ],
  },
  {
    title: 'Reference',
    items: [
      {
        title: '使用规范',
        to: '/reference/policies',
        description: '明确哪些场景适合用 AI，哪些内容必须人工复核。',
      },
    ],
  },
]

export const docsMetaByPath: Record<string, DocsMeta> = {
  '/': {
    title: 'AI Guide',
    description: '部门内部 AI 使用心得与协作经验的统一入口。',
    toc: [
      { id: 'overview', label: '站点定位' },
      { id: 'reading-path', label: '推荐阅读路线' },
      { id: 'content-map', label: '内容地图' },
      { id: 'sample', label: '示例片段' },
      { id: 'updates', label: '近期更新' },
    ],
  },
  '/guides/getting-started': {
    title: '快速上手',
    description: '帮助同事在第一次使用时，快速理解站点结构和协作方式。',
    toc: [
      { id: 'role', label: '这个站解决什么问题' },
      { id: 'workflow', label: '推荐协作流程' },
      { id: 'checklist', label: '首次贡献清单' },
      { id: 'publishing', label: '发布约定' },
    ],
  },
  '/playbooks/prompt-templates': {
    title: 'Prompt 模板',
    description: '把零散的提问经验沉淀成团队可复用的模板。',
    toc: [
      { id: 'structure', label: '模板结构' },
      { id: 'examples', label: '常用模板' },
      { id: 'writing', label: '写作建议' },
      { id: 'maintenance', label: '维护方式' },
    ],
  },
  '/playbooks/case-studies': {
    title: '案例复盘',
    description: '记录一次 AI 协作的全过程，帮助团队知道怎样复用。',
    toc: [
      { id: 'template', label: '案例页模板' },
      { id: 'angles', label: '拆解视角' },
      { id: 'sample', label: '示例结构' },
      { id: 'review', label: '复盘问题' },
    ],
  },
  '/reference/policies': {
    title: '使用规范',
    description: '明确边界、责任和审核方式，让 AI 使用更稳。',
    toc: [
      { id: 'scenarios', label: '适用场景' },
      { id: 'boundaries', label: '风险边界' },
      { id: 'checklist', label: '审核清单' },
      { id: 'faq', label: '常见问题' },
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
