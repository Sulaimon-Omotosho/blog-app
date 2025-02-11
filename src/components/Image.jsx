import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = ({ src, alt, classname, width, height }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      alt={alt}
      className={classname}
      loading='lazy'
      lqip={{ active: true, quality: 20 }}
      width={width}
      height={height}
      transformation={[
        {
          width: width,
          height: height,
        },
      ]}
    />
  )
}

export default Image
