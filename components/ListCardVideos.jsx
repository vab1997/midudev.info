import useNearScreen from 'hooks/useNearScreen'
import styles from 'styles/ListVideos.module.css'
import CardVideo from './CardVideo'

export default function ListCardVideos ({ videos }) {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '250px' })

  return (
    <section
      className={styles.sectionContainer}
    >
      <h1 ref={fromRef}>Últimos videos subidos en Youtube</h1>
      <div className={styles.grid}>
        {isNearScreen &&
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
          </div>}
      </div>
    </section>
  )
}
