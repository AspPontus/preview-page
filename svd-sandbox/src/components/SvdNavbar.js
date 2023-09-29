import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function SvdNavbar({type}) {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if(window.scrollY > 100) {
              handleShow(true)
          }else handleShow(false)
      });
  }, []);

  return (
    <nav className={show ? `nav active ${type}` : `nav ${type}`}>
      <h3 className='title'>Schibsted Navbar</h3>
      <button className='primary-btn nav-btn' onClick={() => navigate('/')}>Go back</button>
    </nav>
  )
}

export default SvdNavbar