<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onUpdated,
  onBeforeMount,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
  provide,
} from "vue";
import MyProfile from "./MyProfile.vue";
import useMousePosition from "@/hooks/useMousePosition";
import useURLLoader from "@/hooks/useURLLoader";
import {langKeys} from '@/Symbol-keys'

interface User {
  name: string;
  age: number;
}

//
const count = ref<string | number>(0);
const increase = () => {
  if (typeof count.value === "number") {
    count.value++;
  }

  user.age++;
};

//
const user: User = reactive({
  name: "John",
  age: 8,
  addr: "NYC",
});
watch(
  [count, () => user.age],
  (newVal, oldVal) => {
    console.log(document.getElementById("count")?.innerText);
    console.log("user.age changed", oldVal, "=>", newVal);
  },
  {
    // immediate: true
    flush: "post",
  }
);

//
const buttonStatus = computed(() => {
  return user.age > 10
    ? {
      text: "可以参加活动",
      disabled: false,
    }
    : {
      text: "不可以参加活动",
      disabled: true,
    };
});
buttonStatus.value.text;

// lifecycle
onBeforeMount(() => {
  console.log("beforeMount");
});
onMounted(() => {
  console.log("mounted", headline.value?.innerHTML);
});
onBeforeUpdate(() => {
  console.log("beforeUpdate");
});
onUpdated(() => {
  console.log("updated");
});
onBeforeUnmount(() => {
  console.log("beforeUnmount");
});
onUnmounted(() => {
  console.log("unmounted");
});

//
// const headline = ref<HTMLElement>();
const headline = ref<HTMLElement>();

const onChange = (isHidden: boolean) => {
  document.title = isHidden ? "hidden" : "show";
};

// hooks: 点击时记录鼠标位置
const { x, y } = useMousePosition();

// hooks: useURLLoader
interface DogApiInterf {
  message: string;
  status: string;
}
const { loading, result } = useURLLoader<DogApiInterf>(
  "https://dog.ceo/api/breeds/image/random"
);

// provide
const lang = ref("zh");
provide(langKeys, lang);
const changeLang = (param: string) => {
  lang.value = param;
};

</script>

<template>
  <div>
    <button @click="changeLang('en')">英语</button>
    <button @click="changeLang('zh')">中文</button>
    <h1 id="count">{{ user.age }}</h1>
    <h2>{{ user.age }}</h2>
    <button @click="increase">increase</button>
    <button :disabled="buttonStatus.disabled">{{ buttonStatus.text }}</button>
    <my-profile @change="onChange" />
    <div>当前点击鼠标位置: {{ x }}, {{ y }}</div>
    <div v-if="loading">loading...</div>
    <div v-else>
      <img v-if="result" :src="result.message" />
    </div>
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
</style>
@/Symbol-keys