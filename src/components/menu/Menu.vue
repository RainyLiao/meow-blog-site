<script lang="ts" setup>
import type { Component } from 'vue'
import { defineComponent, h, ref } from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  ApertureOutline as ApertureIcon,
  BookOutline as BookIcon,
  LogoGithub as GithubIcon,
  HomeOutline as HomeIcon,
  Mail as MailIcon,
  RibbonOutline as RibbonIcon,
  SearchOutline as SearchIcon,
  SunnyOutline as SunIcon,
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
import meow from '@/assets/meow.svg'

const emit = defineEmits(['switchTheme'])

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => h('span', '首页') },
      ),
    key: 'home',
    icon: renderIcon(HomeIcon),
  },
  {
    label: '博客',
    key: 'blog',
    icon: renderIcon(BookIcon),
  },
  {
    label: '项目',
    key: 'product',
    icon: renderIcon(RibbonIcon),
  },
  {
    label: '友链',
    key: 'friendly-chain',
    icon: renderIcon(ApertureIcon),
  },
]
const activeKey = ref('')
const name = import.meta.env.VITE_APP_SITE_NAME
// 切换主题
const isSwitch = ref(true)
const switchTheme = () => {
  isSwitch.value = !isSwitch.value
  emit('switchTheme', isSwitch.value)
}
</script>

<template>
  <n-layout-header class="grid grid-rows-[63px] grid-cols-[240px_1fr_auto] px-32px" bordered>
    <div class="flex items-center">
      <n-image :src="meow" width="42" height="42" />
      <span class="ml-8px">{{ name }}</span>
    </div>
    <div class="flex items-center">
      <NMenu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      <n-input round placeholder="搜索" style="width: 216px;">
        <template #suffix>
          <NIcon :component="SearchIcon" />
        </template>
      </n-input>
    </div>
    <n-space align="center">
      <n-button circle>
        <template #icon>
          <NIcon><GithubIcon /></NIcon>
        </template>
      </n-button>
      <n-button circle>
        <template #icon>
          <NIcon><MailIcon /></NIcon>
        </template>
      </n-button>
      <n-button circle>
        <template #icon>
          <NIcon @click="switchTheme">
            <SunIcon />
          </NIcon>
        </template>
      </n-button>
    </n-space>
  </n-layout-header>
</template>
