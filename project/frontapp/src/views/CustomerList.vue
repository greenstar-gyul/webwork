<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>이름</th>
          <th>전자우편</th>
          <th>전화번호</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
const url = "/api/"
axios.defaults.baseURL = url;

export default {
  data() {
    return {
      customers: []
    }
  },
  methods: {
    loadCustomerList() {
      axios.get(`customer`)
      .then(response => this.customers = response.data);
    }
  },
  mounted() {
    this.loadCustomerList();
  }
}
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
