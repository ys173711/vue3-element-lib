import axios from 'axios'
import { reactive, toRefs, toRef, ref } from 'vue'

interface ResultTyp {
  result: any,
  loading: boolean,
  error: any
}

export default function useURLLoader(url: string) {
  const res = reactive<ResultTyp>({
    result: null,
    loading: true,
    error: null
  })
  const resToRefs = toRefs(res)
  axios.get(url).then((response) => {
    res.result = response.data
  }).catch((error) => {
    res.error = error
  }).finally(() => {
    res.loading = false
  })
  // toRef

  return resToRefs
} 