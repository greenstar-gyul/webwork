import { defineStore } from "pinia";

export const useCounterStore = defineStore('user', {
  state: () => ({ userid: 'admin', name: 'admin' }),
  getters: {

  },
  actions: {
    setUserid(newid) {
      this.userid = newid;
    },
  },
})