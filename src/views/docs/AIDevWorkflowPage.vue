<script setup lang="ts">
import { ref } from 'vue'
import { Blocks, Check, CheckCheck, Copy, FileStack, FolderTree, MessagesSquare, Wrench } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'

const stages = [
  {
    id: 'stage-1',
    kicker: 'Stage 1',
    title: '需求对齐与方案建立',
    subtitle: 'Scheme Establishment',
    goal:
      '不要急于写代码。先把 AI 当成资深架构师或产品经理，通过多轮对话把需求、边界和上下文讲清楚。',
    how:
      '把初步想法告诉 AI，让它先输出方案，再不断补充性能要求、使用场景、UI 偏好和限制条件，直到方案真正符合预期。',
    prompt: `我计划开发一个 [填写项目名称/功能，例如：工业日志分析与可视化工具]，主要解决 [填写核心痛点] 问题。
请你扮演资深软件架构师和产品经理，帮我梳理这个项目的核心需求。
请提供：
1. 核心功能模块划分
2. 潜在的技术难点及应对思路
3. 系统的初步业务逻辑流程
请先给出你的初步方案，如果有信息缺失，请向我提问，我们将通过对话不断优化，直到方案敲定。`,
    icon: MessagesSquare,
  },
  {
    id: 'stage-2',
    kicker: 'Stage 2',
    title: '架构设计与项目结构',
    subtitle: 'Project Structure Determination',
    goal:
      '在需求完全对齐后，让 AI 输出具体工程蓝图，包括技术栈、命名规范和可视化目录树。',
    how:
      '基于阶段一已经确认好的上下文，把抽象方案转成具体工程结构，为后续落代码打好基础。',
    prompt: `基于我们刚才确认的最终方案，现在请为该项目进行详细的工程化设计。
请输出以下内容：
1. 推荐的技术栈及版本建议（前端/后端/数据库/框架）
2. 核心命名规范（如变量、类、接口的命名风格）
3. 完整的项目文件目录树（Project Tree），并用简短的注释说明每个核心文件夹和文件的主要作用。
请确保结构清晰、符合主流开发规范，并且易于后续扩展。`,
    icon: FolderTree,
  },
  {
    id: 'stage-3',
    kicker: 'Stage 3',
    title: '工程初始化与文件创建',
    subtitle: 'Project Initialization',
    goal:
      '利用 IDE 集成的 AI 能力，把目录树快速落成真实文件和文件夹，减少机械初始化工作。',
    how:
      '把阶段二输出的项目目录树交给 IDE 内的 AI 助手，例如 VS Code、Cursor 或 Copilot Chat，让它直接创建结构和基础骨架。',
    prompt: `请作为我的 IDE 助手，帮我初始化项目结构。
请根据以下目录树，在当前工作区直接创建对应的文件夹和空文件（如果适用，请在文件中生成基础的代码骨架）：

[在此处粘贴阶段二生成的 项目文件目录树]

创建完成后，请简要报告创建结果。`,
    icon: FileStack,
  },
  {
    id: 'stage-4',
    kicker: 'Stage 4',
    title: '阶段性敏捷开发',
    subtitle: 'Staged Coding & Development',
    goal:
      '不要让 AI 一次性生成整个项目，而是按模块、组件或功能点分步推进，逐段开发、逐段验证。',
    how:
      '每次只聚焦一个模块，明确输入输出、命名规范和特殊要求，让 IDE 中的 AI 在指定文件里完成当前这一小步。',
    prompt: `现在我们进入阶段性开发。请将注意力集中在 [填写当前要开发的模块，例如：主界面 UI 布局 / 日志解析核心逻辑] 模块。
开发要求如下：
1. 遵循我们之前确定的架构和命名规范。
2. 确保代码逻辑清晰，并包含必要的中文注释。
3. 考虑到 [填写特定要求，例如：高并发处理 / 友好的错误提示 / 界面响应式]。
请为我输出该模块的具体代码，并说明需要将其放置在哪个文件中。`,
    icon: Wrench,
  },
  {
    id: 'stage-5',
    kicker: 'Stage 5',
    title: '验证调试与上下文沉淀',
    subtitle: 'Validation & Context Consolidation',
    goal:
      '代码生成后必须经过人为验证。验证通过后，把当前成果沉淀为 Markdown 上下文文档，供后续继续喂给 AI。',
    how:
      '在一个重要模块测试通过后，让 AI 生成一份高质量状态说明，记录已完成内容、核心接口、关键状态和下一步建议，避免后续开发“失忆”。',
    prompt: `刚才开发的 [填写模块名称] 已经通过了测试与验证。
为了防止后续开发丢失上下文，请将截至目前的项目状态总结为一份高质量的 Markdown 文档。
文档需要包含：
1. 已完成的功能模块及核心逻辑概述。
2. 核心 API 接口说明或数据流转过程。
3. 关键的全局变量、状态或配置文件说明。
4. 下一步的开发计划建议。
请直接输出 Markdown 源码，以便我保存为项目上下文说明书。`,
    icon: CheckCheck,
  },
]

