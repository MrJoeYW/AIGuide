<script setup lang="ts">
const workflow = [
  '先明确目标读者和输出形式，再决定这篇内容是放首页、放模板页还是放规范页。',
  '写内容时尽量保留原始问题、上下文和修改后的版本，方便别人复用。',
  '发布前至少检查一次事实、时间、数字和敏感表述，避免把 AI 的猜测直接发出去。',
]

const checklist = [
  '标题是否能让人一眼看懂用途。',
  '开头有没有说明适用场景和限制。',
  '有没有至少一段可复制的示例。',
  '是否补充了人工复核点。',
]
</script>

<template>
  <section id="role" class="doc-section first:pt-0">
    <p class="doc-kicker">Role</p>
    <h2>这个站解决什么问题</h2>
    <p>
      这个站不是为了展示 AI 很酷，而是为了降低协作门槛。新同事可以在这里看到哪些任务适合借助 AI、怎样提问更高效，以及哪些结论绝对不能省略人工确认。
    </p>
  </section>

  <section id="workflow" class="doc-section">
    <p class="doc-kicker">Workflow</p>
    <h2>推荐协作流程</h2>
    <ol class="doc-ordered-list">
      <li v-for="item in workflow" :key="item">{{ item }}</li>
    </ol>
  </section>

  <section id="checklist" class="doc-section">
    <p class="doc-kicker">Checklist</p>
    <h2>首次贡献清单</h2>
    <ul class="doc-list">
      <li v-for="item in checklist" :key="item">{{ item }}</li>
    </ul>
  </section>

  <section id="publishing" class="doc-section">
    <p class="doc-kicker">Publishing</p>
    <h2>发布约定</h2>
    <p>
      先追求内容真实、结构清楚，再追求排版丰富。每一页尽量只解决一个问题，这样目录会更稳定，后面拆分也更轻松。
    </p>
    <p class="doc-note">
      一个实用原则：如果一页内容已经同时在讲“方法”、“案例”和“规范”，那通常该拆页了。
    </p>
  </section>
</template>
