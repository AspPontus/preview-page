import React from 'react'
import { useParams } from 'react-router-dom'

function FSS({type}) {
  const params = useParams();    
  return (
    <iframe className={type} name={type === 'double-midscroll double-midscroll-foreground' ? "seenthis_tag_container" : ''} title="ad-format" frameBorder="0" src={`https://video.seenthis.se/v2/builds/${params.id}/preview.html`}></iframe>
)
}

export default FSS