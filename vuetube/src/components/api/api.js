import Axios from 'axios'
import router from '@/router'

const youtube_key = 'AIzaSyCFUTsG8HEdZ48Pn6PmDjzfrda5Bv5D9QY';

export default {
  getPopularVideos(context) {
    Axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: youtube_key,
        chart: 'mostPopular',
        regionCode: 'RU',
        part: 'snippet,contentDetails,statistics',
        videoCategoryId: ''
      }
    }).then((res) => {
      context.videos = res.data;
    }).catch(e => console.log(e));
  },

  goVideo(context, id) {
    router.push({ path: 'video', query: { id: id}});
  },

  getVideoById(context, id) {
    Axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: youtube_key,
        id: id,
        part: 'snippet,contentDetails,statistics'
      }
    }).then(res => {
      context.activeVideo = res;
    }).catch(e => console.log(e));
  },

  relatedVideoById(context, id) {
    Axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: youtube_key,
        part: 'snippet',
        relatedToVideoId: id,
        type: 'video'
      }
    }).then(res => {
      console.log(res);
      context.related = res.data.items;
    }).catch(e => console.log(e));
  }
}
