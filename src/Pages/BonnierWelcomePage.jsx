import React from 'react'
import ContentBlock from '../components/ContentBlock'
import SvdNavbar from '../components/SvdNavbar'
import Iframe from '../components/Iframe'
import '../Styles/Bonnier_Welcome_Page.css'

function BonnierWelcomePage() {
    
  return (
    <div>
        <div className='to-expressen'>Vidare till Expressen</div>
            <div className={`bonnier-welcome-page-container`} >
                <Iframe type={`fss bonnier-welcome-page`}/>
            </div>
        <div className="page">
            <SvdNavbar type={`bonnier-wp-nav`}/>
            <div className="page">
                <div className="article-block">
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
    </div>
  )
}

export default BonnierWelcomePage