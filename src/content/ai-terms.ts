import { Bot, Cable, MessageSquareText, Puzzle, Workflow } from 'lucide-vue-next'

export const aiTerms = [
  {
    id: 'llm',
    title: 'LLM',
    subtitle: '大型语言模型',
    summary: '最底层的语言生成模型，决定 AI 能不能“接住你的话”。',
    icon: Bot,
    accent: 'from-sky-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'prompt',
    title: 'Prompt',
    subtitle: '你给 AI 的说明书',
    summary: '决定 AI 走哪条路、产出什么格式、需要顾及哪些边界。',
    icon: MessageSquareText,
    accent: 'from-indigo-500/20 via-sky-500/10 to-transparent',
  },
  {
    id: 'agent',
    title: 'Agent',
    subtitle: '会执行任务的 AI',
    summary: '不只是回答问题，而是能拆步骤、读文件、调工具、把任务做下去。',
    icon: Workflow,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'skill',
    title: 'Skill',
    subtitle: '专门能力包',
    summary: '把高频任务沉淀成固定套路，让 Agent 做具体工作更稳。',
    icon: Puzzle,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'mcp',
    title: 'MCP',
    subtitle: '连接外部世界的标准',
    summary: '让 AI 能去读文件、查资源、接系统，而不只是困在聊天框里。',
    icon: Cable,
    accent: 'from-fuchsia-500/18 via-violet-500/10 to-transparent',
  },
] as const

export type AITermId = (typeof aiTerms)[number]['id']
