<template>
  <div id="app">

    <h3 id="banner">GHIBLI STUDIO FILM CONTENT</h3>
    <div class="navigation">
      <nav v-if=filmsAPI>
        <router-link :to="{ name: 'films', params: {filmsAll: filmsAPI}}">Film Titles</router-link>
        <router-link :to="{ name: 'locations', params: {locationsAll: locationsAPI}}">Locations</router-link>
      </nav>
    </div>
    <router-view id="view"></router-view>

  </div>
</template>

<script>
import {eventBus} from './main.js';

export default {
  name: 'app',
  components: {

  },
  data(){
    return{
      filmsAPI: '',
      locationsAPI: ''
    }
  },
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(filmsRaw => this.filmsAPI = filmsRaw)
    fetch('https://ghibliapi.herokuapp.com/locations')
    .then(res => res.json())
    .then(locationRaw => this.locationsAPI = locationRaw)
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

nav {
  display: flex;
  justify-content: space-around;
}

h3 {
  font-family: Fira Mono, Monospace;
  font-size: 40px;
  background-color: #4D90CA;
  text-align: center;
}

.navigation {
  background-color: #6FEAB5;
}
</style>


// :filmsAll="this.filmsAPI"
