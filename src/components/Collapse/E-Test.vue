<script lang="ts" setup>
import { ref } from "vue";
import ECollapseItem from "./E-Collapse-Item.vue";
import ECollapse from "./E-Collapse.vue";

const msg = ref("测试<e-collapse-item>");

const inputVal = ref(["2"]);
setTimeout(() => {
  inputVal.value = ["3", "1"];
}, 2000);
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>inputVal: {{ inputVal }}</h2>
    <!-- <ECollapse v-model="inputVal" accordion> -->
    <ECollapse v-model="inputVal">
      <ECollapseItem name="1" title="title1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quidem est exercitationem qui sit vel, nobis quibusdam ab sint iusto commodi praesentium fugiat voluptatum, consectetur minima veniam in voluptatibus repudiandae!</p>
      </ECollapseItem>
      <ECollapseItem name="2" title="title2">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti enim vero voluptatum veritatis blanditiis commodi iusto facilis. Voluptates dolores atque aliquid culpa excepturi enim quaerat, tempora velit accusantium error?</p>
      </ECollapseItem>
      <ECollapseItem name="3" title="title3">
        <template #title>
          <h1>自定义标题</h1>
        </template>
        <template #default>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
        </template>
      </ECollapseItem>
      <ECollapseItem name="4" disabled>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rem dolores sunt impedit quas cupiditate perferendis eos voluptas soluta nulla? Facere quam magni, culpa animi minima cupiditate ducimus aliquam facilis.</p>
      </ECollapseItem>
    </ECollapse>
  </div>
</template>

<style scoped></style>
