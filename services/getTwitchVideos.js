// 422915264
async function mapFromApiResponseToVideos (apiResponse) {
  const result = await apiResponse.then(res => {
    return res
  })

  const resultsVideos = result.map(({ title, url, description, preview, views, _id }) => {
    const { large } = preview
    const urlVideoEmbed = `https://player.twitch.tv/?video=${_id}&parent=localhost&autoplay=false`
    return { id: _id, views, title, description, url, urlVideoEmbed, large }
  })

  return [1, 2, 3].map((index) => resultsVideos[index])
}

export default async function getTwitchVideos () {
  const url =
      'https://api.twitch.tv/kraken/channels/422915264/videos'

  const apiResponse = fetch(url, {
    headers: {
      Authorization: 'Bearer dseodycshskzl856aq03h2e2s65lf2',
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-Id': 'of3sztfqiat214o3svlfm888zm9q51'
    }
  })
    .then(res => res.ok ? res.json() : [])
    .then(data => { return data.videos })

  return mapFromApiResponseToVideos(apiResponse)
}
