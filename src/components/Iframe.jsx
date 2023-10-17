import React from 'react'
import { useParams } from 'react-router-dom'

function FSS({type}) {
  const params = useParams();
  return (
    <iframe className={type} title='fullscreenscroll' frameBorder="0" src={`https://video.seenthis.se/v2/builds/${params.id}/preview.html`}>FSS</iframe>
)
}

export default FSS