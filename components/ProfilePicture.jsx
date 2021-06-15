import css from 'styled-jsx/css'
import Image from 'next/image'
import imageProfile from 'public/midudev-tutor.webp'

export default function ProfilePicture ({ width = 500, height = 500 }) {
  return (
    <>
      <svg height='0' width='0'>
        <defs>
          <clipPath id='blob' clipPathUnits='objectBoundingBox'>
            <path d='M0.75815095,0.0579477769 C0.879893708,0.187288937 0.902165272,0.677587654 0.799370955,0.785996249 C0.627963035,0.966765889 0.26163708,0.91434951 0.111342491,0.755791573 C-0.0332137967,0.603287436 -0.035795248,0.382887577 0.0965066612,0.173955315 C0.200239457,0.0101396315 0.648923894,-0.0580965318 0.75815095,0.0579477769 Z' />
          </clipPath>
        </defs>
      </svg>
      <Image
        src={imageProfile}
        className='profile-picture'
        alt='midudev'
        width={width}
        height={height}
        loading='eager'
        placeholder='blur'
      />
      <style global jsx>
        {styles}
      </style>
    </>
  )
}

const styles = css.global`
  .profile-picture {
    clip-path: url(#blob);
  }
`
