<script lang='ts'>
import { computed, defineComponent, ref, PropType } from 'vue'

interface UserTyp {
  name: string;
  age: number;
}
export default defineComponent({
  name: 'MyProfile',
  emits: ['change'],
  props: {
    user: {
      type: Object as PropType<UserTyp>,
      required: true
    },
  },
  setup(props, { emit }) {
    const msg = ref('my profile')
    const doubleAge = computed(() => props.user.age * 2)
    
    //
    const isHidden = ref(false)
    const toggleHidden = () => {
      isHidden.value = !isHidden.value
      emit('change', isHidden.value)
    }

    return {
      msg,
      doubleAge,
      isHidden,
      toggleHidden,
    }
  }
})


</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Name: {{ user.name }}</h2>
    <h2 v-show="!isHidden">Age: {{ user.age }}</h2>
    <h2>{{ doubleAge }}</h2>
    <button @click="toggleHidden">{{ isHidden ? '显示' : '隐藏' }}</button>
  </div>
</template>

<style lang='scss' scoped>

</style>