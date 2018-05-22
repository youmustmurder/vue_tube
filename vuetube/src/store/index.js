import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    videos: [],
    activeVideo: ''
  },
  mutations: {
    active_video (state, video) {
      state.activeVideo = video;
    },
    SET_VIDEOS (state, {videos}) {
      state.videos = videos;
      state.activeVideo = state.videos[0];
    }
  },
  actions: {
    LOAD_VIDEOS ({ commit }) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyCFUTsG8HEdZ48Pn6PmDjzfrda5Bv5D9QY',
          part: 'snippet',
          maxResults: '3',
          q: 'stopgame',
          type: 'video'
        }
      }).then(res => {
        commit('SET_VIDEOS', { videos: res.data.items});
      }).catch(e => {
        console.log(e);
      })
    }
  }
})
