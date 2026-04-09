<script setup lang="ts">
import { Bot, Braces, Cable, MessageSquareText, Puzzle, Workflow } from 'lucide-vue-next'

const conceptCards = [
  {
    id: 'llm',
    title: 'LLM：大型语言模型',
    short: '最底层的“会生成文本的模型”。',
    icon: Bot,
  },
  {
    id: 'prompt',
    title: 'Prompt',
    short: '你给 AI 的任务描述和上下文。',
    icon: MessageSquareText,
  },
  {
    id: 'agent',
    title: 'Agent',
    short: '能自己分步行动、调用工具的 AI 执行体。',
    icon: Workflow,
  },
  {
    id: 'skill',
    title: 'Skill',
    short: '给 Agent 的专门能力包或流程说明。',
    icon: Puzzle,
  },
  {
    id: 'mcp',
    title: 'MCP',
    short: '让 AI 连接外部数据和工具的标准方式。',
    icon: Cable,
  },
]
</script>

<template>
  <section id="overview" class="doc-section first:pt-0">
    <p class="doc-kicker">Glossary</p>
    <h2>先给一个整体图</h2>
    <p>
      这几个词经常被一起提到，但它们不在同一层。最简单的理解方式是：
      <strong class="text-foreground">LLM 是底层大脑外壳，Prompt 是你下的指令，Agent 是能执行任务的 AI 代理，Skill 是它掌握的专门套路，MCP 是它接外部世界的接口。</strong>
      把它们放在一条链路里看，会更容易分清各自的职责。
    </p>

    <div class="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
      <div
        v-for="item in conceptCards"
        :key="item.id"
        class="rounded-2xl border border-border/70 bg-card/50 p-4"
      >
        <component :is="item.icon" class="size-5 text-primary" />
        <p class="mt-4 font-medium text-foreground">{{ item.title }}</p>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ item.short }}</p>
      </div>
    </div>
  </section>

  <section id="llm" class="doc-section">
    <p class="doc-kicker">Term 1</p>
    <h2>LLM：大型语言模型（Large Language Model）</h2>
    <p>
      LLM 是最底层的核心能力。你可以把它理解成一个经过海量文本训练的概率预测引擎，它很擅长根据上下文继续往下生成“最像正确答案”的内容。
    </p>
    <p>
      它之所以会出现，是因为大家想让机器处理越来越复杂的自然语言任务，比如总结、翻译、问答、写代码、写方案。传统规则系统写不过来，所以就有了这种基于大规模训练得到的语言模型。
    </p>
    <div class="doc-note">
      <p class="mt-0 font-medium text-foreground">常见场景</p>
      <p>你在聊天框里问问题、让它写文档、改代码，本质上都是在调用底层的 LLM。</p>
    </div>
  </section>

  <section id="prompt" class="doc-section">
    <p class="doc-kicker">Term 2</p>
    <h2>Prompt 是什么</h2>
    <p>
      Prompt 就是你给 AI 的输入说明。它不只是“一句话命令”，还可以包含背景、目标、限制条件、例子、输出格式和判断标准。
    </p>
    <p>
      Prompt 之所以重要，是因为 LLM 本身不会自动知道你到底想要什么。你说得越清楚，它越容易沿着正确方向生成结果。
    </p>
    <div class="rounded-2xl border border-border/70 bg-card/50 p-5">
      <p class="text-sm font-medium text-foreground">常见场景</p>
      <ul class="doc-list mt-3">
        <li>让 AI 帮你写周报时，Prompt 决定它写成流水账还是结构化总结。</li>
        <li>让 AI 帮你写代码时，Prompt 决定它是只给思路，还是直接改文件。</li>
        <li>让 AI 帮你做分析时，Prompt 决定它是泛泛而谈，还是给可执行结论。</li>
      </ul>
    </div>
  </section>

  <section id="agent" class="doc-section">
    <p class="doc-kicker">Term 3</p>
    <h2>Agent 是什么</h2>
    <p>
      Agent 可以理解成“会行动的 AI”。普通聊天模型通常是你问一句，它答一句；而 Agent 会在目标驱动下拆步骤、做决定、调用工具、读文件，甚至持续执行一段流程。
    </p>
    <p>
      它出现的原因，是大家不满足于“只聊天”，而是希望 AI 真的能帮忙做事，比如读代码库、修改文件、跑命令、整理资料、执行多步任务。
    </p>
    <div class="doc-note">
      <p class="mt-0 font-medium text-foreground">常见场景</p>
      <p>在 Codex、Cursor 或其他 agentic 工具里，让 AI 直接改项目、分析仓库、分阶段完成任务，本质上都属于 Agent 工作流。</p>
    </div>
  </section>

  <section id="skill" class="doc-section">
    <p class="doc-kicker">Term 4</p>
    <h2>Skill 是什么</h2>
    <p>
      Skill 可以理解成给 Agent 的“专门能力包”或“固定套路”。它通常不是模型本身的基础能力，而是围绕某类任务整理出来的一套附加说明、模板、规则、脚本或工具约束。
    </p>
    <p>
      它出现的原因，是因为通用 Agent 虽然什么都能做一点，但做具体任务时往往需要更专业、更稳定的流程。于是大家会把经验沉淀成 Skill，让 AI 遇到这类任务时直接按这套方式做。
    </p>
    <div class="rounded-2xl border border-border/70 bg-card/50 p-5">
      <p class="text-sm font-medium text-foreground">常见场景</p>
      <ul class="doc-list mt-3">
        <li>一个专门生成图片的 Skill。</li>
        <li>一个专门创建插件目录结构的 Skill。</li>
        <li>一个专门指导如何使用 OpenAI 文档的 Skill。</li>
      </ul>
    </div>
  </section>

  <section id="mcp" class="doc-section">
    <p class="doc-kicker">Term 5</p>
    <h2>MCP 是什么</h2>
    <p>
      MCP 可以理解成 AI 连接外部工具和数据源的一种标准协议。它不是模型，也不是 Prompt，而是“AI 怎么安全、规范地去读别的系统里的内容”这件事的连接方式。
    </p>
    <p>
      它出现的原因，是因为 AI 如果只靠聊天框里的文字，视野非常有限。真正工作里经常需要读文件、查数据库、访问内部系统、拿知识库内容，这时候就需要一种标准化连接方式。
    </p>
    <div class="doc-note">
      <p class="mt-0 font-medium text-foreground">常见场景</p>
      <p>让 AI 读取本地文件、查询项目资源、连接内部系统或外部服务时，经常就会经过 MCP 这一层。</p>
    </div>
  </section>

  <section id="chain" class="doc-section">
    <p class="doc-kicker">How They Connect</p>
    <h2>这些概念怎么串起来</h2>
    <p>
      最容易记住的一种顺序是：
      <strong class="text-foreground">你写 Prompt，交给 Agent；Agent 的底层是 LLM；Agent 在执行过程中可以调用 Skill，也可以通过 MCP 连接外部世界。</strong>
    </p>

    <div class="mt-6 rounded-3xl border border-border/70 bg-card/50 p-6">
      <div class="grid gap-4 md:grid-cols-5">
        <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
          <p class="text-sm font-medium text-foreground">1. 人</p>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">提出任务，说明目标和背景。</p>
        </div>
        <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
          <p class="text-sm font-medium text-foreground">2. Prompt</p>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">把任务翻译成 AI 能理解的输入。</p>
        </div>
        <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
          <p class="text-sm font-medium text-foreground">3. Agent + LLM</p>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">由 Agent 调度任务，LLM 负责理解和生成。</p>
        </div>
        <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
          <p class="text-sm font-medium text-foreground">4. Skill / MCP</p>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">需要专门能力时用 Skill，需要连接数据和工具时走 MCP。</p>
        </div>
        <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
          <p class="text-sm font-medium text-foreground">5. 结果</p>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">输出答案、改代码、读资源、执行多步任务。</p>
        </div>
      </div>
    </div>
  </section>

  <section id="summary" class="doc-section">
    <p class="doc-kicker">Summary</p>
    <h2>最后怎么记</h2>
    <ul class="doc-list">
      <li><strong class="text-foreground">LLM</strong>：底层模型，负责“生成”。</li>
      <li><strong class="text-foreground">Prompt</strong>：你的输入，负责“说明任务”。</li>
      <li><strong class="text-foreground">Agent</strong>：执行体，负责“把事情做下去”。</li>
      <li><strong class="text-foreground">Skill</strong>：专门能力包，负责“把某类任务做得更稳”。</li>
      <li><strong class="text-foreground">MCP</strong>：连接标准，负责“让 AI 能接触外部数据和工具”。</li>
    </ul>
    <p class="doc-note">
      如果只记一句话：<strong class="text-foreground">Prompt 是你怎么说，LLM 是它怎么想，Agent 是它怎么做，Skill 是它会哪些专长，MCP 是它怎么连外部世界。</strong>
    </p>
  </section>
</template>
