<script>
import TodoItem from '@/components/TodoItem.vue';

let id = 0

export default {
  components: { TodoItem },
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'HTML 배우기', done: true },
        { id: id++, text: 'JavaScript 배우기', done: true },
        { id: id++, text: 'Vue 배우기', done: false }
      ]
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos;
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <TodoItem :todo="todo" @remove-todo="removeTodo"></TodoItem>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>