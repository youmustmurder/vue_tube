<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-list two-line>
        <template v-for="comment in comments">
          <v-list-tile>
            <v-list-tile-avatar>
              <img :src="comment.snippet.topLevelComment.snippet.authorProfileImageUrl">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="comment.snippet.topLevelComment.snippet.authorDisplayName"></v-list-tile-title>
              <v-list-tile-sub-title v-html="comment.snippet.topLevelComment.snippet.textDisplay"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import api from '@/components/api/api.js'

export default {
  data () {
    return {
      comments: ''
    }
  },
  mounted () {
    api.getCommentsById(this, this.$route.query.id);
  },
}
</script>

<style lang="scss">
</style>
