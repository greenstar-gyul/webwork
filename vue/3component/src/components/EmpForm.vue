<style></style>
<template>
  <div>
    <h3>{{ emp ? "직원 수정" : "직원 등록" }}</h3>
    사번 : <input v-model="emp.id" class="form-control" />
    <div>
      <label>이름</label>
      <input v-model="emp.first_name" class="form-control" />
    </div>
    <div>
      <label>성</label>
      <input v-model="emp.last_name" class="form-control" />
    </div>
    <div>
      <label>jobId</label>
      <div class="form-check">
        <input type="radio" class="form-check-input" v-model="emp.job_id" value="it" /><label
          class="form-check-label">IT</label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input" v-model="emp.job_id" value="sales" /><label
          class="form-check-label">SALES</label>
      </div>
    </div>
    <div>
      <label>부서</label>
      <select v-model="emp.department_id" class="form-select">
        <option v-for="dept in dept" :value="dept.id">
          {{ dept.dname }}
        </option>
      </select>
    </div>
    <div>
      <label>급여</label>
      <input class="form-control" v-model="emp.salary" />
    </div>
    <div>
      <label>이메일</label>
      <input class="form-control" v-model="emp.email" />
    </div>
    <button @click="empUpdate()" class="btn btn-success mt-2">수정</button>
    <button @click="reset()" class="btn btn-warning mt-2">초기화</button>
  </div>
</template>
<script>
import axios from 'axios';
const url = "/api/";
axios.defaults.baseURL = url;
let empid = 20;
export default {
  props: {selEmp: Object},
  data() {
    return {
      emp: {},
      dept: []
    };
  },
  methods: {
    empUpdate() {
      let id = this.emp.id;
      if (id) {
        axios.put("emp/" + id, this.emp)
          .then(() => {
            this.$emit('fetchList');
          });
      }
      else {
        this.emp.id = toString(empid);
        axios.post("emp", this.emp)
          .then(() => {
            this.$emit('fetchList');
          });
          empid++;
      }
    },
    reset() {
      this.emp = {}
    },
    selectHandler(id) {
      axios.get(`emp/${id}`)
        .then(response => this.emp = response.data);
    }
  },
  mounted() {
    axios.get(`dept`)
    .then(response => this.dept = response.data);
  }
}
</script>