import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import VideoPlayer from '@/components/VideoPlayer'

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
      props: true,
      name: 'Video',
      component: VideoPlayer
    }
  ]
})
