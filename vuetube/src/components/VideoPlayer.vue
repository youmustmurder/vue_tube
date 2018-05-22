<template>
  <v-layout class="video-player" row wrap>
    <v-flex class="md9">
      <video-container></video-container>
    </v-flex>
    <v-flex class="md3">
      <video-list-similar></video-list-similar>
    </v-flex>
  </v-layout>
</template>

<script>
import api from '@/components/api/api.js'
import VideoContainer from '@/components/VideoContainer'
import VideoListSimilar from '@/components/VideoListSimilar'

export default {
  name: 'VideoPlayer',
  components: {
    'video-container': VideoContainer,
    'video-list-similar': VideoListSimilar
  },
  data () {
    return {
      activeVideo: ''
    }
  },
  mounted () {
    //this.$store.dispatch('LOAD_VIDEOS');
  },
}
</script>

<style scoped>
</style>
