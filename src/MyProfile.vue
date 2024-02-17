<script lang='ts' setup>
import { computed, inject, ref,  } from 'vue'
import { langKeys } from './Symbol-keys';
import type { UserTyp } from './types'

interface EmitsInterf {
  (event: 'change', param: boolean): void
}
const emit = defineEmits<EmitsInterf>()

const props = withDefaults(defineProps<{
  readonly user?: UserTyp;
  msg2?: string;
}>(), {
  user: () => ({ name: 'default', age: 0 }),
  // msg2: 'default msg2'
})


const msg = ref('my profile')
const doubleAge = computed(() => props.user.age * 2)

//
const isHidden = ref(false)
const toggleHidden = () => {
  isHidden.value = !isHidden.value
  emit('change', isHidden.value)
}

//
const lang = inject(langKeys, ref('zh'))

</script>

<template>
  <div>
    <h2>当前语言: {{ lang }}</h2>
    <h1>{{ msg }}</h1>
    <h2>Name: {{ user.name }}</h2>
    <h2 v-show="!isHidden">Age: {{ user.age }}</h2>
    <h2>{{ doubleAge }}</h2>
    <button @click="toggleHidden">{{ isHidden ? '显示' : '隐藏' }}</button>
  </div>
</template>

<style lang='scss' scoped></style>./Symbol-keys