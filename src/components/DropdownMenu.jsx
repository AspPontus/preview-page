import React, {useRef, useEffect, useState} from 'react'
import '../Styles/dropdown_styles.css'

function DropdownMenu({handleSelectedPreview, route}) {
    // declare format options in the dropdown
    const options = [
        {identifier: "fullscreenscroll", title: "FullScreenScroll PG", selected: false}, 
        {identifier:  "fullscreenscroll-io", title: "FullScreenScroll IO", selected: false}, 
        {identifier: "takeover", title: "Takeover (PG/IO)", selected: false}, 
        {identifier: "welcome-page-aft", title: "Welcome Page (Aft)", selected: false},
        {identifier: "welcome-page-svd", title: "Welcome Page (SvD)", selected: false},
        {identifier: "wallpaper", title: "Wallpaper (Desktop)", selected: false},
        {identifier: "double-midscroll", title: "Double Midscroll", selected: false},
        {identifier: "welcome-page-bon", title: "Bonnier Welcome Page", selected: false},
      ];
    const selectedSelect = document.querySelector('#selected-select');
    const [optionVis, setOptionVis] = useState(false);
    const dropdownBtn = useRef();

    // if the global event listener sees a click outside of the dropdown, set dropdown to closed
    const showOptions = (e) => {
        if (dropdownBtn.current && !dropdownBtn.current.contains(e.target)) {
        setOptionVis(false);
        }
    }

    useEffect(() => {   
        // listen to global clicks
        document.addEventListener("click", showOptions);
        return () => {
            // clean up event listener
            document.removeEventListener("click", showOptions);
        } 
    }, [dropdownBtn, route]);

    // will highlight and change the current format name in the dropdown
    options.forEach(option => {
        if (option.identifier === route) {
            selectedSelect.textContent = option.title;
            option.selected = true;
        } else {
            option.selected = false;
        }
    })

  return (
    <div className='dropdown'>
    <div ref={dropdownBtn} onClick={() => setOptionVis(!optionVis)} className='dropdown-btn'>
      <h2 id="selected-select" >FullScreenScroll PG</h2>
      <div className={optionVis ? 'dropdown-symbol' : 'dropdown-symbol closed'}></div>
    </div>

    <div className={optionVis ? "hidden-options " : "hidden-options closed"}>
      {
        options.map(option => {
          return (
            <div 
            onClick={(e) => {handleSelectedPreview(e)}} 
            className={option.selected ? "hidden-option selected-format" : "hidden-option"} 
            id={option.identifier}
            key={option.identifier}>
              {option.title}
              <div id='checkmark'></div>
            </div>
          )})
      }
    </div>
  </div>
  )
}

export default DropdownMenu