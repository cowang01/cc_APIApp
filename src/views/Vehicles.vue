<template lang="html">
  <div class="">
    <br>
    <nav-list :title='title' :about='about' :raw='vehiclesAll'></nav-list>

  </div>
</template>

<script>
import NavList from '@/components/NavList.vue'

export default {
  data(){
    return {
      title: 'name',
      about: 'vehicle_class',
      films: ''
    }
  },
  props: ['vehiclesAll'],
  components: {
    'nav-list': NavList
  }
}
</script>

<style lang="css" scoped>
</style>
