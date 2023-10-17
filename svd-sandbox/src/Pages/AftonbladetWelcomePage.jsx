import React from 'react'
import Iframe from "../components/Iframe";
import SvdNavbar from "../components/SvdNavbar";
import ContentBlock from "../components/ContentBlock";
import {AiFillSetting} from 'react-icons/ai'

function AftonbladetWelcomePage() {


  return (
    <div>
        <div className="ad-wp">ANNONS</div>
        <div className="ad-wp settings"><AiFillSetting /></div>
        
        <div className='close-ad'>
          <div className='close-line'></div>
          <div className='close-line rot-90'></div>
        </div>
        <Iframe type={'welcome-page'}/>
        
        <div className="continue-scroll">
            <p>Scrolla ner till Aftonbladet</p>

            <div className='scroll-down'>
              <div className='arrow-down'></div>
              <div className='arrow-down '></div>
            </div>
        </div>
        <div className="welcome-page-page">
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