import Vue from 'vue';
import Router from 'vue-router'
import Nav from '@/views/Nav.vue'
import  Films from '@/views/Films.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'nav',
      component: Nav
    },
    {
      path: '/films/:films',
      // params: {
      //   films: 'filmsAPI'
      // },
      name: 'films',
      component: Films
    }
  ]
})

export default router;
