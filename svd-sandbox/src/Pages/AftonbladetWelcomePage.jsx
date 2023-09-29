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
        <img 
        className='close-ad' 
        src="https://www.aftonbladet.se/cnp-assets/270dc27ed59eaee8abe172f26c20cbba.png" 
        alt="" />
        <Iframe type={'welcome-page'}/>
        
        <div className="continue-scroll">
            <p>Scrolla ner till Aftonbladet</p>
            <img 
            className='scroll-down' 
            src="https://www.aftonbladet.se/cnp-assets/499db3d2b1645ed1e375bd24c855887d.png" 
            alt="" 
            />
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