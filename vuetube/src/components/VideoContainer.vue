<template>
  <div class="video-container">
    <iframe :src="urlVideo()" height="600" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>
    <h3>{{ activeVideo.data.items[0].snippet.title }}</h3>
    <div class="video-container-footer">
      <div class="video-conntainer__channel-info">
        <div class="channel-block">{{ activeVideo.data.items[0].snippet.channelTitle }}</div>
        <div class="date_added">{{ activeVideo.data.items[0].snippet.publishedAt }}</div>
      </div>
      <p>{{ activeVideo.data.items[0].snippet.description }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/components/api/api.js'

export default {
  data () {
    return {
      activeVideo: '',
    }
  },
  methods: {
    urlVideo () {
      return 'https://www.youtube.com/embed/' + this.$route.query.id;
    }
  },
  mounted () {
    api.getVideoById(this, this.$route.query.id);
  }
}
</script>

<style lang="scss">
  .video-container {
    iframe {
      width: 100%;
    }
  }
</style>
