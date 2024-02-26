import axios from "axios";
import { reactive, toRefs } from "vue";

interface ResultTyp<T> {
  result: T | null;
  loading: boolean;
  error: any;
}

export default function useURLLoader<T>(url: string) {
  const res: ResultTyp<T> = reactive({
    result: null,
    loading: true,
    error: null,
  });
  const resToRefs = toRefs(res);

  axios
    .get(url)
    .then((response) => {
      res.result = response.data;
    })
    .catch((error) => {
      res.error = error;
    })
    .finally(() => {
      res.loading = false;
    });
  // toRef

  return resToRefs;
}
