import Vue from 'vue';
import Router from 'vue-router'
import Nav from '@/views/Nav.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'nav',
      component: Nav
    }
  ]
})

export default router;
