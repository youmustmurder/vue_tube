<template>

  <div class="video-player">
    <video-container></video-container>
    <video-list></video-list>
  </div>
</template>

<script>
import VideoContainer from '@/components/VideoContainer'
import VideoList from '@/components/VideoList'

export default {
  name: 'VideoPlayer',
  components: {
    'video-container': VideoContainer,
    'video-list': VideoList
  },
  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('LOAD_VIDEOS');
  }
}
</script>

<style scoped>
</style>
