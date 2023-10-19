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

    const selectedPreview = segments[1].split('_')
    let selectedStyles = document.querySelector(`#${selectedPreview[1]}`)
    selectedStyles.classList.add('selected')

  }, [location]);

  const handleSelectedPreview = (e) => {
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
      <div className="select-preview-format">
        <div className='selected-preview' id="fullscreenscroll"  onClick={(e) => handleSelectedPreview(e)}>FullScreenScroll</div>
        <div className='selected-preview' id="takeover" onClick={(e) => handleSelectedPreview(e)}>Takeover</div>
        <div className='selected-preview' id="welcome-page" onClick={(e) => handleSelectedPreview(e)}>WelcomePage</div>
      </div>
    </nav>
  )
}

export default SvdNavbar
