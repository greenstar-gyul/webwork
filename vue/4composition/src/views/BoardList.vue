<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boards" :key="board.id" @click="boardDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
          <td>{{ board.comments }}</td>
        </tr>
      </tbody>
    </table>
    {{ route.fullPath }}
  </div>
</template>
<script setup>
import axios from 'axios';
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';

const url = "/api/"
axios.defaults.baseURL = url;
const router = useRouter();
const route = useRoute();
const boards = ref([]);

loadBoardList();

async function loadBoardList() {
  let response = await axios.get(`board`)
  boards.value = response.data;
  // console.log(boards);
  // boards.value.forEach(b => b.comments = loadCommentCount(b.id));
}

function boardDetail(bid) {
  router.push({ path: "/boardInfo", query: { id: bid } });
}
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
