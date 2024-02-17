<script lang="ts" setup>
import EButton from '@/components/Button/E-Button.vue'
import type { ButtonInstanceInterf } from '@/components/Button/types'
import { onMounted, ref } from 'vue';

const buttonRef = ref<ButtonInstanceInterf>()
console.log('buttonRef: ', buttonRef.value?.el)
onMounted(() => {
  console.log('onMounted, buttonRef: ', buttonRef.value?.el)
})
</script>

<template>
  <h1 class="title">Vue3 + TS 开发组件库</h1>
  <div>
    <e-button type='primary' ref="buttonRef">按钮</e-button>
    
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.title {
  --main-bg-color: yellow;
  background-color: var(--main-bg-color);
}
</style>