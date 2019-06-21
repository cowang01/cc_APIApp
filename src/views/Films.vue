<template lang="html">
  <div>
    <br>
    <p>test3</p>
    <p>{{filmsAll}}</p>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  data(){
    return {
      film: 'string'
    }
  },
  props: ['filmsAll']
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
