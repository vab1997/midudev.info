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
          <h1 className='title'>Miguel Ángel Durán</h1>
          <h2>Creador de Contenido sobre JavaScript, React.js, Next.js, y más.</h2>
          <p>
            Midudev es un creador de contenido sobre Desarrollo Web, especialmente sobre JavaScript con un amplio conocimiento y experiencia.
            Tiene un canal de {' '}
            <a className={styles.anchor} href='https://www.youtube.com/c/midudev?sub_confirmation=1' target='_blank' rel='nofollow noopener noreferrer'>Youtube</a>{' '}
            donde tiene varios cursos gratis que tiene un contenido muy bueno que te ayudará a comprender muchos
            conceptos a cerca de como funciona las cosas por debajo.
          </p>
        </div>
      </section>
    </>
  )
}