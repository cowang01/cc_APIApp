<template lang="html">
  <div id="pop">

    <table v-if="popData">
      <tr v-for="(item, key) in popData[0]">
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
      fetch(val).then(res => res.json()).then(newAPI => Array.isArray(newAPI) ? this.popData = newAPI : this.popData = [newAPI]);
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

#pop {
  margin: 4vw;
  padding: 2%;
  border-style: solid;
  border-radius: 4px;
  border-color: #3C3E3D;
  height: 100%;
  overflow: scroll;
}

</style>

    <!-- API: function(val, old) {
      fetch(val).then(res => res.json()).then(newAPI => this.popData = newAPI);
    } -->
