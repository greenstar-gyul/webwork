import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from 'D:/webwork/vue/myapp/src/components/HelloWorld.vue'
import MemberForm from '../views/MemberForm.vue'
import TodoForm from '../views/TodoForm.vue'
import EmpForm from '../views/EmpForm.vue'
import MovieForm from '../views/MovieForm.vue'
import ParamView from '../views/ParamView.vue'
import EmpView from '../views/EmpView.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/member', component: MemberForm },
  { path: '/todo', component: TodoForm },
  { path: '/emp', component: EmpForm },
  { path: '/movie', component: MovieForm },
  { path: '/param/:userName', component: ParamView },
  { path: '/empView', component: EmpView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;