import Layout from 'components/Layout'
import ListCardVideos from 'components/ListCardVideos'
import ListCardVideosTwitch from 'components/ListCardVideosTwitch'
import ListCoursesYoutube from 'components/ListCoursesYoutbe'
import SocialMedia from 'components/SocialMedia'

import getYoutubeVideos from 'services/getYoutubeVideos'
import getTwitchVideos from 'services/getTwitchVideos'
import ProfilePicture from 'components/ProfilePicture'

export default function Home ({ videosYoutube, videosTwitch }) {
  return (
    <Layout>
      <h1 className='title'>Bienvenido a Midudev.info</h1>
      <ProfilePicture width={400} height={400} />
      <h3 className='subtitle'>El sitio web donde encontraras toda la información acerca de las ultimas actividades de Midudev</h3>
      <SocialMedia />
      <ListCoursesYoutube />
      <ListCardVideos videos={videosYoutube} />
      <ListCardVideosTwitch videos={videosTwitch} />
    </Layout>
  )
}

export async function getStaticProps () {
  const videosYoutube = await getYoutubeVideos()
  const videosTwitch = await getTwitchVideos()

  return {
    props: {
      videosYoutube,
      videosTwitch
    }
  }
}
