import Link from 'next/link'
import Image from 'next/image'
import styles from 'styles/Navbar.module.css'
import IconTwitch from './icons/IconTwitch'
import IconTwitter from './icons/IconTwitter'
import IconYoutube from './icons/IconYoutube'

export default function Navbar () {
  return (
    <>
      <nav className={styles.navbar} role='navigation' aria-label='main navigation'>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLeft}>
            <Link href='/'>
              <a className={styles.navLogo} title='midudev'>
                <img
                  className={styles.logo}
                  src='/logo.webp'
                  alt='logo Midudev'
                  width={200}
                  height={200}
                  loading='eager'
                />
              </a>
            </Link>
          </div>
          <div className={styles.navbarRight}>
            <div>
              <Link href='/whoIsMidudev'>
                <a className={styles.link}>
                  Quien es Midudev?
                </a>
              </Link>
            </div>
            <div>
              <a href='https://www.youtube.com/c/midudev?sub_confirmation=1' target='_blanck' rel='noreferret'>
                <IconYoutube width={32} height={32} />
              </a>
            </div>
            <div>
              <a href='https://www.twitch.tv/midudev' target='_blanck' rel='noreferret'>
                <IconTwitch width={24} height={24} />
              </a>
            </div>
            <div>
              <a href='https://twitter.com/midudev' target='_blanck' rel='noreferret'>
                <IconTwitter width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
