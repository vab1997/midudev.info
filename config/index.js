const { URL_PARENT, CLIENT_ID_TWITCH, CHANNEL_ID, KEY_YOUTUBE } = process.env

const URL_EMBED = 'https://www.youtube.com/embed/'
const URL_VIDEO = 'https://www.youtube.com/watch?v='

const REQUEST_HEAD = {
    headers: {
        Authorization: 'Bearer dseodycshskzl856aq03h2e2s65lf2',
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-Id': `${CLIENT_ID_TWITCH}`
    }
}

export {
    URL_PARENT, 
    CLIENT_ID_TWITCH,
    CHANNEL_ID,
    KEY_YOUTUBE,
    URL_EMBED,
    URL_VIDEO,
    REQUEST_HEAD
}