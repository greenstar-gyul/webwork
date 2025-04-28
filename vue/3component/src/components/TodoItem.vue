<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => ({ id: 1, text: 'HTML 배우기', done: true })
    }
  },
  data() {
    return {

    };
  }
}
</script>
<template>
  <input type="checkbox" v-model="todo.done">
  <span :class="{ done: todo.done }">{{ todo.text }}</span>
  <button @click="this.$emit('removeTodo', todo)">X</button>
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>