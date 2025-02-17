import React, { useEffect } from 'react'
import SvdNavbar from '../../components/Navbar/SvdNavbar'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Iframe from '../../components/Iframe'
import './Double_Midscroll_legacy_styles.css'

function DoubleMidscrollLegacy() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const top = document.querySelector('.double-midscroll-container')?.getBoundingClientRect().top; // Check "ad window" distance from top
      const bottom = document.querySelector('.double-midscroll-container')?.getBoundingClientRect().bottom; // Check "ad window" distance from bottom
      if(top <= 64) {
        const navOpacity = document.querySelector('nav'); // Targets the navbar
        navOpacity.style.opacity = `${top/100}`; // Sets opacity based on how far the window has been scrolled
      } else {
        document.querySelector('nav').style.opacity = 1; // If not IO set navbar opacity to 1
      }

      if (bottom <= 64) {
        document.querySelector('nav').style.opacity = `${((bottom - 84) * -1) / 100}`; // display navbar again as the ad window leaves view
      }
    })
  })
  
  return (
    <div>
    <SvdNavbar type={`fss-nav`}/>
    <div className="page">
      <div className="article-block">
      <ContentBlock />
      <ContentBlock />
      <ContentBlock />
      <ContentBlock />
      </div>
        <div className={`double-midscroll-container`}>
            <Iframe type={'double-midscroll'}/> 
        </div>
      <div className="article-block">
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
      </div>
    </div>
  </div>
  )
}

export default DoubleMidscrollLegacy