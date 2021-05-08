import styles from 'styles/SocialMedia.module.css'
import IconTwitch from './icons/IconTwitch'
import IconTwitter from './icons/IconTwitter'
import IconYoutube from './icons/IconYoutube'
import IconInstagram from './icons/IconInstagram'
import IconDiscord from './icons/IconDiscord'

export default function SocialMedia () {
  return (
    <section className={styles.sectionContainer}>
      <h1>Únete a las Redes Sociales y a la comunidad de Discord</h1>
      <div className={styles.containerIcon}>
        <div>
          <a href='https://www.youtube.com/c/midudev?sub_confirmation=1' title='Youtube' target='_blank' rel='noreferrer'>
            <IconYoutube width={56} height={56} />
          </a>
        </div>
        <div>
          <a href='https://www.twitch.tv/midudev' title='Twitch' target='_blank' rel='noreferrer'>
            <IconTwitch width={56} height={56} />
          </a>
        </div>
        <div>
          <a href='https://discord.com/invite/BQZfXza7MR' title='Discord' target='_blank' rel='noreferrer'>
            <IconDiscord width={56} height={56} />
          </a>
        </div>
        <div>
          <a href='https://twitter.com/midudev' title='Twitter' target='_blank' rel='noreferrer'>
            <IconTwitter width={56} height={56} />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/midu.dev/?hl=es-la' title='Instagram' target='_blank' rel='noreferrer'>
            <IconInstagram width={56} height={56} />
          </a>
        </div>
      </div>
    </section>
  )
}
