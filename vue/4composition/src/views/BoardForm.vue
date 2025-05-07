<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="no" v-model="board.id" readonly />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="board.title"/>

      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="board.writer"/>

      <label for="content">내용</label>
      <textarea id="content" style="height: 200px" v-model="board.content"></textarea>

      <label for="regdate">작성일자</label>
      <input type="text" v-model="board.created_date" readonly />

      <button type="button" class="btn btn-xs btn-info" @click="saveBoard()">저장</button>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

// 기본 URL 설정
axios.defaults.baseURL = "/api/";

const route = useRoute();
const router = useRouter();

// 상태 변수
const boardId = ref('');
const board = ref({});

// 게시글 불러오기
const loadBoard = () => {
  axios.get(`board/${boardId.value}`)
    .then(response => {
      board.value = response.data[0];
    });
};

// 게시글 저장 (수정)
const saveBoard = () => {
  axios.put(`board/${boardId.value}`, board.value)
    .then(() => {
      router.push({ path: "/boardInfo", query: { id: boardId.value } });
    })
    .catch(err => {
      console.log(err);
    });
};

// 최초 로딩
onMounted(() => {
  boardId.value = route.query.id;
  loadBoard();
});

// query.id 변경 시 다시 불러오기
watch(() => route.query.id, (newId) => {
  boardId.value = newId;
  loadBoard();
});
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%;
  /* Full width */
  padding: 12px;
  /* Some padding */
  border: 1px solid #ccc;
  /* Gray border */
  border-radius: 4px;
  /* Rounded borders */
  box-sizing: border-box;
  /* Make sure that padding and width stays in place */
  margin-top: 6px;
  /* Add a top margin */
  margin-bottom: 16px;
  /* Bottom margin */
  resize: vertical;
  /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
