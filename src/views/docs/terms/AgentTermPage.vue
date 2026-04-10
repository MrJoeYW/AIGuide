<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">先怎么理解</p>
      <p class="text-base leading-7 text-muted-foreground">
        你可以把 Agent 理解成一个“会自己推进工作流的 AI”。如果说 LLM 更像一个负责生成文本的引擎，那 Agent 更像一个会模仿人类处理任务的人：先理解目标、再拆解步骤、接着决定先做什么、需要什么工具、做完后还会继续推进下一步。
      </p>
      <div class="doc-note">
        <p class="mt-0 font-medium text-foreground">先记住这一句</p>
        <p>
          <strong class="text-foreground">Agent = LLM + 目标驱动 + 任务拆解 + 自主决策 + 多步执行。</strong>
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        Agent 会出现，是因为大家不满足于“问一句答一句”。真正的工作往往不是一次回复就能结束，而是要像人一样先拆任务、再排顺序、再做判断、再执行动作，最后还要检查结果并继续推进。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        例如你让 AI 帮你排查一个页面为什么白屏，它不会只给一句猜测，而是会先看入口文件、再查路由、再看控制台报错、然后决定先修哪一处、最后跑构建验证。这就已经很像一个人在自主地走排障流程。
      </p>
    </section>

    <section class="space-y-4">
      <p class="doc-kicker">Animation Area</p>
      <div class="term-animation-card">
        <div class="agent-animation">
          <svg class="agent-diagram" viewBox="0 0 320 320" aria-hidden="true">
            <defs>
              <marker
                id="agentArrowBlue"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L10,5 L0,10" fill="none" stroke="#6ea8ff" stroke-width="1.8" stroke-linecap="round" />
              </marker>
              <marker
                id="agentArrowGreen"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L10,5 L0,10" fill="none" stroke="#87dca9" stroke-width="1.8" stroke-linecap="round" />
              </marker>
            </defs>
            <circle class="agent-orbit-ring" cx="160" cy="160" r="118" />
            <path
              class="agent-flow-path agent-flow-path-blue"
              d="M232 86 A 96 96 0 0 1 246 236"
              marker-end="url(#agentArrowBlue)"
            />
            <path
              class="agent-flow-path agent-flow-path-green"
              d="M230 228 A 86 86 0 0 1 100 226"
              marker-end="url(#agentArrowGreen)"
            />
          </svg>
          <div class="agent-step agent-step-top">理解目标</div>
          <div class="agent-step agent-step-right">拆解任务</div>
          <div class="agent-step agent-step-bottom">决策</div>
          <div class="agent-step agent-step-left">执行</div>
          <div class="agent-core">自主推进</div>
        </div>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">边界与痛点</p>
      <p class="text-base leading-7 text-muted-foreground">
        Agent 虽然会“做事”，但不代表它天然就会把每一类事情都做得稳定。它能模仿人类拆任务、自主决策、推进流程，但不代表它天然就有成熟的专项套路；它能调用工具，也不代表它天然知道每个团队的最佳实践。
      </p>
      <ul class="doc-list">
        <li>Agent 很强，但如果没有稳定流程，做同类任务时可能风格不一致。</li>
        <li>Agent 会行动，所以权限、边界和约束比普通聊天更重要。</li>
        <li>当任务高度专业化时，Agent 还需要额外的“经验包”来避免重复试错。</li>
      </ul>
      <p class="text-base leading-7 text-muted-foreground">
        也正因为如此，后面才会引出 <strong class="text-foreground">Skill</strong>。你可以把 Skill 看作是给 Agent 装上的“专项能力模块”，让它处理某类任务时更稳、更像团队自己的做法。
      </p>
    </section>
  </div>
</template>
