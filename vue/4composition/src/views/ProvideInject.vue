<template>
  <div>
    <ProvideInjectChild />
  </div>
</template>
<script setup>
import { provide, ref } from 'vue';
import ProvideInjectChild from './ProvideInjectChild.vue';

const items = ref(['A', 'B']);
provide("itemLength", items.value.length);
</script>