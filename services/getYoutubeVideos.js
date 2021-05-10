const KEY = 'AIzaSyDZTov_forXNDd-KATNVChJweLzYcxx61s'
const CHANNEL_ID = 'UC8LeXCWOalN8SxlrPcG-PaQ'

async function mapFromApiResponseToVideos (apiResponse) {
  const URL_EMBED = 'https://www.youtube.com/embed/'
  const URL_VIDEO = 'https://www.youtube.com/watch?v='
  const result = await apiResponse.then(res => {
    return res
  })

  return result.map(({ id, snippet }) => {
    const { videoId } = id
    const urlVideo = `${URL_VIDEO}${videoId.replace(/['"]+g/, '')}`
    const urlVideoEmbed = `${URL_EMBED}${videoId.replace(/['"]+g/, '')}`
    const { title, description, thumbnails } = snippet
    const { high: { url } } = thumbnails
    return { urlVideoEmbed, urlVideo, title, description, url }
  })
}

export default async function getYoutubeVideos () {
  const url =
    `https://www.googleapis.com/youtube/v3/search?key=${KEY}=&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`

  const apiResponse = fetch(url)
    .then(res => res.ok ? res.json() : [])
    .then(({ items }) => { return items })

  return mapFromApiResponseToVideos(apiResponse)
}
