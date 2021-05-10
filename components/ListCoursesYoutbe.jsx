import CardVideo from './CardVideo'
import styles from 'styles/ListVideos.module.css'

export default function ListCoursesYoutube () {
  return (
    <section className={styles.sectionContainer}>
      <h1>Lista de Cursos Gratuitos en Youtube</h1>
      <div className={styles.grid}>
        <div className={styles.containerVideos}>
          <CardVideo
            urlVideoEmbed='https://www.youtube.com/embed/playlist?list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7'
            urlVideo='https://www.youtube.com/playlist?list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7'
            title='Bootcamp Fullstack Gratuito | JS, React.js, Node.js, GraphQL, Node.js, TS y +'
            description='🧑‍💻Bootcamp FullStack Gratuito | Javascript, React.js, GraphQL, Node.js, TypeScript y +'
          />
          <CardVideo
            urlVideoEmbed='https://www.youtube.com/embed/playlist?list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC'
            urlVideo='https://www.youtube.com/playlist?list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC'
            title='Curso React.js | Custom Hooks, Lazy Load, Infinity Scroll, SEO, Rendimiento y +'
            description='Curso React.js ⚛️ desde cero - Crea una aplicación paso a paso'
          />
          <CardVideo
            urlVideoEmbed='https://www.youtube.com/embed/playlist?list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6'
            urlVideo='https://www.youtube.com/playlist?list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6'
            title='Curso de Next.js + Firebase | Clon de Twitter para desarrolladores'
            description='🔥 Curso gratuito de Next.js y Firebase'
          />
        </div>
      </div>
    </section>
  )
}
