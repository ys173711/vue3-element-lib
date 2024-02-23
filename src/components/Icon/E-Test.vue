<script lang="ts" setup>
import { ref } from "vue";
import EIcon from "./E-Icon.vue";
import type { FontAwesomeIconProps_temp } from "./types";

const msg = ref("<e-icon>");

const size = ref<FontAwesomeIconProps_temp["size"]>("2x");
setTimeout(() => {
  size.value = "6x";
}, 2000);

//
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <EIcon :icon="['fa-solid', 'user-secret']" type="danger" /><br />
    <EIcon icon="fa-solid fa-right-long" type="info" /><br />
    <EIcon icon="right-long" class="right-arrow" type="primary" /><br />
    <EIcon icon="fa-solid fa-rotate" spin type="success" /><br />
    <EIcon
      icon="fa-solid fa-rotate"
      spin
      type="success"
      color="red"
      :size="size"
    /><br />
  </div>
</template>

<style scoped></style>
