import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Search from '@/components/pages/Search'
import VideoPlayer from '@/components/VideoPlayer'
import Channel from '@/components/pages/Channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/video',
      name: 'Video',
      component: VideoPlayer
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel
    }
  ]
})
