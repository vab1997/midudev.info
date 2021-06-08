import styles from 'styles/CardVideo.module.css'

export default function CardVideoTwitch ({ urlVideoEmbed, urlVideo, title, description, views }) {
  return (
    <div className={styles.card}>
      <div className={styles.video}>
        <iframe
          src={urlVideoEmbed}
          height='378'
          width='620'
          frameBorder='0'
        />
      </div>
      <a href={urlVideo} target='_blank' rel='noreferrer'>
        <h2>{title}</h2>
      </a>
      <p>{description || ''}</p>
      <p>Views: {views}</p>
    </div>
  )
}
