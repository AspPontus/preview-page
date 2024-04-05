import '../Styles/FSS_styles.css'
import React from 'react'
import ContentBlock from "../components/ContentBlock";
import Iframe from "../components/Iframe";
import SvdNavbar from "../components/SvdNavbar";
import {AiFillSetting} from 'react-icons/ai'


function SvDFSS(purchase) {

  if(purchase.purchase === 'io') { 
      window.addEventListener('scroll', () => {
      const top = document.querySelector('.fss-container')?.getBoundingClientRect().top
      const bottom = document.querySelector('.fss-container')?.getBoundingClientRect().bottom 
      if(top <= 64) {
        const navOpacity = document.querySelector('nav')
        navOpacity.style.opacity = `${top/100}`
      } else {
        document.querySelector('nav').style.opacity = `1`
      }

      if (bottom <= 64) {
        document.querySelector('nav').style.opacity = `${((bottom - 84) * -1) / 100}`
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
