<script lang="ts">
import { defineComponent, ref, reactive, computed, watch, onMounted, onUpdated, onBeforeMount, onBeforeUpdate, onUnmounted, onBeforeUnmount } from "vue";

interface User {
  name: string;
  age: number;
}

export default defineComponent({
  name: "App",
  setup() {
    // 
    const count = ref<string|number>(0)
    const increase = () => {
      if (typeof count.value === 'number') {
        count.value++
      }
      
      user.age++
    }

    // 
    const user: User = reactive({
      name: 'John',
      age: 8,
      addr: 'NYC'
    })
    watch([count, () => user.age], (newVal, oldVal) => {
      console.log(document.getElementById('count')?.innerText)
      console.log('user.age changed', oldVal, '=>', newVal)
    }, {
      // immediate: true
      flush: 'post'
    })

    // 
    const buttonStatus = computed(() => {
      return user.age > 10 ? {
        text: '可以参加活动',
        disabled: false
      }: {
        text: '不可以参加活动',
        disabled: true
      }
    })
    buttonStatus.value.text

    // lifecycle
    onBeforeMount(() => {
      console.log('beforeMount')
    })
    onMounted(() => {
      console.log('mounted', headline.value?.innerHTML)
    })
    onBeforeUpdate(() => {
      console.log('beforeUpdate')
    })
    onUpdated(() => {
      console.log('updated')
    })
    onBeforeUnmount(() => {
      console.log('beforeUnmount')
    })
    onUnmounted(() => {
      console.log('unmounted')
    })

    //
    const headline = ref<null | HTMLElement>(null)
    console.log('setup', headline.value)


    return {
      count,
      increase,
      user,
      buttonStatus,
      headline
    }
  },
});
</script>

<template>
  <div>
    <h1 id="count" ref="headline">{{ count }}</h1>
    <h2>{{ user.age }}</h2>
    <button @click="increase">increase</button>
    <button :disabled="buttonStatus.disabled">{{ buttonStatus.text }}</button>
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
