<style>
  
</style>
<template>
  <div class="row">
    <div class="col">
      <EmpList ref="empList" @select-handler="selectHandler"></EmpList>
    </div>
    <div class="col">
      <EmpForm ref="empForm" :selEmp="selectedEmp" @fetch-list="fetchList"></EmpForm>
    </div>
  </div>
</template>
<script>
import EmpList from '@/components/EmpList.vue';
import EmpForm from '@/components/EmpForm.vue';

export default {
  components: {EmpList, EmpForm},
  data() {
    return {
      emps: [],
      emp: {},
      dept: {},
      selectedEmp: {}
    };
  },
  methods: {
    fetchList() {
      console.log("fetch 요청 받음")
      this.$refs.empList.fetchList();
      console.log("fetch 요청 처리")
    },
    selectHandler(id) {
      this.$refs.empForm.selectHandler(id);
    }
  }
}
</script>