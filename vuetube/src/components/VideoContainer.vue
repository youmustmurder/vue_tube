<template>
  <div class="video-container">
    <iframe :src="activeVideo.youtubeURL" width="640" height="360" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe>
    <h3>{{ activeVideo.title }}</h3>
    <div class="row">
      <p>{{ activeVideo.views }} views</p>
      <p>{{ activeVideo.likes }} <button @click="addLike()">Like</button></p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeVideo () {
      return this.$store.state.activeVideo;
    }
  },
  methods: {
    addLike() {
      this.$store.commit('increment_like');
    }
  }
}
</script>

<style lang="scss">
</style>
