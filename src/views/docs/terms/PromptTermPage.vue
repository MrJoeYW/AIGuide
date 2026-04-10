<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        Prompt 出现，是因为模型虽然会生成内容，但不会自动知道你到底想要什么，所以必须有人给它一份足够清楚的说明书。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        比如你让 AI 帮你写周报，如果只说“帮我写周报”，它可能写得很空；如果补上本周项目、目标读者和输出格式，结果就会立刻好很多。
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
          </div>
          <div class="prompt-machine">AI</div>
        </div>
      </div>
    </section>
  </div>
</template>
