<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'; // 필요시

// props 정의
const props = defineProps(['bid']);

const url = "/api/";
axios.defaults.baseURL = url;

// 상태 정의
const comments = ref([]);
const myComment = ref({
  writer: '',
  content: '',
  bid: props.bid
});

// 댓글 불러오기
const loadComm = () => {
  axios.get(`comment/${props.bid}`)
    .then(result => {
      comments.value = result.data;
    });
};

// 댓글 등록
const regiComm = () => {
  axios.post('comment', myComment.value)
    .then(() => {
      loadComm();
      myComment.value.writer = "";
      myComment.value.content = "";
  });
};

// 댓글 삭제
const delComm = (id) => {
  axios.delete(`comment/${id}`)
    .then(() => loadComm());
};

// bid 변경 시 myComment.bid 업데이트 및 댓글 로드
watch(() => props.bid, (newBid) => {
  myComment.value.bid = newBid;
  loadComm();
});

// 필요한 경우 mount 시 초기 로드
onMounted(() => {
  myComment.value.bid = props.bid;
  loadComm();
});
</script>
<template>
  <div class="row align-items-center mb-2">
    <div class="col-10">
      <label for="comment-writer" class="form-label">작성자</label>
      <input type="text" id="comment-writer" name="comment_writer" class="form-control form-control-sm"
        v-model="myComment.writer" />
    </div>
    <div class="col-2 d-flex align-items-end">
      <button class="btn btn-sm btn-info w-100" @click="regiComm()">등록</button>
    </div>
  </div>
  <div class="mb-2">
    <label for="comment-content" class="form-label">내용</label>
    <textarea id="comment-content" class="form-control form-control-sm" rows="3" v-model="myComment.content"></textarea>
  </div>
  <div class="row">
    <ul class="comment">
      <li class="comment-list" v-for="comment in comments" :key="comment.id">
        <div class="bubble">
          <span class="comment-writer">{{ comment.writer }}</span><br>
          <span class="comment-content">{{ comment.content }}</span><br>
          <small class="comment-date">[{{ comment.created_date }}]</small>
          <small class="comment-content"><span @click="delComm(comment.id)">삭제</span></small>
        </div>
      </li>
    </ul>
  </div>

</template>
<style></style>