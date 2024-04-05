import React from 'react'
import SvdNavbar from '../components/SvdNavbar'
import Iframe from '../components/Iframe'
import '../Styles/TO_styles.css'

function SvDTakeover() {
  return (
    <div>
        <SvdNavbar type={'takeover-nav'}/>
        <Iframe type={'takeover'}/>
    </div>
  )
}

export default SvDTakeover