<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Horses from './components/Horses.vue'
export default {
  name: 'App',
  components: {
    Horses

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
