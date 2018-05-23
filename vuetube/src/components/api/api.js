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
    }).then(() => {
      this.getChannelById(context, context.activeVideo.data.items[0].snippet.channelId);
    }).catch(e => console.log(e));
  },

  getChannelById(context, id) {
    Axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        key: youtube_key,
        id: id,
        part: 'snippet,contentDetails,statistics'
      }
    }).then(res => {
      context.channel = res.data.items[0];
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
      context.related = res.data.items;
    }).catch(e => console.log(e));
  },

  searchVideos(context, maxResults=10, q) {
    Axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: youtube_key,
        maxResults: maxResults,
        part: 'snippet',
        q: q,
        type: 'video'
      }
    }).then(res => {
      context.videos = res.data;
    }).catch(e => console.log(e));
  },

  getCommentsById(context, id) {
    Axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
      params: {
        key: youtube_key,
        videoId: id,
        part: 'snippet, replies'
      }
    }).then(res => {
      console.log(res);
      context.comments = res.data.items;
    }).catch(e => console.log(e));
  }
}
