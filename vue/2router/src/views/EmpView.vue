<script>
import EmpList from './EmpList.vue';
import EmpForm from './EmpForm.vue';
export default {
  components: {EmpList, EmpForm},
  data() {
    return {
      
    };
  }
}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <EmpList></EmpList>
      </div>
      <div class="col-md-6">
        <EmpForm></EmpForm>
      </div>
    </div>
  </div>
</template>
<style>
  
</style>