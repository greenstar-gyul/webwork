<template>
  <div class="alert alert-warning">
    <h2>{{ props.title }}</h2>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(["title"]);

</script>
