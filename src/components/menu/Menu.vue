<script lang="ts" setup>
import type { Component } from 'vue'
import { defineComponent, h, ref } from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
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
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
  },
]
const activeKey = ref('')
</script>

<template>
  <!-- <div> -->
  <NMenu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  <!-- </div> -->
</template>
