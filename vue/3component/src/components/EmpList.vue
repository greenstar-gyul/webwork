<style></style>
<template>
  <table class="table">
    <thead>
      <tr>
        <th>사번</th>
        <th>이름</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="emp in emps" :key="emp.id" @click="selectHandler(emp.id)">
        <td>{{ emp.id }}</td>
        <td>{{ emp.first_name }} {{ emp.last_name }}</td>
        <td>
          <button @click="deleteEmp(emp.id)" class="ml-4 text-red-600">
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from 'axios';
const url = "http://localhost:3000/";
axios.defaults.baseURL = url;

export default {
  data() {
    return {
      emps: []
    };
  },
  methods: {
    fetchList() {
      axios.get("emp")
        .then(response => this.emps = response.data);
    },
    deleteEmp(id) {
      axios.delete("emp/" + id)
        .then(() => this.fetchList());
    },
    selectHandler(id) {
      this.$emit('selectHandler', id);
    }
  },
  mounted() {
    this.fetchList();
  }
}
</script>