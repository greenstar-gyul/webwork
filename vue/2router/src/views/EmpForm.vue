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
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">#</span>
    <input type="text" class="form-control" placeholder="Employeeid" aria-label="Employeeid"
      aria-describedby="addon-wrapping">
  </div>
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">이름</span>
    <input type="text" class="form-control" placeholder="Employeelname" aria-label="Employeelname"
      aria-describedby="addon-wrapping">
  </div>
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">성</span>
    <input type="text" class="form-control" placeholder="Employeefname" aria-label="Employeefname"
      aria-describedby="addon-wrapping">
  </div>
  <div class="input-group flex-nowrap">
    <span class="input-group-text" id="addon-wrapping">업무</span>
    <input type="text" class="form-control" placeholder="Employeefname" aria-label="Employeefname"
      aria-describedby="addon-wrapping">
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      IT
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      sales
    </label>
  </div>
  부서: <select v-model="emp.department_id">
    <option v-for="dept in depts" :value="dept.dno">{{ dept.dname }}</option>
  </select><br>
  <button @click="update()">수정</button>
</template>
<style></style>