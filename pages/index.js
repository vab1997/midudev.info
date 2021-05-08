import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from 'components/Navbar'
import Profile from 'components/Profile'

import getYoutubeVideos from 'services/getYoutubeVideos'
import ListCardVideos from 'components/ListCardVideos'
import Footer from 'components/Footer'
import SocialMedia from 'components/SocialMedia'

export default function Home ({ videos }) {
  return (
    <>
      <Head>
        <title>Info MiduDev</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Web site sobre Información Midudev' />
        <link rel='icon' href='/favicon.ico' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta property='og:locale' content='es-ES' />
        <meta property='og:title' content='Información Midudev' />
        <meta property='og:description' content='Web site sobre Información Midudev' />
        <meta property='og:url' content='https://midudev.info' />
        <meta property='og:site_name' content='https://midudev.info' />
        <meta name='author' content='Victor Bejas' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@victorbejas' />
        <meta name='twitter:domain' content='https://twitter.com/victorbejas' />
        <meta name='twitter:site' content='@victorbejas' />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Profile />
        <SocialMedia />
        <ListCardVideos videos={videos} />
      </main>
      <Footer />
    </>
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
