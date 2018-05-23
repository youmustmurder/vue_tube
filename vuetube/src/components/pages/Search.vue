<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs3 v-for="video in videos.items" :key="video.id" @click="goVideo(video.id.videoId)">
        <v-card>
          <v-card-media :src="video.snippet.thumbnails.medium.url" height="180px">
            <v-card-title><span class="headline white--text">{{ video.snippet.title }}</span></v-card-title>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/components/api/api.js'

export default {
  data () {
    return {
      videos: []
    }
  },
  methods: {
    goVideo(id) {
      api.goVideo(this, id);
    }
  },
  mounted () {
    api.searchVideos(this, 5, this.$route.query.q);
  }
}
</script>

<style lang="scss">
</style>
