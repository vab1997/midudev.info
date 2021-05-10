import Layout from 'components/Layout'
import ListCardVideos from 'components/ListCardVideos'
import ListCoursesYoutube from 'components/ListCoursesYoutbe'
import Profile from 'components/Profile'
import SocialMedia from 'components/SocialMedia'

import getYoutubeVideos from 'services/getYoutubeVideos'

export default function Home ({ videos }) {
  return (
    <Layout>
      <Profile />
      <SocialMedia />
      <ListCoursesYoutube />
      <ListCardVideos videos={videos} />
    </Layout>
  )
}

export async function getStaticProps () {
  const videos = await getYoutubeVideos()

  return {
    props: {
      videos
    }
  }
}
