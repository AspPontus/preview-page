import React from 'react'

function ContentBlock() {
  return (
    <div className='outer-article-container'>
        
    <div className='article-container'>
    <div className="img-container">
        <div className="image"></div>
        <div className="img-desc"></div>
    </div>
    <article>
        <div className="titles">
            <div className="text-heading"></div>
            <div className="text-sub-heading"></div>
        </div>
        <div className='content-text'>
            <div className="article-long text"></div>
            <div className="article-long text"></div>
            <div className="article-long-cut text"></div>
            <div className="article-medium text"></div>
            <div className="article-long text"></div>
            <div className="article-long-cut text"></div>
            <div className="article-medium-cut text"></div>
            <div className="article-short text"></div>
        </div>
    </article>
</div>

</div>
  )
}

export default ContentBlock