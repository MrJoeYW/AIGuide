<script setup lang="ts">
import { ArrowRight, BookOpenText, FileText, Lightbulb, Sparkles } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import { docsNavGroups } from '@/content/docs'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const updates = [
  {
    date: '2026-04-09',
    title: '文档站骨架上线',
    detail: '完成顶部导航、左侧目录、右侧页内目录和多页面路由结构。',
  },
  {
    date: '2026-04-12',
    title: '准备补内容页',
    detail: '下一步会把 Prompt 模板、案例复盘和规范页内容逐步替换成真实材料。',
  },
]

const readingPath = [
  '先看“快速上手”，了解这个站解决什么问题、适合谁看。',
  '再看“Prompt 模板”，把零散技巧沉淀成可复制结构。',
  '接着看“案例复盘”，学习如何记录一次完整协作过程。',
  '最后看“使用规范”，明确哪些结果必须人工判断。',
]

const samplePrompt = `# 背景
你是部门内部知识库的整理助手，需要把一次 AI 使用心得分享整理成文档。

# 读者
第一次接触这套工作流的同事。

# 输出要求
1. 用小标题组织内容
2. 保留可复制的示例
3. 明确哪些结论需要人工复核`
</script>

<template>
  <section id="overview" class="doc-section first:pt-0">
    <p class="doc-kicker">Overview</p>
    <h2>先搭好入口页，再逐步把经验拆成文档。</h2>
    <p>
      现在首页不再承担所有内容，而是承担“导览”职责。它负责告诉同事这个站解决什么问题、推荐先读什么、每个栏目大概放什么。真正的内容页已经拆出去，后面我们可以逐页填充真实材料。
    </p>
    <div class="doc-actions">
      <RouterLink
        to="/guides/getting-started"
        :class="cn(buttonVariants({ size: 'sm' }))"
      >
        从快速上手开始
      </RouterLink>
      <RouterLink
        to="/playbooks/prompt-templates"
        :class="cn(buttonVariants({ variant: 'outline', size: 'sm' }))"
      >
        查看模板页
      </RouterLink>
    </div>
  </section>

  <section id="reading-path" class="doc-section">
    <p class="doc-kicker">Reading Path</p>
    <h2>推荐阅读路线</h2>
    <ol class="doc-ordered-list">
      <li v-for="item in readingPath" :key="item">{{ item }}</li>
    </ol>
    <p class="doc-note">
      如果你的同事只看一页，先让他看“快速上手”；如果已经开始实践，再去看模板和案例会更顺。
    </p>
  </section>

  <section id="content-map" class="doc-section">
    <p class="doc-kicker">Content Map</p>
    <h2>内容地图</h2>
    <div class="doc-link-list">
      <template v-for="group in docsNavGroups" :key="group.title">
        <p class="doc-link-group">{{ group.title }}</p>
        <RouterLink
          v-for="item in group.items"
          :key="item.to"
          :to="item.to"
          class="group doc-link-row"
        >
          <div class="flex items-start gap-3">
            <div class="mt-0.5 text-primary">
              <component
                :is="
                  item.to === '/'
                    ? FileText
                    : item.to.includes('prompt')
                      ? Sparkles
                      : item.to.includes('case')
                        ? BookOpenText
                        : Lightbulb
                "
                class="size-4"
              />
            </div>
            <div>
              <p class="font-medium text-foreground">{{ item.title }}</p>
              <p class="mt-1 text-sm text-muted-foreground">{{ item.description }}</p>
            </div>
          </div>
          <ArrowRight class="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </RouterLink>
      </template>
    </div>
  </section>

  <section id="sample" class="doc-section">
    <p class="doc-kicker">Sample</p>
    <h2>首页保留一段可复制内容就够了</h2>
    <p>
      文档首页不需要塞太多模块。放一段示例 Prompt、一个推荐阅读顺序，再加几条内容入口，已经足够帮助同事开始使用。
    </p>
    <pre class="doc-code"><code>{{ samplePrompt }}</code></pre>
  </section>

  <section id="updates" class="doc-section">
    <p class="doc-kicker">Updates</p>
    <h2>近期更新</h2>
    <div class="doc-timeline">
      <div
        v-for="item in updates"
        :key="item.date"
        class="doc-timeline-row"
      >
        <p class="doc-timeline-date">{{ item.date }}</p>
        <div>
          <p class="font-medium">{{ item.title }}</p>
          <p class="mt-1 text-sm leading-6 text-muted-foreground">{{ item.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
