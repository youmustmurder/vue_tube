<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs3 v-for="video in videos.items" :key="video.id" @click="goVideo(video.id)">
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
import api from '@/components/api/api'

export default {
  data () {
    return {
      videos: ''
    }
  },
  methods: {
    getPopularVideos() {
      api.getPopularVideos(this);
    },
    goVideo(id) {
      api.goVideo(this, id);
    }
  },
  mounted () {
    this.getPopularVideos();
  }
}

</script>

<style lang="scss">
  .card__title {
    position: relative;
    width: 100%;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.5;
    }
    & > span {
      position: relative;
      z-index: 2;
    }
  }
</style>
