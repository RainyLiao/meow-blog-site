<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from './components/menu/Menu.vue'
</script>

<template>
  <n-config-provider preflight-style-disabled>
    <n-layout>
      <Menu />
      <RouterView />
    </n-layout>
  </n-config-provider>
</template>
