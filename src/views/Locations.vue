<template lang="html">
  <div class="">
    <br>
    <nav-list :title='title' :about='about' :raw='locationsAll'></nav-list>

  </div>
</template>

<script>
import NavList from '@/components/NavList.vue'

export default {
  data(){
    return {
      title: 'name',
      about: 'terrain',
      films: ''
    }
  },
  props: ['locationsAll'],
  components: {
    'nav-list': NavList
  }
}
</script>

<style lang="css" scoped>
</style>
