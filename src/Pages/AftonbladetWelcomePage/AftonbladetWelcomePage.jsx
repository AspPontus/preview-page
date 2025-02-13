import './stylesWelcomePage.css'
import React, { useEffect, useState } from 'react'
import Iframe from "../../components/Iframe";
import SvdNavbar from "../../components/Navbar/SvdNavbar";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import {AiFillSetting} from 'react-icons/ai'

function AftonbladetWelcomePage({site}) {

  window.addEventListener('resize', async () => {
    resizeIframe()
  })

  const resizeIframe = async () => {
    const iframe = await document.querySelector('.ad-space')
    if (!document.querySelector('.welcome-page')) return;
    document.querySelector('.welcome-page').style.height = `${iframe.offsetHeight}px`
  }
  
  useEffect(() => {
    resizeIframe()
  })

  return (
    <div className={`mobile-size-adjustment ${site}`}>
        <div className="ad-wp">ANNONS</div>
        <div className="ad-wp settings"><AiFillSetting /></div>
        
        <div className='close-ad'>
          <div className='close-line'></div>
          <div className='close-line rot-90'></div>
        </div>
        <Iframe type={'welcome-page'} />
        
        
        <div className={`continue-scroll ${site}`}/*  style={{marginBottom: scrollDownGap}} */>
            <p>Scrolla ner till {site}</p>
            <img className='arrow-down' src="https://play2.s3.amazonaws.com/assets/Kg9_Xfveb.png" alt="" />
        </div>
      
        <div className={`welcome-page-page ${site}`} /* style={{top: gapFromTop} }*/>
            <section className='ad-space'></section>
            <SvdNavbar type={'welcome-page-nav'}/>
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

export default AftonbladetWelcomePage