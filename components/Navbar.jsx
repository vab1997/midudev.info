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
                <Image
                  src='/logo.webp'
                  alt='logo Midudev'
                  width={500}
                  height={500}
                  loading='eager'
                />
              </a>
            </Link>
          </div>
          <div className={styles.navbarRight}>
            <Link href='https://www.youtube.com/c/midudev?sub_confirmation=1'>
              <a>
                <IconYoutube width={32} height={32} />
              </a>
            </Link>
            <Link href='https://www.twitch.tv/midudev'>
              <a>
                <IconTwitch width={24} height={24} />
              </a>
            </Link>
            <Link href='https://twitter.com/midudev'>
              <a>
                <IconTwitter width={24} height={24} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
