<script>
export default {
  // props: ["title", "contents", "likes", "isPublished", "posts", "commentIds"],
  props: {
    title: {
      type: String,
      default: "포스트 제목",
      required: true
    },
    contents: {
      type: String,
      default: "포스트 내용"
    },
    likes: {
      type: Number,
      validator: function(value) {
        return value >= 0;
      },
      default: 0
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    commentIds: {
      type: Array,
      default: []
    },
    posts: {
      type: Object,
      default: [{title: "포스트 제목", contents: "포스트 내용", likes: 0}]
    }
  },
  data() {
    return {
      
    };
  }
}
</script>
<template>
  <div>
    <div class="card" style="margin: 10px 0;">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <p>{{ contents }}</p>
        <p>좋아요: {{ likes }}</p>
        <p v-if="isPublished">출판됨</p>
        <p v-else>편집중</p>
        <hr>
        <div v-for="id in commentIds">{{ id }}</div>
      </div>
    </div>
  </div>
</template>
<style>
  
</style>