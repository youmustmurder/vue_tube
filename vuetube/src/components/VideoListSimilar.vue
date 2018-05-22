<template>
  <v-layout row wrap class="video-list">
    <v-flex xs12 class="thumbnail" v-for="video in related" @click="chooseVideo(video)">
      <v-card>
        <v-card-media :src="video.snippet.thumbnails.medium.url" class="thumbnail-img" height="100px"></v-card-media>
        <v-card-title class="thumbnail-info">
          <h3>{{ video.snippet.title }}</h3>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import api from '@/components/api/api.js'

export default {
  props: [],
  data () {
    return {
      related: ''
    }
  },
  methods: {
    chooseVideo(video) {
      this.$store.commit('active_video', video);
      this.$store.commit('increment_views', video);
    },
  },
  mounted () {
    api.relatedVideoById(this, this.$route.query.id);
  }
}
</script>

<style lang="css">
</style>
