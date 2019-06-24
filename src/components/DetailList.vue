<template lang="html">
  <div id="detail-page">
    <div>
      <p><input type="hidden" v-on:scroll="detailsShift"></p>
      <table>
        <tr v-for="(item, key) in dispDetails">
          <th >{{key.charAt(0).toUpperCase() + key.slice(1)}}: </th>
          <td v-if="checkAPI(item)">{{item}}</td>
          <td v-if="checkAPI2(item)"> <button v-on:click="setAPI(item)" type="button" name="button">View</button> </td>
        </tr>
      </table>
    </div>
    <div>
      <detail-pop :API="detailAPI"></detail-pop>
    </div>
  </div>

</template>

<script>
import DetailPop from '@/components/DetailPop.vue'

export default {
  name: 'detail-list',
  props: ['details'],
  data(){
    return {
      dispDetails: '',
      detailAPI: ''
    }
  },
  mounted(){
    this.dispDetails = this.details
  },
  methods: {
    detailsShift: function() {
      this.dispDetails = this.details.shift()
    },
    setAPI: function(API){
      this.detailAPI = API[0]
    },
    checkAPI: function(item){
      return !Array.isArray(item)
    },
    checkAPI2: function(item){
      return Array.isArray(item)
    }
  },
  components: {
    'detail-pop': DetailPop,
  },
  calculated: {

  }
}
</script>

<style lang="css" scoped>

#detail-page {
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: flex-start;
}
table {
  text-align: left;
  /* display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start; */
}

button {
    background-color: #F4D142;
}

</style>
