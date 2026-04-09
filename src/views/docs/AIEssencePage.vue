<script setup lang="ts">
const predictionFlow = [
  {
    title: '输入一个开头',
    description: '你给它问题、上下文、格式要求和一些示例。',
  },
  {
    title: '根据海量资料算概率',
    description: '模型会基于统计学、线性代数和信息论去计算“下一个最合理的字”。',
  },
  {
    title: '生成看起来像在理解的回答',
    description: '它能很像一个懂行的人，但“像懂”和“真的懂”不是一回事。',
  },
]

const boundaries = [
  {
    id: 'hallucination',
    title: '事实性的“幻觉”边界（概率 vs 逻辑）',
    intro:
      'AI 本质上是基于概率的“预测机器”，而不是逻辑严密的“计算机器”。',
    points: [
      '表现：即使是目前最强的模型，在处理极其冷门的编程库，比如公司内部封装的私有库，或深僻的行业标准时，仍可能一本正经地胡说八道。',
      '例子：如果你问它一个不存在的 .NET 库函数，它可能会根据命名习惯编造出一个看起来极其真实的 API 文档，甚至附带详尽的参数说明。',
    ],
  },
  {
    id: 'physics',
    title: '物理常识的边界',
    intro:
      'AI 拥有海量知识，但缺乏对物理世界“常识性”的直觉理解。',
    points: [
      '表现：它能背诵所有的物理公式，但在处理复杂的工业现场逻辑时，可能无法预判某些违反直觉的物理后果。',
      '例子：在规划激光焊接路径时，AI 可能会给出一个理论上最优、但实际会导致反射光损毁传感器的路径，因为它无法完全模拟物理环境中的实时连锁反应。',
    ],
  },
  {
    id: 'context',
    title: '实时私有上下文的“盲区”（连接边界）',
    intro:
      '即使有了 MCP，AI 的视野也只限于你真正开放给它的窗口。',
    points: [
      '表现：它不知道你在会议茶歇时的口头约定，也不知道你桌上那份还没扫描的纸质图纸。',
      '例子：“按照刚才会议的结论修改方案”，如果会议内容没有通过录音并转录给 Agent，AI 只能基于旧版数据进行猜测。',
    ],
  },
]
</script>

<template>
  <section id="prediction" class="doc-section first:pt-0">
    <p class="doc-kicker">Essence</p>
    <h2>AI “没有脑子”</h2>
    <p>
      如果我们从专业角度出发，AI 的运行机制并非简单的“词组匹配”，而是基于统计学、线性代数和信息论的复杂运算。你给它一个开头，它根据看过的海量资料，计算下一个字出什么最合理。它不理解逻辑，它只是在算概率。
    </p>

    <div class="mt-6 rounded-3xl border border-border/70 bg-card/50 p-6">
      <p class="text-sm font-medium text-foreground">一个最简化的理解方式</p>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <div
          v-for="item in predictionFlow"
          :key="item.title"
          class="rounded-2xl border border-border/70 bg-background/70 p-4"
        >
          <p class="font-medium">{{ item.title }}</p>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section
    v-for="item in boundaries"
    :id="item.id"
    :key="item.id"
    class="doc-section"
  >
    <p class="doc-kicker">Boundary</p>
    <h2>{{ item.title }}</h2>
    <p>{{ item.intro }}</p>
    <div class="mt-5 space-y-3">
      <div
        v-for="point in item.points"
        :key="point"
        class="rounded-2xl border border-border/70 px-5 py-4"
      >
        <p class="text-sm leading-7 text-muted-foreground">{{ point }}</p>
      </div>
    </div>
  </section>
</template>
