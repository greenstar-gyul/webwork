<style>
.comment {
  list-style: none;
  padding: 0;
}

.comment-list {
  margin-bottom: 15px;
  display: flex;
}

.bubble {
  background: rgb(253, 255, 133);
  padding: 10px 15px;
  border-radius: 15px;
  position: relative;
  max-width: 60%;
}

/* 글자들 스타일 */
.comment-writer {
  font-weight: bold;
}

.comment-content {
  display: inline-block;
  margin-top: 5px;
}

.comment-date {
  color: gray;
  font-size: 0.8em;
}

</style>
<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ board.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ board.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ board.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ board.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ board.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info" @click="updateBoard()">수정</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <div class="row">
      <CommentComp :bid="boardId"></CommentComp>
    </div>
  </div>
</template>
<script>
import CommentComp from '@/components/CommentComp.vue';
import axios from 'axios';
const url = "/api/"
axios.defaults.baseURL = url;

export default {
  components: { CommentComp },
  data() {
    return {
      boardId: "",
      board: {}
    }
  },
  methods: {
    loadBoard() {
      axios.get(`board/${this.boardId}`)
        .then(response => {
          this.board = response.data[0];
        });
    },
    updateBoard() {
      this.$router.push({ path: "/boardUpdate", query: { id: this.boardId } });
    }
  },
  mounted() {
    this.boardId = this.$route.query.id;
    // console.log("moundted, " + this.boardId);
    this.loadBoard();
    // console.log(this.board);
  }
}
</script>
