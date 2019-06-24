<template lang="html">
  <div class="">

    <table v-if="popData">
      <tr v-for="(item, key) in popData">
        <th v-if="checkAPI(item)">{{key}}: </th>
        <td v-if="checkAPI(item)">{{item}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: 'detail-pop',
  data() {
    return{
      popData: ''
    }
  },
  props: ['API'],
  watch: {
    API: function(val, old) {
      fetch(val).then(res => res.json()).then(newAPI => this.popData = newAPI)
    }
  },
  methods: {
    checkAPI: function(item){
      return !Array.isArray(item)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
