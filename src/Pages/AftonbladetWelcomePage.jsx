import '../Styles/stylesWelcomePage.css'
import React, { useEffect, useState } from 'react'
import Iframe from "../components/Iframe";
import SvdNavbar from "../components/SvdNavbar";
import ContentBlock from "../components/ContentBlock";
import {AiFillSetting} from 'react-icons/ai'

function AftonbladetWelcomePage({site}) {
/*   const [gapFromTop, setGapFromTop] = useState('88.5vh');
  const [scrollDownGap, setScrollDownGap] = useState('0rem'); */

  window.addEventListener('resize', async () => {
    resizeIframe()
  })

  const resizeIframe = async () => {
    const iframe = await document.querySelector('iframe')
    iframe.style.height = `${window.innerHeight}px`
  }

/*   const fetchUserUA = () => {
    if (site === 'SvD' && window.innerWidth > 450) {
      setGapFromTop('calc(100svh - 76px)')
      return;
    } else if (site === 'SvD' && window.innerWidth < 450) {
      setGapFromTop('calc(100svh - 56px)')
      return;
    }

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
  }; */

  
  useEffect(() => {
    /* fetchUserUA() */
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