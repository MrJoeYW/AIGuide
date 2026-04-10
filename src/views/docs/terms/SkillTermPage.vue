<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">先怎么理解</p>
      <p class="text-base leading-7 text-muted-foreground">
        你可以把 Skill 理解成给 Agent 的“专门能力包”或“固定 SOP”。它不是底层模型本身的能力，而是围绕某一类任务整理好的规则、步骤、模板和约束。
      </p>
      <div class="doc-note">
        <p class="mt-0 font-medium text-foreground">先记住这一句</p>
        <p>
          <strong class="text-foreground">Skill 的价值，不在于让 AI 更聪明，而在于让它做具体事情时更稳定。</strong>
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        Skill 会出现，是因为通用 Agent 虽然什么都能做一点，但在高频具体任务里常常还是会不稳。大家不想每次都从头教它，于是就把成功经验沉淀成固定套路，下次直接复用。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        比如一个专门负责生成图片的 Skill，或者一个专门帮你创建插件目录结构的 Skill，本质上都是把“做这件事最靠谱的流程”提前装好，让 AI 少走弯路。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">和 Agent 的区别</p>
      <p class="text-base leading-7 text-muted-foreground">
        这是最容易混淆的一点：<strong class="text-foreground">Agent 更像“干活的人”，Skill 更像“这个人掌握的一套专门手法”。</strong>
      </p>
      <ul class="doc-list">
        <li>Agent 负责理解目标、拆解任务、决定下一步、推进流程。</li>
        <li>Skill 不负责整体决策，它更像某类任务的固定方法、模板和约束。</li>
        <li>可以理解成：Agent 决定“现在该干什么”，Skill 决定“这类事情应该怎么干更稳”。</li>
      </ul>
    </section>

    <section class="space-y-4">
      <p class="doc-kicker">Animation Area</p>
      <div class="term-animation-card">
        <div class="skill-animation">
          <div class="skill-box">
            <div class="skill-lid" />
            <div class="skill-base" />
          </div>
          <div class="skill-tool skill-tool-1">🔧</div>
          <div class="skill-tool skill-tool-2">🔨</div>
        </div>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">边界与痛点</p>
      <p class="text-base leading-7 text-muted-foreground">
        Skill 解决的是“怎么更稳地做某类任务”，但它解决不了“外部数据从哪里来”这个问题。也就是说，Skill 可以告诉 AI 按什么方法干活，但如果 AI 根本拿不到需要的文件、资源和系统数据，那它还是做不出来。
      </p>
      <ul class="doc-list">
        <li>Skill 更像流程经验，不等于外部知识本身。</li>
        <li>Skill 可以规范动作，但不能凭空打开你本地或内网里的信息。</li>
        <li>只会套路，不会连接数据，很多真实业务场景还是跑不通。</li>
      </ul>
      <p class="text-base leading-7 text-muted-foreground">
        这时候就会自然引出 <strong class="text-foreground">MCP</strong>。如果说 Skill 负责“怎么干”，那 MCP 更像负责“去哪拿数据、怎么接工具”。
      </p>
    </section>
  </div>
</template>
