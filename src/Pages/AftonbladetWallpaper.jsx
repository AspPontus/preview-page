import React from 'react'
import SvdNavbar from '../components/SvdNavbar'
import ContentBlock from '../components/ContentBlock'
import Iframe from '../components/Iframe'
import '../Styles/wallpaper_styles.css'

function AftonbladetWallpaper() {
  return (
    <div>
    <SvdNavbar type={`wallpaper-nav`}/>
    <div className="page"> 
        <div className="wallpaper-container">
            <div className="ad-disclaimer">ANNONS</div>
            <Iframe type={`wallpaper`}/>
        </div>
       
       <div className="article-wallpaper">
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
        </div>
    </div>
  </div>
  )
}

export default AftonbladetWallpaper