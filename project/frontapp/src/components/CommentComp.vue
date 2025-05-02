<script>
import axios from 'axios';
const url = "http://localhost:3000/"
axios.defaults.baseURL = url;

export default {
  props: [ 'bid' ],
  data() {
    return {
      comments: [],
      myComment: {
        writer: "",
        content: "",
        bid: ""
      }
    };
  },
  methods: {
    regiComm() {
      axios.post(`comment`, this.myComment)
      .then(() => this.$router.push({ path: "/boardInfo", query: { id: this.boardId } }))
    }
  },
  mounted() {
    axios.get(`comment/${bid}`)
    .then(result => this.comments = result.data);
  }
}
</script>
<template>
<div class="row align-items-center mb-2">
  <div class="col-10">
    <label for="comment-writer" class="form-label">작성자</label>
    <input type="text" id="comment-writer" name="comment_writer" class="form-control form-control-sm" v-model="myComment.writer" />
  </div>
  <div class="col-2 d-flex align-items-end">
    <button class="btn btn-sm btn-info w-100" @click="regiComm()">등록</button>
  </div>
</div>
<div class="row">
  <ul class="comment">
    <li class="comment-list" v-for="comment in comments" :key="comment.id">
      <div class="bubble">
        <span class="comment-writer">{{ comment.writer }}</span><br>
        <span class="comment-content">{{ comment.content }}</span><br>
        <small class="comment-date">[{{ comment.created_date }}]</small>
      </div>
    </li>
  </ul>
</div>

<div class="mb-2">
  <label for="comment-content" class="form-label">내용</label>
  <textarea id="comment-content" class="form-control form-control-sm" rows="3" v-model="myComment.content"></textarea>
</div>

<p>댓글 목록 오는 위치</p>
</template>
<style>
  
</style>