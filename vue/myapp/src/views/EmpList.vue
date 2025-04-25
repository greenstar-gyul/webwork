<script>
import axios from 'axios';
export default {
  data() {
    return {
      emps: []
    };
  },
  mounted() {
    axios.get('./empdata.json')
    .then(response => { this.emps = response.data });
  }
}
</script>
<template>
  <table class="table table-striped">
    <thead>
      <tr class="table-primary">
        <th>#</th><th>사원 이름</th><th>전자 우편</th><th>시급</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-light" v-for="emp in emps">
        <td>{{ emp.employee_id }}</td>
        <td>{{ emp.first_name + ' ' + emp.last_name }}</td>
        <td>{{ emp.email }}</td>
        <td>{{ emp.salary }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style>
  
</style>