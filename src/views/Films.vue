<template lang="html">
  <div>
    <br>
    <p>test3</p>
    <p>{{films}}</p>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  data(){
    return {
      film: ''
    }
  },
  params: ['films']
  // mounted(){
  //   eventBus.$on('raw-films', (films) => {
  //     this.films = films;
  //   })
  // }
}
</script>

<style lang="css" scoped>


</style>
