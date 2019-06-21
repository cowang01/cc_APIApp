<template>
  <div id="app">
    <h3>GHIBLI STUDIO FILM CONTENT</h3>
    <nav >
      <!-- <p v-if="this.filmsAPI"> -->
      <router-link :to="{ name: 'films', params: {filmsAPI: 123} }">Film Titles</router-link>
      <!-- </p> -->
      <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
    </nav>
    <!-- <p>{{this.filmsAPI}}</p> -->
    <p>test1</p>
    <p></p>
    <router-view id="view"></router-view>
    <button type="button" name="button" v-on:click="refresh"></button>
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
          filmsAPI: []
        }
      },
      mounted(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(filmsRaw => this.filmsAPI = filmsRaw)
        // eventBus.$emit('raw-films', )
        // .then(console.log('films', this.filmsAPI))

      },
      methods: {
        refresh(){
          eventBus.$emit('raw-films2', this.filmsAPI)
        }
      }
    }
  </script>

  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