const tips = [
  '先让 AI 帮你想清楚，再让它动手写，比直接催代码更稳。',
  '每次只给一个清晰任务，质量通常比“一口气做完整项目”高很多。',
  '验证通过后立刻沉淀上下文，是后面持续协作最省时间的一步。',
]

const copiedStageId = ref<string | null>(null)
let copiedResetTimer: number | null = null

async function copyPrompt(stageId: string, prompt: string) {
  await navigator.clipboard.writeText(prompt)
  copiedStageId.value = stageId

  if (copiedResetTimer) {
    window.clearTimeout(copiedResetTimer)
  }

  copiedResetTimer = window.setTimeout(() => {
    copiedStageId.value = null
  }, 1800)
}
</script>

<template>
  <section id="overview" class="doc-section first:pt-0">
    <p class="doc-kicker">Workflow</p>
    <h2>把 AI 辅助开发拆成 5 个阶段，会比“上来就生成代码”稳很多。</h2>
    <p>
      这套流程的核心思路是：先对齐需求，再搭结构，再初始化工程，之后按模块分阶段开发，最后把验证过的结果沉淀成上下文。AI 在这里更像协作式搭档，而不是一次性吐代码的机器。
    </p>

    <div class="mt-6 grid gap-3 md:grid-cols-5">
      <div
        v-for="(item, index) in stages"
        :key="item.id"
        class="rounded-2xl border border-border/70 bg-card/50 p-4"
      >
        <div class="flex items-center gap-3">
          <div class="flex size-8 items-center justify-center rounded-full bg-muted font-medium text-foreground">
            {{ index + 1 }}
          </div>
          <component :is="item.icon" class="size-4 text-primary" />
        </div>
        <p class="mt-4 text-sm font-medium text-foreground">{{ item.title }}</p>
      </div>
    </div>
  </section>

  <section
    v-for="item in stages"
    :id="item.id"
    :key="item.id"
    class="doc-section"
  >
    <p class="doc-kicker">{{ item.kicker }}</p>
    <h2>{{ item.title }}</h2>
    <p class="mt-2 text-sm text-muted-foreground">{{ item.subtitle }}</p>

    <div class="mt-5 grid gap-4 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
      <div class="min-w-0 space-y-4">
        <div class="rounded-2xl border border-border/70 bg-card/50 p-5">
          <p class="text-sm font-medium text-foreground">目标</p>
          <p class="mt-3 text-sm leading-7 text-muted-foreground">{{ item.goal }}</p>
        </div>
        <div class="rounded-2xl border border-border/70 bg-card/50 p-5">
          <p class="text-sm font-medium text-foreground">操作说明</p>
          <p class="mt-3 text-sm leading-7 text-muted-foreground">{{ item.how }}</p>
        </div>
      </div>

      <div class="min-w-0 rounded-2xl border border-border/70 bg-card/50 p-5">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2 text-sm font-medium text-foreground">
            <Blocks class="size-4" />
            可复制提示词
          </div>
          <Button
            size="sm"
            variant="outline"
            type="button"
            @click="copyPrompt(item.id, item.prompt)"
          >
            <Check
              v-if="copiedStageId === item.id"
              class="size-4"
            />
            <Copy
              v-else
              class="size-4"
            />
            {{ copiedStageId === item.id ? '已复制' : '复制提示词' }}
          </Button>
        </div>
        <pre class="doc-code doc-code-wrap mt-4"><code>{{ item.prompt }}</code></pre>
      </div>
    </div>
  </section>

  <section id="tips" class="doc-section">
    <p class="doc-kicker">Tips</p>
    <h2>落地建议</h2>
    <ul class="doc-list">
      <li v-for="item in tips" :key="item">{{ item }}</li>
    </ul>
    <p class="doc-note">
      最容易被省掉、但最值得做的步骤，是最后一阶段的“上下文沉淀”。只要把项目状态总结成一份持续更新的 Markdown，后面每次继续开发都会顺很多。
    </p>
  </section>
</template>
