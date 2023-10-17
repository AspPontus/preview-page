import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SvdNavbar({ type }) {
  const [show, handleShow] = useState(false);
  const [route, setRoute] = useState('svd_fullscreenscroll');
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  useEffect(() => {
    // Extract the id from the current URL
    const segments = location.pathname.split('/');
    if (segments.length > 2) {
      setId(segments[2]);
    } else {
      setId('');
    }
  }, [location]);

  const handleCheckbox = (e) => {
    let newRoute = 'svd_fullscreenscroll';

    switch (e.target.id) {
      case 'fullscreenscroll':
        newRoute = 'svd_fullscreenscroll';
        break;
      case 'takeover':
        newRoute = 'svd_takeover';
        break;
      case 'welcome-page':
        newRoute = 'aft_welcome-page';
        break;
      default:
        newRoute = 'svd_fullscreenscroll';
    }

    // Update the route state
    setRoute(newRoute);

    // Navigate to the new URL with route and id
    navigate(`/${newRoute}/${id}`);
  };

  return (
    <nav className={show ? `nav active ${type}` : `nav ${type}`}>
      <h3 className='title'>Schibsted Navbar</h3>
      <form className='sandbox-form'>
        
          <div className='checkbox'>
            <label htmlFor="fullscreenscroll">FullScreenScroll </label>
            <input id="fullscreenscroll" type="checkbox" defaultChecked onInput={(e) => handleCheckbox(e)}  />
          </div>
          <div className='checkbox'>
            <label htmlFor="takeover">Takeover </label>
            <input id="takeover" type="checkbox" onInput={(e) => handleCheckbox(e)} /> 
          </div>
          <div className='checkbox'>
            <label htmlFor="welcome-page">WelcomePage </label>
            <input id="welcome-page" type="checkbox" onInput={(e) => handleCheckbox(e)} /> 
        </div>
      </form>
      <button className='primary-btn nav-btn' onClick={() => navigate('/')}>Go back</button>
    </nav>
  )
}

export default SvdNavbar
