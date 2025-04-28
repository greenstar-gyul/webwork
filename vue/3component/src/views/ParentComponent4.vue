<script>
import ChildComponent from './ChildComponent4.vue';

export default {
  components: {ChildComponent},
  data() {
    return {
      
    };
  },
  methods: {
    sendMessage(msg) {
      console.log(msg);
    }
  }
}
</script>
<template>
  <ChildComponent @send-message="sendMessage"></ChildComponent>
</template>
<style>
  
</style>