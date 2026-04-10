<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        MCP 出现，是因为 AI 如果只靠聊天框里的文字，视野太窄；真正干活时，它需要一种标准方式去连接文件、资源、数据库和内部系统。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        比如你让 AI 去读本地项目里的文档、查某个接口说明，或者访问内部知识库，这类“接外部上下文”的动作就经常会经过 MCP。
      </p>
    </section>

    <section class="space-y-4">
      <p class="doc-kicker">Animation Area</p>
      <div class="term-animation-card">
        <div class="mcp-animation">
          <div class="mcp-node">AI</div>
          <div class="mcp-link" />
          <div class="mcp-folder">
            <div class="mcp-folder-tab" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
