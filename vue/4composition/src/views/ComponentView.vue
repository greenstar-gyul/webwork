<template>
  <div>
    userComponentRefs 이용
    <input ref="my-input" value="hello">
    <p>현재 페이지: {{ route.fullPath }}</p>
    <a href="#" @click="router.push('/')">home</a> <br>
    <a href="#" @click="goAbout">about</a>
  </div>
  <div>
    <!-- <ul>
      <li><router-link :to="{name:'product', params:{id:1}}">상품상세페이지로 이동</router-link></li>
      <li><router-link to="/productinfo">상품페이지로 이동</router-link></li>
      <li><router-link :to="{name:'productinfo', query:{id:10}}">상품페이지로 이동(name)</router-link></li>
      <li><a href="#"  @click="goproduct">상품페이지로 이동(push)</a></li>
    </ul>  
      parent : {{counter}}
      <button-counter :count="counter" @incrementevent="incrementCounter">
         증가{{counter}}
      </button-counter> <br/><br/>
      <fancy-button/> <br/><br/>
      <fancy-button>등록</fancy-button> <br/><br/>
      <fancy-button>
        <span style="color:red">클릭 미!!</span>
      </fancy-button>
      <base-layout>
        <template v-slot:header>
          회원등록
        </template>
        <template v-slot:default>
          <input><button>저장</button>
        </template>
        <template v-slot:footer>
          <button type="reset">취소</button>
        </template>
      </base-layout> -->
      <!-- <button-sync :counter.sync="counter"/> -->
      <fancy-button @click="clickHandler()">
        <span style="color:red">클릭 미!!!</span>
      </fancy-button>
      <button-counter @incrementevent="incrementCounter" :count="state.counter">자식컴포넌트</button-counter>
      <!-- <p>{{ counter }}</p> -->
      <p>{{ state.counter }}</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import ButtonCounter from '../components/ButtonCounter.vue'
// import ButtonSync from '../components/ButtonSync.vue'
import FancyButton from '../components/FancyButton.vue'
// import BaseLayout from '../components/BaseLayout.vue'
import { ref, reactive, onMounted, useTemplateRef } from 'vue'

const input = useTemplateRef('my-input');

// const counter = ref(0);
const state = reactive({ counter: 1 });
const route = useRoute();
const router = useRouter();

// const incrementCounter = () => { counter.value++; };
const incrementCounter = (value) => { 
  if (value || value == 0)
    state.counter = value;
  else 
    state.counter++;
};
const clickHandler = () => { incrementCounter(); }

const goAbout = () => { router.push({ name: "about" }); }

onMounted( () => {
  console.log('count = ' + state.counter);
  console.log(input.value.value);
  input.value.focus();
});

</script>
