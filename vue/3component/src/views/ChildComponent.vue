<script>
export default {
  data() {
    return {
      msg: "자식 컴포넌트 메시지"
    };
  },
  methods: {
    childFunc() {
      console.log('부모 컴포넌트에서 발생시킨 이벤트');
    },
  }
}
</script>
<template>
  <div>
    <p>{{ msg }}</p>
    <button type="button" @click="childFunc" ref="btn">click</button>
  </div>
</template>
<style>
  
</style>