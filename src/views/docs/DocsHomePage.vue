<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, Bot, FileText, Sparkles } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'

const readers = [
  '想让 AI 帮写周报、改文档、查资料的同事。',
  '想让 AI 自动处理表格、整理会议记录的人。',
  '想知道 AI 到底能帮自己干到什么程度、哪里容易出错的人。',
]

const takeaways = [
  '直接能用的指令模板，不讲空泛的“多试试”。',
  '贴近办公室真实流程的场景案例，知道什么时候该让 AI 上。',
  '把容易踩坑的地方提前说透，省掉返工和二次确认时间。',
]

const readingGuide = [
  '先看这一页，知道这个站是为谁写的、值不值得花时间看。',
  '再去看“AI 的本质”，先建立正确预期，避免把 AI 想得太神。',
  '继续看“AI 辅助开发流程”，把从需求对齐到验证沉淀的完整做法串起来。',
]

const contributors = [
  {
    name: '乔禹威',
    id: 'UW-27897',
    avatar: '/avatars/qiaoyuwei.png',
    fallback: '乔',
  },
  {
    name: '毛志成',
    id: 'UW-22503',
    avatar: '/avatars/maozhicheng.png',
    fallback: '毛',
  },
]

const sortedContributors = computed(() =>
  [...contributors].sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN')),
)
</script>

<template>
  <section id="why" class="doc-section first:pt-0">
    <p class="doc-kicker">Introduction</p>
    <h2>为什么做这个网站</h2>
    <p>
      网上的 AI 教程太多太杂，很多内容其实一直在绕圈子。这个网站想做的不是再讲一遍“AI 很厉害”，而是把平时真正好用的招数整理出来，过滤掉没用的信息，直接告诉大家在咱们公司怎么用 AI 才能早点下班，少干重复活。
    </p>

    <div class="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-3xl border border-border/70 bg-card/50 p-6">
        <p class="text-sm font-medium text-foreground">这份文档最核心的目标</p>
        <div class="mt-5 grid gap-4 sm:grid-cols-3">
          <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
            <Bot class="size-5 text-primary" />
            <p class="mt-3 font-medium">少讲概念</p>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">不花时间解释行业黑话，先解决手里的活。</p>
          </div>
          <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
            <Sparkles class="size-5 text-primary" />
            <p class="mt-3 font-medium">多讲可用</p>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">优先给可复制的写法和能马上试起来的套路。</p>
          </div>
          <div class="rounded-2xl border border-border/70 bg-background/70 p-4">
            <FileText class="size-5 text-primary" />
            <p class="mt-3 font-medium">贴近公司场景</p>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">尽量围绕文档、表格、会议记录这些高频办公任务。</p>
          </div>
        </div>
      </div>

      <div class="doc-note">
        <p class="mt-0 font-medium text-foreground">一句话概括</p>
        <p>
          这不是一份“AI 科普网站”，而是一份帮同事更快完成日常工作的内部说明书。
        </p>
      </div>
    </div>
  </section>

  <section id="audience" class="doc-section">
    <p class="doc-kicker">Audience</p>
    <h2>谁适合看</h2>
    <ul class="doc-list">
      <li v-for="reader in readers" :key="reader">{{ reader }}</li>
    </ul>
    <p>
      如果你平时经常在“先自己做一遍，还是让 AI 先出个草稿”之间犹豫，那这份文档基本就是写给你的。
    </p>
  </section>

  <section id="benefits" class="doc-section">
    <p class="doc-kicker">Benefits</p>
    <h2>你能得到什么</h2>
    <p>
      不讲大道理，只给直接能用的指令模板和具体的办公场景案例。你看完之后，至少应该知道哪些活可以先交给 AI 打底，哪些地方必须自己盯住。
    </p>

    <div class="mt-5 space-y-3">
      <div
        v-for="item in takeaways"
        :key="item"
        class="rounded-2xl border border-border/70 px-5 py-4"
      >
        <p class="text-sm leading-7 text-muted-foreground">{{ item }}</p>
      </div>
    </div>
  </section>

  <section id="how-to-use" class="doc-section">
    <p class="doc-kicker">How To Read</p>
    <h2>建议怎么读这份文档</h2>
    <ol class="doc-ordered-list">
      <li v-for="item in readingGuide" :key="item">{{ item }}</li>
    </ol>

    <div class="doc-actions">
      <RouterLink
        to="/ai-essence"
        :class="cn(buttonVariants({ size: 'sm' }))"
      >
        继续看 AI 的本质
        <ArrowRight class="size-4" />
      </RouterLink>
      <RouterLink
        to="/ai-dev-workflow"
        :class="cn(buttonVariants({ variant: 'outline', size: 'sm' }))"
      >
        看 AI 辅助开发流程
        <ArrowRight class="size-4" />
      </RouterLink>
    </div>
  </section>

  <section id="contributors" class="doc-section">
    <p class="doc-kicker">Co-build</p>
    <h2>欢迎大家一起来完善这份文档</h2>
    <p>
      这份说明书不是一次写完的，它更适合在真实使用中不断补充、纠错和沉淀。欢迎大家把自己试出来的好用方法、踩过的坑和更贴近业务的案例继续加进来，让它越来越像一份真正有用的团队手册。
    </p>

    <div class="doc-note mt-5">
      <p class="mt-0 font-medium text-foreground">感谢以下贡献</p>
      <p>以下排名不分先后，根据姓名自动排序</p>
    </div>

    <div class="mt-6 flex flex-wrap gap-4">
      <HoverCard
        v-for="person in sortedContributors"
        :key="person.id"
        :open-delay="120"
        :close-delay="80"
      >
        <HoverCardTrigger as-child>
          <button
            type="button"
            class="rounded-full outline-none ring-offset-background transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Avatar class="size-14 shadow-sm">
              <AvatarImage :src="person.avatar" :alt="person.name">
                <template #fallback>
                  <AvatarFallback>{{ person.fallback }}</AvatarFallback>
                </template>
              </AvatarImage>
            </Avatar>
          </button>
        </HoverCardTrigger>
        <HoverCardContent class="w-48">
          <p class="font-medium text-foreground">{{ person.name }}</p>
          <p class="mt-1 text-sm text-muted-foreground">{{ person.id }}</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  </section>
</template>
