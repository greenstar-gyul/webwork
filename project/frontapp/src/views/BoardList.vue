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
          <td>{{ board.updated_date }}</td>
          <td>{{ board.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
const url = "http://localhost:3000/"
axios.defaults.baseURL = url;

export default {
  data() {
    return {
      boards: []
    }
  },
  methods: {
    loadBoardList() {
      axios.get(`board`)
      .then(response => this.boards = response.data);
    },
    boardDetail(id) {
      this.$router.push({ path: "/boardInfo", query: { id: id } });
    }
  },
  mounted() {
    this.loadBoardList();
  }
}
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
