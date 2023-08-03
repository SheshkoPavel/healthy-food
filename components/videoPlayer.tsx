import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = ({ link }: any) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, [])

  if (!shouldRender){
    return null
  }

  return (
    <ReactPlayer
      url={link} //https://vimeo.com/271995284
      controls={true}
      playing={true}
      muted={true}
      loop={true}
      width={'100%'}
      height={'100%'}
    />
  )
}