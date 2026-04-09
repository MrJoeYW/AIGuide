<script setup lang="ts">
const scenarios = [
  '适合先做结构化整理、初稿撰写、要点提炼和资料分类。',
  '适合做多个方案的对比分析，但最终取舍仍由人判断。',
  '不适合直接代替业务负责人做事实确认或外部正式承诺。',
]

const boundaries = [
  '涉及数字、日期、政策、法律、客户承诺时必须人工复核。',
  '涉及隐私、敏感信息和未公开材料时，先确认是否允许输入。',
  '对外发布内容不能只看语气自然，还要核查事实准确性。',
]

const faq = [
  {
    q: '是不是所有内容都要写得很正式？',
    a: '不是，内部文档以清楚和可复用为主，但关键事实必须准确。',
  },
  {
    q: '如果 AI 给出的答案看起来很像真的怎么办？',
    a: '把它当作草稿或线索，而不是结论，再回到原始材料核对。',
  },
]
</script>

<template>
  <section id="scenarios" class="doc-section first:pt-0">
    <p class="doc-kicker">Scenarios</p>
    <h2>适用场景</h2>
    <ul class="doc-list">
      <li v-for="item in scenarios" :key="item">{{ item }}</li>
    </ul>
  </section>

  <section id="boundaries" class="doc-section">
    <p class="doc-kicker">Boundaries</p>
    <h2>风险边界</h2>
    <ul class="doc-list">
      <li v-for="item in boundaries" :key="item">{{ item }}</li>
    </ul>
  </section>

  <section id="checklist" class="doc-section">
    <p class="doc-kicker">Checklist</p>
    <h2>审核清单</h2>
    <div class="rounded-2xl border border-border/70 px-5 py-5">
      <ol class="doc-ordered-list my-0">
        <li>事实是否来自可靠原始材料。</li>
        <li>时间、数字、名称是否逐项核对。</li>
        <li>是否有任何看似合理但未经验证的推断。</li>
        <li>是否明确标出了需要业务负责人确认的部分。</li>
      </ol>
    </div>
  </section>

  <section id="faq" class="doc-section">
    <p class="doc-kicker">FAQ</p>
    <h2>常见问题</h2>
    <div class="space-y-4">
      <div
        v-for="item in faq"
        :key="item.q"
        class="border-b border-border/70 pb-4 last:border-b-0"
      >
        <p class="font-medium">{{ item.q }}</p>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ item.a }}</p>
      </div>
    </div>
  </section>
</template>
