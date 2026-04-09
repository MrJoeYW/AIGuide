<script setup lang="ts">
const caseTemplate = [
  '原始问题是什么，为什么选择用 AI 协助。',
  '输入了哪些上下文，哪部分是关键材料。',
  '中间调整了几轮，分别改了什么。',
  '最终结果是否直接可用，哪里仍然需要人工处理。',
]

const reviewQuestions = [
  '这次结果好，是因为 Prompt 写得好，还是背景材料本身已经很完整。',
  '如果让别的同事复现这次过程，哪些步骤还不够清楚。',
  'AI 给出的内容里，有哪些地方看起来像对的，但其实需要核实。',
]
</script>

<template>
  <section id="template" class="doc-section first:pt-0">
    <p class="doc-kicker">Template</p>
    <h2>案例页模板</h2>
    <ol class="doc-ordered-list">
      <li v-for="item in caseTemplate" :key="item">{{ item }}</li>
    </ol>
  </section>

  <section id="angles" class="doc-section">
    <p class="doc-kicker">Angles</p>
    <h2>拆解视角</h2>
    <p>
      案例页不只是展示结果，更重要的是说明“为什么这样做”。建议重点记录上下文提供方式、迭代原因和最终的人为判断。
    </p>
  </section>

  <section id="sample" class="doc-section">
    <p class="doc-kicker">Sample</p>
    <h2>一个简化的案例结构</h2>
    <div class="rounded-2xl border border-border/70 px-5 py-5">
      <p class="font-medium">案例：把一次客户沟通纪要整理成对内同步文档</p>
      <ul class="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
        <li>输入：原始纪要、目标读者、输出模板。</li>
        <li>迭代：第一版太像会议记录，第二版才调整成团队内部阅读格式。</li>
        <li>人工处理：金额、日期、承诺事项全部重新确认。</li>
      </ul>
    </div>
  </section>

  <section id="review" class="doc-section">
    <p class="doc-kicker">Review</p>
    <h2>复盘问题</h2>
    <ul class="doc-list">
      <li v-for="item in reviewQuestions" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
