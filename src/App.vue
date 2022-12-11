<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { darkTheme, lightTheme } from 'naive-ui'
import Menu from './components/menu/Menu.vue'

// 切换主题
const theme = ref(lightTheme)

const handleSwitchTheme = (e: boolean) => {
  theme.value = e ? lightTheme : darkTheme
}
</script>

<template>
  <n-config-provider preflight-style-disabled :theme="theme">
    <n-layout>
      <Menu @switch-theme="handleSwitchTheme" />
      <RouterView />
    </n-layout>
  </n-config-provider>
</template>
