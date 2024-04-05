import React from 'react'
import ContentBlock from '../components/ContentBlock'
import SvdNavbar from '../components/SvdNavbar'
import Iframe from '../components/Iframe'
import '../Styles/Bonnier_Welcome_Page.css'

function BonnierWelcomePage() {

    window.addEventListener('resize', () => {
        const width = document.querySelector('.bonnier-welcome-page-container').getBoundingClientRect().width;
        const height = document.querySelector('.bonnier-welcome-page-container').getBoundingClientRect().height;
        if (height <  (width / 1.77777777) * .72 )  {
            console.log('test', document.querySelector('.bonnier-welcome-page'))
            document.querySelector('.bonnier-welcome-page').style.height = `137vh !important`
            document.querySelector('.bonnier-welcome-page').style.width = `auto !important`
        }
    })
    
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