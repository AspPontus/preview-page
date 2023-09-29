import React from 'react'
import ContentBlock from "../components/ContentBlock";
import Iframe from "../components/Iframe";
import SvdNavbar from "../components/SvdNavbar";
import {AiFillSetting} from 'react-icons/ai'

function SvDFSS() {

  
  return (
    <div>
      <SvdNavbar type={'fss-nav'}/>
      <div className="page">
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
        <div className="fss-container">
          <div className="ad">
            <div>annons</div>
            <AiFillSetting />
          </div>
          <Iframe type={'fss'}/>
        </div>
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
      </div>
    </div>
  )
}

export default SvDFSS