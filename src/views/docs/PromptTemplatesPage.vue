<script setup lang="ts">
const templateSkeleton = `# 背景
说明当前任务发生在什么业务场景。

# 目标
明确你希望 AI 产出什么结果。

# 输入材料
列出上下文、参考样例、限制条件。

# 输出要求
指定结构、语气、长度与禁区。`

const examples = [
  {
    title: '写作整理型',
    text: '把一次会议记录整理成给团队阅读的总结，重点输出结论、待办和风险项。',
  },
  {
    title: '分析判断型',
    text: '对多个方案做对比时，要求 AI 分别列出优缺点与适用条件，不要直接下结论。',
  },
  {
    title: '结构搭建型',
    text: '先让 AI 帮你做目录和章节框架，再逐段补充细节，往往更稳。',
  },
]
</script>

<template>
  <section id="structure" class="doc-section first:pt-0">
    <p class="doc-kicker">Structure</p>
    <h2>模板结构尽量固定</h2>
    <p>
      团队模板最怕“每个人都凭感觉写”。固定结构之后，同事只需要替换上下文，就能更快得到稳定结果。
    </p>
    <pre class="doc-code"><code>{{ templateSkeleton }}</code></pre>
  </section>

  <section id="examples" class="doc-section">
    <p class="doc-kicker">Examples</p>
    <h2>常用模板类型</h2>
    <div class="space-y-4">
      <div
        v-for="item in examples"
        :key="item.title"
        class="rounded-2xl border border-border/70 px-5 py-4"
      >
        <p class="font-medium">{{ item.title }}</p>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ item.text }}</p>
      </div>
    </div>
  </section>

  <section id="writing" class="doc-section">
    <p class="doc-kicker">Writing</p>
    <h2>写作建议</h2>
    <ul class="doc-list">
      <li>把任务背景写具体，而不是只写“帮我优化一下”。</li>
      <li>把输出格式写清楚，例如表格、列表、步骤说明或邮件草稿。</li>
      <li>如果有风格参考，直接附一段示例比抽象描述更有效。</li>
      <li>对于高风险内容，要明确要求 AI 标注不确定项。</li>
    </ul>
  </section>

  <section id="maintenance" class="doc-section">
    <p class="doc-kicker">Maintenance</p>
    <h2>模板怎样维护</h2>
    <p>
      不要把所有 Prompt 都堆成一个大列表。更实用的做法是按任务类型分组，并在模板下方补一行“适用场景”和“容易翻车的地方”。
    </p>
  </section>
</template>
