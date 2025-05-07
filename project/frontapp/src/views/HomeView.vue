<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <p>❓❗count!!: {{ $store.state.count }}</p>
    <p>❓❗login!!: {{ $store.state.loginYn }}</p>
    <p>❓❗login!!: {{ $store.state.email }}</p>
    <hr>
    <TheWelcome />
  </main>
</template>
