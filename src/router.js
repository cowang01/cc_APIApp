import Vue from 'vue';
import Router from 'vue-router'
import Nav from '@/views/Nav.vue'
import  Films from '@/views/Films.vue'

Vue.use(Router)

// const filmsAll = []

const router = new Router({
  routes: [
    {
      path: '',
      name: 'nav',
      component: Nav
    },
    {
      path: '/films',
      props: true,
      name: 'films',
      component: Films
    }
  ]
})

export default router;

// /:filmsAll
