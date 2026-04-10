<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <p class="doc-kicker">先怎么理解</p>
      <p class="text-base leading-7 text-muted-foreground">
        你可以先把 LLM 类比成一个非常复杂的函数。你给它输入，它根据训练得到的算法和当前上下文，算出一个最可能的输出。它看起来像在“理解”，但更准确地说，它是在做高维概率计算。
      </p>
      <div class="doc-note">
        <p class="mt-0 font-medium text-foreground">先记住这一句</p>
        <p>
          <strong class="text-foreground">LLM = 输入进去一段上下文，输出回来一段最可能的文本。</strong>
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">由来</p>
      <p class="text-base leading-7 text-muted-foreground">
        LLM 出现，是因为大家希望机器不只会按固定规则匹配关键词，而是真的能处理复杂语言任务，比如写总结、答问题、翻译、写代码、改方案。传统规则系统很难覆盖这些开放问题，所以才会出现这种用大规模训练学“语言分布”的模型。
      </p>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">场景</p>
      <p class="text-base leading-7 text-muted-foreground">
        比如你把一大段会议纪要输入进去，让它整理成“结论、待办、风险”三段式摘要，这背后最底层真正工作的就是 LLM。你给的是原始文本输入，它返回的是符合你目标的文字输出。
      </p>
    </section>

    <section class="space-y-4">
      <p class="doc-kicker">Animation Area</p>
      <div class="term-animation-card">
        <div class="llm-animation llm-io-animation">
          <div class="llm-panel llm-input-panel">
            <p class="llm-panel-label">输入</p>
            <div class="llm-input-pill llm-input-pill-1">会议纪要</div>
            <div class="llm-input-pill llm-input-pill-2">目标读者</div>
            <div class="llm-input-pill llm-input-pill-3">输出格式</div>
          </div>

          <div class="llm-node">LLM</div>

          <div class="llm-panel llm-output-panel">
            <p class="llm-panel-label">输出</p>
            <div class="llm-stream">
              <span class="llm-token llm-token-1">结论</span>
              <span class="llm-token llm-token-2">待办</span>
              <span class="llm-token llm-token-3">风险</span>
              <span class="llm-token llm-token-4">建议</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">边界测试</p>
      <p class="text-base leading-7 text-muted-foreground">
        一个很有趣的测试是：你给 AI 发一条消息，同时在消息里写“禁止你回复任何内容”。结果大概率仍然会回复你。原因不是它故意不听话，而是对于 LLM 来说，“收到用户输入后生成回复”本身就是它最核心的工作模式。
      </p>
      <div class="rounded-2xl border border-border/70 bg-card/50 p-5">
        <p class="text-sm font-medium text-foreground">这说明了什么</p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          LLM 不是一个真正会“停下来思考系统边界”的主体，它更像一个持续接收输入并尝试产出输出的函数。你越理解这一点，就越不会把它想成一个真正有主观意志的“数字同事”。
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <p class="doc-kicker">单纯 LLM 的痛点</p>
      <p class="text-base leading-7 text-muted-foreground">
        单纯的 LLM 有一个非常核心的限制：<strong class="text-foreground">它没有真正的人类式长期记忆。</strong>
        所谓“它记得你们刚才聊过什么”，本质上通常只是把当前会话里的上下文重新拿出来一起参与计算。
      </p>
      <ul class="doc-list">
        <li>会话越长，模型每次都要处理的上下文越多。</li>
        <li>上下文越多，消耗的词元（Token）通常也越高。</li>
        <li>当输入越来越长时，成本、延迟和信息噪声都会一起上来。</li>
      </ul>
      <p class="text-base leading-7 text-muted-foreground">
        也正因为这个问题，后面才会慢慢引出更多“在 LLM 外面补能力”的方案，比如让 <strong class="text-foreground">Skill</strong> 负责固定套路，让 <strong class="text-foreground">Agent</strong> 负责分步执行，让 <strong class="text-foreground">MCP</strong> 负责按需连接外部上下文，而不是把所有东西一股脑塞进一段超长对话里。
      </p>
    </section>
  </div>
</template>
