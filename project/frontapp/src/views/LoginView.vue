<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {
        email: "",
        pw: ""
      },
      result: ""
    };
  },
  methods: {
    async login() {
      // this.$store.commit('increment');
      const result = await axios.post(`/api/users/login`, this.user);
      const code = result.data.code;
      alert(`Welcome ${code}!`);
      if (code !== 'fail') {
        // this.$store.commit('loginSuccess', { email: this.user.email });
        this.$store.dispatch('login', { email: this.user.email });
        this.$router.push({ path: "/" });
      }
    }
  }
}
</script>
<template>
  <div>
    계정: <input type="text" id="uemail" v-model="user.email">
  </div>
  <div>
    암호: <input type="password" id="upw" v-model="user.pw">
  </div>
  <button type="button" @click="login()">로그인</button>

  <p></p>
</template>
<style>
  
</style>