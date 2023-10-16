import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ConfigPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [route, setRoute] = useState('svd_fullscreenscroll');

    const linkRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        const response = await fetch('http://localhost:8000/api/iframe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                link: linkRef.current.value
              })
        })
        const data = await response.json();
        console.log(data)
        if (data.name === 'ProtocolError') {
            setError(data.message);
            setLoading(false); 
            return;
        } else if (data.name === 'TimeoutError'){
            setError('Timeout error');
            setLoading(false); 
            return;
        };
        console.log(data)
        navigate(`/${route}/${data}`);        
    }

    const handleCheckbox = (e) => {
        switch (e.target.id) {
            case 'fullscreenscroll':
                document.querySelector('#takeover').checked = false
                document.querySelector('#welcome-page').checked = false
                setRoute('svd_fullscreenscroll')
                break;
            case 'takeover':
                document.querySelector('#fullscreenscroll').checked = false
                document.querySelector('#welcome-page').checked = false
                setRoute('svd_takeover')
                break;
            case 'welcome-page':
                document.querySelector('#fullscreenscroll').checked = false
                document.querySelector('#takeover').checked = false
                setRoute('aft_welcome-page')
                break;
            default:
                document.querySelector('#takeover').checked = false
                document.querySelector('#welcome-page').checked = false
                setRoute('svd_fullscreenscroll')
        }
    }

  return (
    <div>
        {error && <div className='error'>{error}</div>}
        <form className='sandbox-form'>
            <div className="input-label">
                <label htmlFor="cms-link">Preview link:</label>
                <input id="cms-link" type="text" placeholder='Public preview link' ref={linkRef} /> 
            </div>
            <p className='disclaimer'>*Make sure that the preview link only contains the creative you want to test</p>

            <div className="fss-to-check">
                <div className='checkbox'>
                    <label htmlFor="fullscreenscroll">FullScreenScroll: </label>
                    <input id="fullscreenscroll" type="checkbox" defaultChecked onInput={(e) => handleCheckbox(e)}  />
                </div>
                <div className='checkbox'>
                    <label htmlFor="takeover">Takeover: </label>
                    <input id="takeover" type="checkbox" onInput={(e) => handleCheckbox(e)} /> 
                </div>
                <div className='checkbox'>
                    <label htmlFor="welcome-page">Welcome Page: </label>
                    <input id="welcome-page" type="checkbox" onInput={(e) => handleCheckbox(e)} /> 
                </div>   
            </div>
            <input id='submit' className='primary-btn' type="submit" value="Generate" onClick={(e) => {handleSubmit(e)}}/>
        </form>
        <div className={loading ? 'loader active' : 'loader'}>
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
        </div>
    </div>
  )
}

export default ConfigPage
