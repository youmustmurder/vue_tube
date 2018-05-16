import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    videos: [
      {
        id: 1,
        title: "18-core iMac Pro Review: Not a Trap!",
        thumbnail:
          "https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA",
        youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
        creator: "Marques Brownlee",
        likes: 0,
        views: 0
      },
      {
        id: 2,
        title: "Dope Tech: Camera Robots!",
        thumbnail:
          "https://i.ytimg.com/vi/UIwdCN4dV6w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
        youtubeURL: "https://www.youtube.com/embed/UIwdCN4dV6w",
        creator: "Marques Brownlee",
        likes: 0,
        views: 0
      },
      {
        id: 3,
        title: "Let's Talk About Tesla Roadster 2020!",
        thumbnail:
          "https://i.ytimg.com/vi/ctx4YBEdOxo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",
        youtubeURL: "https://www.youtube.com/embed/ctx4YBEdOxo",
        creator: "Marques Brownlee",
        likes: 0,
        views: 0
      },
      {
        id: 4,
        title: "Talking Tech with Neil deGrasse Tyson!",
        thumbnail:
          "https://i.ytimg.com/vi/pqQrL1K0Z5g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",
        youtubeURL: "https://www.youtube.com/embed/pqQrL1K0Z5g",
        creator: "Marques Brownlee",
        likes: 0,
        views: 0
      },
      {
        id: 5,
        title: "The Apple Ecosystem: Explained!",
        thumbnail:
          "https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",
        youtubeURL: "https://www.youtube.com/embed/KB4_WIPE7vo",
        creator: "Marques Brownlee",
        likes: 0,
        views: 0
      }
    ],
    activeVideo: {
      id: 1,
      title: "18-core iMac Pro Review: Not a Trap!",
      thumbnail:
        "https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA",
      youtubeURL: "https://www.youtube.com/embed/jn9mHzXJIV0",
      creator: "Marques Brownlee",
      likes: 0,
      views: 0
    }
  },
  mutations: {
    active_video (state, video) {
      state.activeVideo = video;
    },
    increment_views (state) {
      ++state.activeVideo.views;
    },
    increment_like (state) {
      ++state.activeVideo.likes;
    },
    SET_VIDEOS (state, {videos}) {
      console.log(videos);
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
