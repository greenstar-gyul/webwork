<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {ChildComponent},
  data() {
    return {
      
    };
  },
  mounted() {
    this.$refs.childComponent.childFunc();
    this.$refs.childComponent.$refs.btn.click();
    this.$refs.childComponent.msg = "부모 컴포넌트에 의해 바뀐 메시지";
  },
}
</script>
<template>
  <ChildComponent ref="childComponent"></ChildComponent>
</template>
<style>
  
</style>