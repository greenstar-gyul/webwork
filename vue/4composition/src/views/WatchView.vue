<script setup>
import { computed, reactive, ref, watch } from 'vue'

const question = ref('');
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.');
const src = ref('');
const books = reactive([
  'Vue 2 - Advanced Guide',
  'Vue 3 - Basic Guide',
  'Vue 4 - The Mystery'
]);

const getAnswer = async () => {
  answer.value = '생각 중...'
  try {
    const res = await fetch('https://yesno.wtf/api');
    const resJson = await res.json();
    answer.value = resJson.answer === 'yes' ?
      '네' : '아니오'
    src.value = resJson.image;
  } catch (error) {
    answer.value = '에러! API에 연결할 수 없습니다.' + error
  }
}
const booksLength = computed(() => books.length);
watch(question, (newQ, oldQ) => { if (newQ.includes('?')) getAnswer(); });
</script>
<template>
  <input v-model="question">
  <div>{{ answer }}</div>
  <img :src="src" alt="">
  <hr>
  {{ booksLength > 0 ? "Yes!" : "No!" }}
</template>
<style></style>