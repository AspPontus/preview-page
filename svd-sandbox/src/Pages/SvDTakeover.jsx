import React from 'react'
import SvdNavbar from '../components/SvdNavbar'
import Iframe from '../components/Iframe'

function SvDTakeover() {
  return (
    <div>
        <SvdNavbar type={'takeover-nav'}/>
        <Iframe type={'takeover'}/>
    </div>
  )
}

export default SvDTakeover