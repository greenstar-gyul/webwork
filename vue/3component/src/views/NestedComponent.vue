<script>
import BlogPost from '@/components/BlogPost.vue';
import PageTitle from '@/components/PageTitle.vue';

export default {
  components: {PageTitle, BlogPost},
  data() {
    return {
      title: "동적 페이지 제목",
      subtitle: "동적 페이지 부제목",
      post: {
        title: "뷸로그",
        contents: "vue로 만든 블로그",
        likes: 100,
        isShow: true,
        commentIds: [10, 11, 12]
      },
      posts: [
        {
          title: "포스팅1",
          contents: "글 내용1",
          likes: 78,
          isPublished: true,
        },
        {
          title: "포스팅2",
          contents: "글 내용2",
          likes: 71,
          isPublished: false
        },
        {
          title: "포스팅3",
          contents: "글 내용3",
          likes: 89,
          isPublished: true
        },
        {
          title: "포스팅4",
          contents: "글 내용4",
          likes: 69,
          isPublished: false
        },
        {
          title: "포스팅5",
          contents: "글 내용5",
          likes: 91,
          isPublished: true
        }
      ]
    };
  }
}
</script>
<template>
  <PageTitle :title="title" :subtitle="subtitle"></PageTitle>
  <div class="container">
    <BlogPost v-bind="post"></BlogPost>
    <BlogPost :title="post.title" :contents="post.contents" :likes="post.likes" :is-published="post.isShow" :posts="posts" :comment-ids="[100, 130, 200]"></BlogPost>
    <hr>
    <div class="row">
      <BlogPost v-for="post in posts" v-bind="post" class="col-md-4"></BlogPost>
    </div>
  </div>
</template>
<style>
  
</style>