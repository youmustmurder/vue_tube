<template>
  <div class="video-list">
    <div class="thumbnail" :key="video.id" v-for="video in videos" @click="chooseVideo(video)">
      <div class="thumbnail-img">
        <img :src="video.thumbnail">
      </div>
      <div class="thumbnail-info">
        <h3>{{ video.title }}</h3>
        <p>{{ video.creator }}</p>
        <p class="thumbnail-views">{{ video.views }} Views</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {}
  },
  computed: {
    videos () {
      return this.$store.state.videos;
    },
  },
  methods: {
    chooseVideo(video) {
      this.$store.commit('active_video', video);
      this.$store.commit('increment_views', video);
    },
  }
}
</script>

<style lang="css">
</style>
