<script>
export default {
  data: function () {
    return {
      depts: [
        { dno: 10, dname: "개발" },
        { dno: 20, dname: "인사" },
        { dno: 30, dname: "총무" }
      ],
      emp: {
        employee_id: "100",
        first_name: "Steven",
        last_name: "King",
        email: "",
        phone_number: "",
        hire_date: "",
        job_id: "",
        salary: "",
        commission_pct: "",
        manager_id: "",
        department_id: 20
      }
    }
  },
  methods: {
    update() {
      console.log(JSON.stringify(this.emp));
    }
  }
}
</script>
<template>
  사번: <input v-model="emp.employee_id"><br>
  이름: <input v-model="emp.first_name"><br>
  성: <input v-model="emp.last_name"><br>
  업무: <input type="radio" v-model="emp.job_id" value="it">IT
  <input type="radio" v-model="emp.job_id" value="sales">sales<br>
  부서: <select v-model="emp.department_id">
    <option v-for="dept in depts" :value="dept.dno">{{ dept.dname }}</option>
  </select><br>
  <button @click="update()">수정</button>
</template>
<style></style>