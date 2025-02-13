import './FSS_styles.css'
import React from 'react'
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import Iframe from "../../components/Iframe";
import SvdNavbar from "../../components/Navbar/SvdNavbar";
import {AiFillSetting} from 'react-icons/ai'


function SvDFSS(purchase) {

  // Handles the navbar in FSS IO formats. Hides the navbar when the ad gets scrolled into view
  if(purchase.purchase === 'io') { 
      window.addEventListener('scroll', () => {
      const top = document.querySelector('.fss-container')?.getBoundingClientRect().top; // Check "ad window" distance from top
      const bottom = document.querySelector('.fss-container')?.getBoundingClientRect().bottom; // Check "ad window" distance from bottom
      if(top <= 64) {
        const navOpacity = document.querySelector('nav'); // Targets the navbar
        navOpacity.style.opacity = `${top/100}`; // Sets opacity based on how far the window has been scrolled
      } else {
        document.querySelector('nav').style.opacity = `1`; // If not IO set navbar opacity to 1
      }

      if (bottom <= 64) {
        document.querySelector('nav').style.opacity = `${((bottom - 84) * -1) / 100}`; // display navbar again as the ad window leaves view
      }
    })
  } 
  

  return (
    <div>
      <SvdNavbar type={`fss-nav ${purchase.purchase}`}/>
      <div className="page">
        <div className="article-block">
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
        </div>
        <div className={`fss-container ${purchase.purchase}`}>
            <div className={`ad ${purchase.purchase}`}>
            <div>annons</div>
            <AiFillSetting />
          </div>
          <Iframe type={`fss ${purchase.purchase}`}/>
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


export default SvDFSS
