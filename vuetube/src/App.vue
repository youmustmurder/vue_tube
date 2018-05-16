<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer'
export default {
  name: 'App',
  components: {
    VideoPlayer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
