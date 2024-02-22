<script lang="ts" setup>
import { ref } from "vue";
import EIcon from "./E-Icon.vue";

const msg = ref("<e-icon>");
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <EIcon :icon="['fa-solid', 'user-secret']" type="danger" /><br />
    <EIcon icon="fa-solid fa-right-long" type="info" /><br />
    <EIcon icon="right-long" class="right-arrow" type="primary" /><br />
    <EIcon icon="fa-solid fa-rotate" spin type="success" /><br />
    <EIcon icon="fa-solid fa-rotate" spin type="success" color="" /><br />
  </div>
</template>

<style scoped></style>
