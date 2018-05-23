<template>
  <v-app>
    <v-navigation-drawer
                        fixed
                        clipped
                        app
                        v-model="drawer">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.text" @click="goPage(item.link)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
                color="red"
                fixed
                dense
                clipped-left
                app>
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><span class="title">VueTube</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row wrap style="max-width: 650px">
        <v-text-field
                      append-icon="search"
                      placeholder="Поиск..."
                      color="white"
                      :append-icon-cb="() => { this.$router.push({ path: 'search', query: { q: search}}); }"
                      v-model="search"
                      hide-details
                      dark
                      single-line>
        </v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import router from '@/router'
import VideoPlayer from './components/VideoPlayer'
export default {
  name: 'App',
  components: {
    VideoPlayer
  },
  data () {
    return {
      drawer: true,
      search: '',
      items: [
        { icon: 'trending_up', text: 'Популярное', link: '/' },
        { icon: 'history', text: 'История', link: '/history' }
      ]
    }
  },
  methods: {
    goPage (link) {
      this.$router.push(link);
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/styles";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.toolbar__content {
  .toolbar__side-icon {
    height: auto;
  }
}
.title {
  color: #fff;
}
</style>
