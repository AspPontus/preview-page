import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Styles/NAV_styles.css'
import DropdownMenu from './DropdownMenu';

function SvdNavbar({ type }) {
  const [show, handleShow] = useState(false);
  const [route, setRoute] = useState('svd_fullscreenscroll');
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  // if scrollY exceeds 100px change the size of the navbar
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    }); 
  }, []);

  // will run on initialization, if dropdown-btn is clicked or location the current format changes
  useEffect(() => {
    // Extract the id from the current URL
    const segments = location.pathname.split('/');
    if (segments.length > 2) {
      setId(segments[2]);
    } else {
      setId('');
    }

    // get the current format from the URL
    const selectedPreview = segments[1].split('_')
    // set route to current format
    setRoute(selectedPreview[1])
  }, [location]);


  const handleSelectedPreview = (e) => {
    //default route
    let newRoute = 'svd_fullscreenscroll';
    
    // look for what value the clicked format has
    switch (e.target.id) {
      case 'fullscreenscroll':
        newRoute = 'svd_fullscreenscroll';
        break;
      case 'fullscreenscroll-io':
        newRoute = 'svd_fullscreenscroll-io';
        break;
      case 'takeover':
        newRoute = 'svd_takeover';
        break;
      case 'welcome-page-aft':
        newRoute = 'aft_welcome-page-aft';
        break;
      case 'welcome-page-svd':
        newRoute = 'svd_welcome-page-svd';
        break;
      case 'wallpaper':
        newRoute = 'aft_wallpaper';
        break;
      case 'double-midscroll':
        newRoute = 'sts_double-midscroll';
        break;
      default:
        newRoute = 'svd_fullscreenscroll';
    }

    /* setRoute(newRoute); */
    // reset scroll
    window.scrollTo(0,0);

    // Navigate to the new URL with route and id
    navigate(`/${newRoute}/${id}`);
  };

  return (
    <nav className={show ? `nav active ${type}` : `nav ${type}`}>
      <h3 className='title'>Schibsted Navbar</h3>
      <DropdownMenu 
      handleSelectedPreview={handleSelectedPreview}
      route={route}
      />
    </nav>
  )
}

export default SvdNavbar
