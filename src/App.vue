<template>
  <div class="app">
    <div class="banner">
      GHIBLI STUDIO FILM CONTENT
    </div>

    <div class="navigation">
      <nav id="nav" v-if="filmsAPI">
        <router-link :to="{ name: 'films', params: {filmsAll: filmsAPI}}">Film Titles</router-link>
        <router-link :to="{ name: 'locations', params: {locationsAll: locationsAPI}}">Locations</router-link>
        <router-link :to="{ name: 'people', params: {peopleAll: peopleAPI}}">People</router-link>
        <router-link :to="{ name: 'vehicles', params: {vehiclesAll: vehiclesAPI}}">Vehicles</router-link>
      </nav>
    </div>

    <router-view id="view"></router-view>

  </div>
</template>

<script>
// import {eventBus} from './main.js';

export default {
  name: 'app',
  components: {

  },
  data(){
    return{
      filmsAPI: '',
      locationsAPI: '',
      peopleAPI: '',
      vehiclesAPI: ''
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(filmsRaw => this.filmsAPI = filmsRaw)
    fetch('https://ghibliapi.herokuapp.com/locations')
    .then(res => res.json())
    .then(locationRaw => this.locationsAPI = locationRaw)
    fetch('https://ghibliapi.herokuapp.com/people')
    .then(res => res.json())
    .then(peopleRaw => this.peopleAPI = peopleRaw)
    fetch('https://ghibliapi.herokuapp.com/vehicles')
    .then(res => res.json())
    .then(vehicleRaw => this.vehiclesAPI = vehicleRaw)
    // eventBus.$emit('raw-films', )
    // .then(console.log('films', this.filmsAPI))

  },
  methods: {
    // refresh(){
    //   eventBus.$emit('raw-films2', this.filmsAPI)
  }
}
// }
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px; */
}

.app {
  font-family: sans-serif;
  color: #3C3E3D;
}

.banner {
  font-family: Fira Mono, Monospace;
  font-size: 40px;
  background-color: #4D90CA;
  text-align: center;
  padding: 1vw 0;
  color: black;
}

.navigation {
  background-color: #6FEAB5;
  padding: 1vw 0;
}

 #nav {
  display: flex;
  justify-content: space-around;
}
</style>


// :filmsAll="this.filmsAPI"
