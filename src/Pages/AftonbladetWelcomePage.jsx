import '../Styles/stylesWelcomePage.css'
import React, { useEffect, useState } from 'react'
import Iframe from "../components/Iframe";
import SvdNavbar from "../components/SvdNavbar";
import ContentBlock from "../components/ContentBlock";
import {AiFillSetting} from 'react-icons/ai'

function AftonbladetWelcomePage() {
  const [gapFromTop, setGapFromTop] = useState('88.5vh');
  const [scrollDownGap, setScrollDownGap] = useState('0rem');

  window.addEventListener('resize', async () => {
    resizeIframe()
  })

  const resizeIframe = async () => {
    const iframe = await document.querySelector('iframe')
    iframe.style.height = `${window.innerHeight}px`
  }

  const fetchUserOS = () => {
    const userAgent = window.navigator.userAgent
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      } else if (/android/i.test(userAgent)) {
        setGapFromTop('88.5vh')
        setScrollDownGap('0rem')
          return "Android";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setGapFromTop('80vh')
        setScrollDownGap('3.5rem')
          return "iOS";
      } else {
        setGapFromTop('88.5vh')
        setScrollDownGap('0rem')
          return "Desktop";
      }
  };

  
  useEffect(() => {
    fetchUserOS()
    resizeIframe()
  }, [])

  return (
    <div className='mobile-size-adjustment'>
        <div className="ad-wp">ANNONS</div>
        <div className="ad-wp settings"><AiFillSetting /></div>
        
        <div className='close-ad'>
          <div className='close-line'></div>
          <div className='close-line rot-90'></div>
        </div>

        <Iframe type={'welcome-page'} />
        
        <div className="continue-scroll" style={{marginBottom: scrollDownGap}}>
            <p>Scrolla ner till Aftonbladet</p>
            <img className='arrow-down' src="https://play2.s3.amazonaws.com/assets/Kg9_Xfveb.png" alt="" />
        </div>
      
        <div className="welcome-page-page" style={{top: gapFromTop}}>
        
            <SvdNavbar type={'welcome-page-nav'}/>
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
        </div>
        
    </div>
  )
}

export default AftonbladetWelcomePage