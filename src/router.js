import Vue from 'vue';
import Router from 'vue-router'
import Nav from '@/views/Nav.vue'
import  Films from '@/views/Films.vue'
import Location from '@/views/Locations.vue'

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
    },
    {
      path: '/locations',
      props: true,
      name: 'locations',
      component: Location
    }
  ]
})

export default router;

// /:filmsAll
