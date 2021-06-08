import useNearScreen from 'hooks/useNearScreen'
import styles from 'styles/ListVideos.module.css'
import CardVideoTwitch from './CardVideoTwitch'

export default function ListCardVideosTwitch ({ videos }) {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '350px' })

  return (
    <section ref={fromRef} className={styles.sectionContainer}>
      <h1>Últimos live en Twitch</h1>
      {isNearScreen &&
        <div className={styles.grid}>
          <div className={styles.containerVideos}>
            {videos && videos.map(({ id, views, title, description, url, urlVideoEmbed }) => (
              <CardVideoTwitch
                key={id}
                urlVideoEmbed={urlVideoEmbed}
                urlVideo={url}
                title={title}
                description={description}
                views={views}
              />
            ))}
          </div>
        </div>}
    </section>
  )
}
