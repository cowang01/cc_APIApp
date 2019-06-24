<template lang="html">
  <div>
    <br>
    <nav-list :title='title' :about='about' :raw='filmsAll'></nav-list>
    <!-- <p>{{filmsAll}}</p> -->
  </div>
</template>

<script>
// import {eventBus} from '../main.js'
import NavList from '@/components/NavList.vue'
export default {
  data(){
    return {
      title: 'title',
      about: 'release_date'
    }
  },
  props: ['filmsAll'],
  components: {
    'nav-list': NavList
  },

  // props: {
  //   filmAll: 'String'
  // }
  // mounted(){
  //   eventBus.$on('raw-films', (films) => {
  //     this.films = films;
  //   })
  // }
}
</script>

<style lang="css" scoped>


</style>
