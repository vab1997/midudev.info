import styles from 'styles/CardVideo.module.css'

export default function CardVideo ({ urlVideo, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.video}>
        <iframe
          src={urlVideo}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
