import Image from 'next/image'
import styles from 'styles/Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <a href='https://midu.dev'>
            Comunidad Midudev <img width='92' height='20' loading='lazy' src='/logo.webp' alt='midudev' />
          </a>
        </div>
        <span>&bull;</span>
        <a href='https://github.com/vab1997/midudev.info' rel='nofollow noreferrer' target='_blank'>GitHub</a>
        <span>&bull;</span>
        <a href='https://github.com/vab1997/midudev.info/issues/new' rel='nofollow noreferrer' target='_blank'>Enviar Sugerencia</a>
      </div>
    </footer>
  )
}
