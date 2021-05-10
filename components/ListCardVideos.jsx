import styles from 'styles/ListVideos.module.css'
import CardVideo from './CardVideo'

export default function ListCardVideos ({ videos }) {
  return (
    <section className={styles.sectionContainer}>
      <h1>Últimos videos subidos en Youtube</h1>
      <div className={styles.grid}>
        <div className={styles.containerVideos}>
          {videos && videos.map(({ urlVideoEmbed, urlVideo, title, url, description }) => (
            <CardVideo
              key={url}
              urlVideoEmbed={urlVideoEmbed}
              urlVideo={urlVideo}
              title={title}
              url={url}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
