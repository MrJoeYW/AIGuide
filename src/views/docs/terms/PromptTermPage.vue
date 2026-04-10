<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">先怎么理解</p>
      <p class="text-base leading-7 text-muted-foreground">
        你可以先把 Prompt 理解成给 AI 的任务说明书。它不是一句“咒语”，而是一份把背景、目标、限制条件、输出格式和评判标准说清楚的输入。
      </p>
      <div class="doc-note">
        <p class="mt-0 font-medium text-foreground">先记住这一句</p>
        <p>
          <strong class="text-foreground">Prompt 不是装饰，是把你的需求翻译成 AI 能执行的输入格式。</strong>
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        Prompt 会被单独拿出来讲，是因为模型虽然会生成内容，但它不会自动知道你到底要什么。你不给清楚，它就只能按最泛的概率去猜，所以经常会出现“看起来回答了，其实没答到点上”的情况。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        比如你让 AI 帮你写周报，如果只说“帮我写周报”，它很可能写成空泛总结；但如果你补上“本周项目背景、汇报对象、输出成 3 段式、保留风险项”，结果通常会立刻变得可用。
      </p>
    </section>

    <section class="space-y-4">
      <p class="doc-kicker">Animation Area</p>
      <div class="term-animation-card">
        <div class="prompt-animation">
          <div class="prompt-sheet">
            <span />
            <span />
            <span />
            <p class="prompt-sheet-label">说明书</p>
          </div>
          <div class="prompt-machine">大模型</div>
        </div>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">边界与痛点</p>
      <p class="text-base leading-7 text-muted-foreground">
        Prompt 重要，但它也不是万能的。很多人容易走向两个极端：一种是什么都不写，导致输出很虚；另一种是把所有信息都堆进去，结果上下文过长、噪声增加，反而让模型更不稳定。
      </p>
      <ul class="doc-list">
        <li>Prompt 不清楚时，模型会自己补空白，容易出现偏题或幻觉。</li>
        <li>Prompt 太长时，重点会被埋没，成本和词元消耗也会上升。</li>
        <li>Prompt 再好，也还是“一次输入”，很难天然覆盖复杂多步骤任务。</li>
      </ul>
      <p class="text-base leading-7 text-muted-foreground">
        所以当任务开始变复杂时，光靠 Prompt 往往不够，这时候就会自然引出后面的 <strong class="text-foreground">Agent</strong>。也就是说：Prompt 负责把需求说清楚，Agent 负责把事情做下去。
      </p>
    </section>
  </div>
</template>
