import Vue from 'vue';
import Router from 'vue-router'
import Nav from '@/views/Nav.vue'
import  Films from '@/views/Films.vue'
import Location from '@/views/Locations.vue'
import Detail from '@/views/Detail.vue'
import People from '@/views/People.vue'
import Vehicles from '@/views/Vehicles.vue'

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
    },
    {
      path: '/detail',
      props: true,
      name: 'detail',
      component: Detail
    },
    {
      path: '/people',
      props: true,
      name: 'people',
      component: People
    },
    {
      path: '/vehicle',
      props: true,
      name: 'vehicles',
      component: Vehicles
    }

  ]
})

export default router;

// /:filmsAll
