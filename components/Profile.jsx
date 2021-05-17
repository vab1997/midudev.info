import ProfilePicture from 'components/ProfilePicture'
import styles from 'styles/Profile.module.css'

export default function Profile () {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.profileContainer}>
          <div className={styles.profilePicture}>
            <ProfilePicture width={300} height={300} />
          </div>
        </div>
        <div className={styles.content}>
          <h1>Miguel Ángel Durán</h1>
          <h2>Creador de Contenido sobre JavaScript, React.js, Next.js, y más.</h2>
          <p>
            Midudev es un creador de contenido sobre Desarrollo Web, especialmente sobre JavaScript con un amplio conocimiento y experiencia.
            Tiene un canal de {' '}
            <a className={styles.anchor} href='https://www.youtube.com/c/midudev?sub_confirmation=1' target='_blank' rel='nofollow noopener noreferrer'>Youtube</a>{' '}
            donde tiene varios cursos gratis que tiene un contenido muy bueno que te ayudará a comprender muchos
            conceptos acerca de cómo funcionan las cosas por debajo.
          </p>
          <p>
            También puedes sumarte a los stream en Twitch, donde está en vivo 3 dias a la semana:
            <li>
              <strong>Lunes</strong>: JavaScript Weekly, comentando las nuevas noticias de JavaScript.
            </li>
            <li>
              <strong>Viernes</strong>: Aprendiendo, normalmente se prueban nuevas tecnologias o algo que se haya propuesto en Discord.
            </li>
            <li>
              <strong>Domingo</strong>: Bootcamp FullStack Gratuito.
            </li>
          </p>
        </div>
      </section>
    </>
  )
}
