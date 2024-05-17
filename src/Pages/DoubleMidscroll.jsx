import React from 'react'
import SvdNavbar from '../components/SvdNavbar'
import ContentBlock from '../components/ContentBlock'
import Iframe from '../components/Iframe'
import '../Styles/Double_Midscroll_styles.css'

function DoubleMidscroll() {
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
        <Iframe type={`double-midscroll`}/>
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

export default DoubleMidscroll