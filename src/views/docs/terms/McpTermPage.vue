<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">先怎么理解</p>
      <p class="text-base leading-7 text-muted-foreground">
        你可以把 MCP 理解成 AI 连接外部世界的一种标准接口。它不是模型，不是 Prompt，也不是任务流程，而是解决“AI 怎么安全、规范地连到文件、资源、系统和工具”这件事。
      </p>
      <div class="doc-note">
        <p class="mt-0 font-medium text-foreground">先记住这一句</p>
        <p>
          <strong class="text-foreground">MCP 不是让 AI 更会想，而是让 AI 看得更多、接得更远。</strong>
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        MCP 会出现，是因为 AI 如果只待在聊天框里，视野非常有限。真正工作时，它经常需要读本地文件、接知识库、查项目资源、连内部系统，所以需要一种统一而标准的连接方式。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        比如你让 AI 去读项目里的需求文档、查看本地配置文件、连接内部知识库查询说明，这类“让 AI 看到聊天框以外的信息”的动作，本质上就是 MCP 发挥价值的地方。
      </p>
    </section>

    <section class="space-y-4">
      <p class="doc-kicker">Animation Area</p>
      <div class="term-animation-card">
        <div class="mcp-animation">
          <svg class="mcp-diagram-lines" viewBox="0 0 760 440" aria-hidden="true">
            <defs>
              <marker
                id="mcpArrow"
                markerWidth="9"
                markerHeight="9"
                refX="7"
                refY="4.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L9,4.5 L0,9" fill="#94a3b8" />
              </marker>
            </defs>
            <line class="mcp-line" x1="380" y1="58" x2="380" y2="138" marker-end="url(#mcpArrow)" />
            <line class="mcp-line" x1="126" y1="160" x2="290" y2="160" marker-end="url(#mcpArrow)" />
            <line class="mcp-line" x1="634" y1="160" x2="470" y2="160" marker-end="url(#mcpArrow)" />
            <line class="mcp-line" x1="126" y1="286" x2="290" y2="286" marker-end="url(#mcpArrow)" />
            <line class="mcp-line" x1="634" y1="286" x2="470" y2="286" marker-end="url(#mcpArrow)" />
            <line class="mcp-line" x1="380" y1="380" x2="380" y2="304" marker-end="url(#mcpArrow)" />
          </svg>

          <div class="mcp-service mcp-service-top">
            <div class="mcp-service-icon mcp-service-icon-database">
              <span class="mcp-database-top" />
              <span class="mcp-database-middle" />
              <span class="mcp-database-bottom" />
            </div>
            <p class="mcp-service-label">Database</p>
          </div>

          <div class="mcp-service mcp-service-left-top">
            <div class="mcp-service-icon mcp-service-icon-api">WWW</div>
            <p class="mcp-service-label">Web APIs</p>
          </div>

          <div class="mcp-service mcp-service-right-top">
            <div class="mcp-service-icon mcp-service-icon-github">GH</div>
            <p class="mcp-service-label">GitHub</p>
          </div>

          <div class="mcp-service mcp-service-left-bottom">
            <div class="mcp-service-icon mcp-service-icon-slack">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p class="mcp-service-label">Slack</p>
          </div>

          <div class="mcp-service mcp-service-right-bottom">
            <div class="mcp-service-icon mcp-service-icon-gmail">M</div>
            <p class="mcp-service-label">Gmail</p>
          </div>

          <div class="mcp-service mcp-service-bottom">
            <div class="mcp-service-icon mcp-service-icon-folder">
              <span class="mcp-folder-tab" />
              <span class="mcp-folder-body" />
            </div>
            <p class="mcp-service-label">本地文件夹</p>
          </div>

          <div class="mcp-link-label mcp-link-label-top">MCP</div>
          <div class="mcp-link-label mcp-link-label-left-top">MCP</div>
          <div class="mcp-link-label mcp-link-label-right-top">MCP</div>
          <div class="mcp-link-label mcp-link-label-left-bottom">MCP</div>
          <div class="mcp-link-label mcp-link-label-right-bottom">MCP</div>
          <div class="mcp-link-label mcp-link-label-bottom">MCP</div>

          <div class="mcp-port mcp-port-top">
            <span class="mcp-port-socket" />
            <span class="mcp-port-plug" />
          </div>
          <div class="mcp-port mcp-port-left-top">
            <span class="mcp-port-socket" />
            <span class="mcp-port-plug" />
          </div>
          <div class="mcp-port mcp-port-right-top">
            <span class="mcp-port-socket" />
            <span class="mcp-port-plug" />
          </div>
          <div class="mcp-port mcp-port-left-bottom">
            <span class="mcp-port-socket" />
            <span class="mcp-port-plug" />
          </div>
          <div class="mcp-port mcp-port-right-bottom">
            <span class="mcp-port-socket" />
            <span class="mcp-port-plug" />
          </div>
          <div class="mcp-port mcp-port-bottom">
            <span class="mcp-port-socket" />
            <span class="mcp-port-plug" />
          </div>

          <div class="mcp-app-card">
            <div class="mcp-app-device">
              <div class="mcp-app-screen">AI</div>
              <span class="mcp-app-chip mcp-app-chip-1" />
              <span class="mcp-app-chip mcp-app-chip-2" />
              <span class="mcp-app-chip mcp-app-chip-3" />
              <span class="mcp-app-chip mcp-app-chip-4" />
              <span class="mcp-app-chip mcp-app-chip-5" />
              <span class="mcp-app-chip mcp-app-chip-6" />
              <span class="mcp-app-chip mcp-app-chip-7" />
              <span class="mcp-app-chip mcp-app-chip-8" />
            </div>
            <p class="mcp-app-title">AI Application</p>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">边界与痛点</p>
      <p class="text-base leading-7 text-muted-foreground">
        MCP 只是“连通”，不等于“理解”和“执行”。它能让 AI 看见更多东西，但 AI 看到了之后怎么理解、如何行动、是否可靠，仍然要回到前面的 LLM、Prompt、Agent 和 Skill。
      </p>
      <ul class="doc-list">
        <li>MCP 能解决“拿不到数据”的问题，但不保证结论一定对。</li>
        <li>MCP 带来的一个现实问题是权限边界，哪些内容允许开放给 AI 很重要。</li>
        <li>连接越多，越需要明确范围，否则 AI 容易在无关信息里打转。</li>
      </ul>
      <p class="text-base leading-7 text-muted-foreground">
        所以回头看整条链路就会更清楚：<strong class="text-foreground">LLM 负责生成，Prompt 负责说明，Agent 负责执行，Skill 负责专项稳定，MCP 负责接外部世界。</strong>
        这些概念不是互相替代，而是在同一条工作流里各司其职。
      </p>
    </section>
  </div>
</template>
