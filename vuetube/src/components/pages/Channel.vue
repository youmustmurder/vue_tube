<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        {{ channel.snippet.title }}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/components/api/api.js'

export default {
  data () {
    return {
      channel: ''
    }
  },
  mounted () {
    api.getChannelById(this, this.$route.query.id)
  }
}
</script>

<style lang="scss">
</style>
