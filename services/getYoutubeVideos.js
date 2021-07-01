const { KEY_YOUTUBE, CHANNEL_ID, URL_EMBED, URL_VIDEO } = require('config/index')


function removeQuotes (params) {
  return params.replace(/['"]+g/, '')
}

async function mapFromApiResponseToVideos (apiResponse) {
  const result = await apiResponse

  return result.map(({ id, snippet }) => {
    const { videoId } = id
    const videoIdUrl = removeQuotes(videoId)
    const urlVideo = `${URL_VIDEO}${videoIdUrl}`
    const urlVideoEmbed = `${URL_EMBED}${videoIdUrl}`
    const { title, description, thumbnails } = snippet
    const { high: { url } } = thumbnails
    return { urlVideoEmbed, urlVideo, title, description, url }
  })
}

export default async function getYoutubeVideos () {
  const url =
    `https://www.googleapis.com/youtube/v3/search?key=${KEY_YOUTUBE}=&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`

  const apiResponse = fetch(url)
    .then(res => res.ok ? res.json() : [])
    .then(({ items }) => { return items })
    .catch(e => console.error(e))

  return mapFromApiResponseToVideos(apiResponse)
}
