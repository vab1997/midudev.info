const { URL_PARENT, REQUEST_HEAD } = require('config/index')

async function mapFromApiResponseToVideos (apiResponse) {
  const result = await apiResponse

  const resultsVideos = result.map(({ title, url, description, preview, views, _id }) => {
    const { large } = preview
    const urlVideoEmbed = `https://player.twitch.tv/?video=${_id}&parent=${URL_PARENT}&autoplay=false`
    return { id: _id, views, title, description, url, urlVideoEmbed, large }
  })

  return [0, 1, 2].map((index) => resultsVideos[index])
}

export default async function getTwitchVideos () {
  const url =
      'https://api.twitch.tv/kraken/channels/422915264/videos'

  const apiResponse = fetch(url, REQUEST_HEAD)
    .then(res => res.ok ? res.json() : [])
    .then(data => { return data.videos })
    .catch(e => console.error(e))

  return mapFromApiResponseToVideos(apiResponse)
}
