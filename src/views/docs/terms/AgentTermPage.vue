<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        Agent 出现，是因为大家不满足于“问一句答一句”，而是希望 AI 真正帮忙执行一连串动作，比如读项目、改文件、跑命令、整理结果。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        例如你让 AI 帮你排查一个前端页面为什么白屏，它会先看文件、再查路由、再修代码、最后跑构建验证，这就是 Agent 的典型工作方式。
      </p>
    </section>

    <section class="space-y-4">
      <p class="doc-kicker">Animation Area</p>
      <div class="term-animation-card">
        <div class="agent-animation">
          <div class="agent-ring" />
          <div class="agent-ring agent-ring-delay" />
          <div class="agent-core">执行中</div>
        </div>
      </div>
    </section>
  </div>
</template>
