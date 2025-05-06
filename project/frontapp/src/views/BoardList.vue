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
        <tr v-for="board, idx in boards" :key="board.id" @click="boardDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
          <td>{{ commentNums[idx] }}</td>
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
      boards: [],
      commentNums: []
    }
  },
  methods: {
    loadBoardList() {
      axios.get(`board`)
        .then(response => {
          this.boards = response.data;
          this.boards.forEach(b => this.loadCommentCount(b.id));
        });
    },
    boardDetail(id) {
      this.$router.push({ path: "/boardInfo", query: { id: id } });
    },
    loadCommentCount(bid) {
      axios.get(`comment/count/${bid}`)
        .then(response => this.commentNums.push(response.data));
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
