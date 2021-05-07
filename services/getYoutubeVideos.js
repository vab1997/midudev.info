const KEY = 'AIzaSyDZTov_forXNDd-KATNVChJweLzYcxx61s'
const CHANNEL_ID = 'UC8LeXCWOalN8SxlrPcG-PaQ'

async function mapFromApiResponseToVideos (apiResponse) {
  const URL = 'https://www.youtube.com/embed/'
  const result = await apiResponse.then(res => {
    return res
  })
  return result.map(({ id, snippet }) => {
    const { videoId } = id
    const urlVideo = `${URL}${videoId.replace(/['"]+g/, '')}`
    const { title, description, thumbnails } = snippet
    const { high: { url } } = thumbnails
    return { urlVideo, title, description, url }
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
