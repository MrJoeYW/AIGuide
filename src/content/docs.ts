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
  { title: '核心名词解释', to: '/ai-terms' },
  { title: 'AI 辅助开发流程', to: '/ai-dev-workflow' },
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
      {
        title: '核心名词解释',
        to: '/ai-terms',
        description: '把 Prompt、MCP、Skill、Agent、LLM 这些常见词串起来讲清楚。',
      },
      {
        title: 'AI 辅助开发流程',
        to: '/ai-dev-workflow',
        description: '把需求对齐、架构设计、分阶段开发和上下文沉淀串成一条可执行流程。',
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
  '/ai-terms': {
    title: 'AI 名词解释',
    description: '把 LLM、Prompt、Agent、Skill、MCP 这些高频词放到同一条工作链路里理解，会比单独背定义更容易。',
    toc: [
      { id: 'overview', label: '先给一个整体图' },
      { id: 'llm', label: 'LLM 是什么' },
      { id: 'prompt', label: 'Prompt 是什么' },
      { id: 'agent', label: 'Agent 是什么' },
      { id: 'skill', label: 'Skill 是什么' },
      { id: 'mcp', label: 'MCP 是什么' },
      { id: 'chain', label: '这些概念怎么串起来' },
      { id: 'summary', label: '最后怎么记' },
    ],
  },
  '/ai-dev-workflow': {
    title: 'AI 辅助开发流程',
    description: '把 AI 当成协作式开发搭档，而不是一次性代码生成器，按阶段推进会稳得多。',
    toc: [
      { id: 'overview', label: '流程总览' },
      { id: 'stage-1', label: '阶段一：需求对齐' },
      { id: 'stage-2', label: '阶段二：架构设计' },
      { id: 'stage-3', label: '阶段三：工程初始化' },
      { id: 'stage-4', label: '阶段四：阶段性开发' },
      { id: 'stage-5', label: '阶段五：验证与沉淀' },
      { id: 'tips', label: '落地建议' },
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
