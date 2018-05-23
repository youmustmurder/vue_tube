<style scoped lang="scss">
.video-list .card .card__title:after {
  display: none;
}
</style>

<template>
  <v-container grid-list-md>
    <v-layout row wrap grid-list-md class="video-list">
      <v-flex xs12 class="thumbnail" v-for="video in related" @click="chooseVideo(video.id.videoId)">
        <v-card>
          <v-card-media :src="video.snippet.thumbnails.medium.url" class="thumbnail-img" height="100px"></v-card-media>
          <v-card-title class="thumbnail-info">
            <h3>{{ video.snippet.title }}</h3>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
      api.goVideo(this, video);
    }
  },
  mounted () {
    api.relatedVideoById(this, this.$route.query.id);
  }
}
</script>
