import styles from 'styles/CardVideo.module.css'

export default function CardVideo ({ urlVideoEmbed, urlVideo, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.video}>
        <iframe
          src={urlVideoEmbed}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <a href={urlVideo} target='_blank' rel='noreferrer'>
        <h2>{title}</h2>
      </a>
      <p>{description}</p>
    </div>
  )
}
