<script>
import GoodsView from './components/goods.vue'
import MemberForm from './views/MemberForm.vue';
import EmpForm from './views/EmpForm.vue';
import TodoForm from './views/TodoForm.vue';
import MovieForm from './views/MovieForm.vue';
import ParamView from './views/ParamView.vue';
import { RouterLink, RouterView } from 'vue-router';
export default {
  components: { GoodsView, MemberForm, EmpForm, TodoForm, MovieForm, ParamView },
  data() {
    return {
      fruits: ["사과", "반나", "포도"],
      msg: "Hello!"
    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="container">
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">(⩌^⩌)</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              <RouterLink class="nav-link active" aria-current="page" to="/">(⩌⩊⩌)</RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <RouterLink class="nav-link" aria-current="page" to="/member">(⩌-⩌)</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/todo">(⩌_⩌)</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/emp">(⩌=⩌)</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/movie">(⩌.⩌)</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/param/NA">(⩌v⩌)</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/param/NO">(⩌v⩌)</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/empView">empView</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style>
hr {
  margin: 10px 0px;
}
</style>