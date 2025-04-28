<script>
export default {
  props: ["title", "subtitle"],
  data() {
    return {
      
    };
  }
}
</script>
<template>
  <div class="alert alert-warning">
    <h2>{{ title }}</h2>
    <hr>
    <h3>{{ subtitle }}</h3>
  </div>
</template>
<style>
  
</style>