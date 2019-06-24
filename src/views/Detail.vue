<template lang="html">
  <div class="main">

    <div>
      <detail-list :details="detailChoice"></detail-list>
      <!-- <p>{{detailChoice}}</p> -->
    </div>
    <div>
      <!-- <detail-pop v-on:click=""></detail-pop> -->
    </div>
  </div>
</template>

<script>

import DetailList from '@/components/DetailList.vue'


export default {
  props: ['detailChoice'],
  components: {
    'detail-list': DetailList
  }
}
</script>

<style lang="css" scoped>

  .main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
  }
</style>
