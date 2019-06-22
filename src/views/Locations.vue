<template lang="html">
  <div class="">

    <p>test45</p>
    <nav-list :title='title' :about='about' :raw='locationsAll'></nav-list>

  </div>
</template>

<script>
import NavList from '@/components/NavList.vue'

export default {
  data(){
    return {
      title: 'title',
      about: 'film'
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
