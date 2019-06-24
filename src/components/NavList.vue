<template lang="html">
  <div class="main">

    <div>
      <table>
        <tr>
          <th><u>{{title.toUpperCase()}}</u></th>
          <th><u>{{about.toUpperCase()}}</u></th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="item in raw">
          <td>{{(item.name || item.title)}}</td>
          <td>{{item.release_date || item.terrain || item.gender || item.vehicle_class}}</td>
          <td> </td>
          <td><router-link :to="{ name: 'detail', params: {detailChoice: item} }"><button type="button" name="button">Further Detail</button></router-link></td>
        </tr>
      </table>
    </div>
    <div>
      <img src="" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'nav-list',
  props: ['title', 'about', 'raw'],
  // methods: {
  //   detailPage: function  {
  //     'redirect' =>
  //   }
  // }
}
</script>

<style lang="css" scoped>

table {
  text-align: left;
  position: relative;
  vertical-align: middle;
  margin: 0 10%;
  padding: 2% 2%;
  border-color: #3C3E3D;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
}

button {
  background-color: #F4D142;
}


</style>
