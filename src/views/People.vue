<template lang="html">
  <div class="">
    <br>
    <nav-list :title='title' :about='about' :raw='peopleAll'></nav-list>

  </div>
</template>

<script>
import NavList from '@/components/NavList.vue'

export default {
  data(){
    return {
      title: 'name',
      about: 'gender',
      films: ''
    }
  },
  props: ['peopleAll'],
  components: {
    'nav-list': NavList
  }
}
</script>

<style lang="css" scoped>
</style>
