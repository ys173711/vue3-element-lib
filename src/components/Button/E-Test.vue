<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import EButton from '@/components/Button/E-Button.vue'
import type { ButtonInstanceInterf } from '@/components/Button/types'

const buttonRef = ref<ButtonInstanceInterf>()
console.log('buttonRef: ', buttonRef.value?.el)
onMounted(() => {
  // console.log('onMounted, buttonRef: ', buttonRef.value?.el)
})

const msg = ref('测试<e-button>')

const logMsg = () => {
  console.log('msg: ', msg.value)
}

</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <main>
      <div class="row">
        <e-button @click="logMsg">btn</e-button>
        <e-button type="primary">btn</e-button>
        <e-button type="success">btn</e-button>
        <e-button type="info">btn</e-button>
        <e-button type="warning">btn</e-button>
        <e-button type="danger">btn</e-button>
      </div>
      <div class="row">
        <e-button plain>btn</e-button>
        <e-button type="primary" plain>btn</e-button>
        <e-button type="success" plain>btn</e-button>
        <e-button type="info" plain>btn</e-button>
        <e-button type="warning" plain>btn</e-button>
        <e-button type="danger" plain>btn</e-button>
      </div>
      <div class="row">
        <e-button round>btn</e-button>
        <e-button type="primary" round>btn</e-button>
        <e-button type="success" round>btn</e-button>
        <e-button type="info" round>btn</e-button>
        <e-button type="warning" round>btn</e-button>
        <e-button type="danger" round>btn</e-button>
      </div>
      <div class="row">
        <e-button circle>btn</e-button>
        <e-button type="primary" circle>btn</e-button>
        <e-button type="success" circle>btn</e-button>
        <e-button type="info" circle>btn</e-button>
        <e-button type="warning" circle>btn</e-button>
        <e-button type="danger" circle>btn</e-button>
      </div>
      <div class="row">
        <e-button disabled>btn</e-button>
        <e-button type="primary" disabled>btn</e-button>
        <e-button type="success" disabled>btn</e-button>
        <e-button type="info" disabled>btn</e-button>
        <e-button type="warning" disabled>btn</e-button>
        <e-button type="danger" disabled>btn</e-button>
      </div>
      <div class="row">
        <e-button size='small'>btn</e-button>
        <e-button>btn</e-button>
        <e-button size='large'>btn</e-button>
      </div>
    </main>
    
  </div>
</template>

<style scoped>
.row {
  margin-top: 10px;
}

</style>