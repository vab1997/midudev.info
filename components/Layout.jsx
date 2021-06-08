import Footer from './Footer'
import Head from 'next/head'
import Navbar from './Navbar'
import styles from 'styles/Layout.module.css'

export default function Layout ({
  children,
  title = 'Info Midudev',
  description = 'sitio web sobre Información de Midudev'
}) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>{title}</title>
        <link rel='icon' href='/favicon1.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta property='og:locale' content='es-ES' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
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
        {children}
      </main>
      <Footer />
    </>
  )
}
