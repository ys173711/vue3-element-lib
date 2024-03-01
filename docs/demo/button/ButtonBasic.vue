<script lang="ts" setup>
import EButton from "@/components/Button/E-Button.vue";
</script>

<template>
  <EButton>button</EButton>
  <EButton loading>loading</EButton>
  <div class="row">
    <e-button>btn</e-button>
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
    <e-button size="small">btn</e-button>
    <e-button>btn</e-button>
    <e-button size="large">btn</e-button>
  </div>
  <div class="row">
    <e-button loading>测试loading</e-button>
    <e-button icon="star">测试自定义icon</e-button>
  </div>
</template>

<style scoped>
.row {
  margin-top: 10px;
}
</style>
