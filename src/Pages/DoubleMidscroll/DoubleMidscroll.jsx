import React, {useEffect, useState, useRef} from 'react'
import SvdNavbar from '../../components/Navbar/SvdNavbar'
import ContentBlock from '../../components/ContentBlock/ContentBlock'
import Iframe from '../../components/Iframe'
import './Double_Midscroll_styles.css'

function DoubleMidscroll() {
  const [frame, setFrame] = useState(); // Hold foreground iframe
  const [videoMessage, setVideoMessage] = useState({}); 
  const [parentReady, setParentReady] = useState(true);
  const waypoints = useRef([]);
  const claimedWaypointIds = useRef([]);

  const currentStatus = {
    backgroundVideo: {},
    waypoints: [],
    currentWaypointIDs: [],
    trigger: {},
  };
  
  function getLastThreshold(percentage, waypoints) {
    waypoints.sort((a, b) => a.threshold - b.threshold); // Sort thresholds in ascending order (optional, depending on the input)

    // Loop through the thresholds from the highest to the lowest
    for (let i = waypoints.length - 1; i >= 0; i--) {
      if (percentage >= waypoints[i].threshold) {
          return waypoints[i];
      }
    }
  }


  useEffect(() => {
  const messageHandler = (e) => {    
      if(e.origin === "https://video.seenthis.se" || e.origin === "http://localhost:3000") {
        if (typeof(e.data) === 'string'){
          const obj = JSON.parse(e.data); // Parse data
          
          if (obj.video_url) {
            currentStatus.backgroundVideo = {messageStatus: "sent"};
            setVideoMessage(JSON.parse(e.data)); // Set background video url
            return;
          }
          
          if (obj.action === 'addWaypoint') {
            if (
              claimedWaypointIds.current.includes(obj.eventId) &&
              obj.frame === 'seenthis_tag_container'
            )
            return;
            if (waypoints.current.some(wp => wp.threshold === obj.threshold)) return;
            waypoints.current.push(obj);
            claimedWaypointIds.current.push(obj.eventId);
          }
        }
      }
    }

    const scrollHandler =  () => {
      currentStatus.currentWaypointIDs = claimedWaypointIds.current;
      currentStatus.waypoints = waypoints.current;

      const top = document.querySelector('.double-midscroll-container')?.getBoundingClientRect().top; // Check "ad window" distance from top
      const bottom = document.querySelector('.double-midscroll-container')?.getBoundingClientRect().bottom; // Check "ad window" distance from bottom
      if(top <= 64) {
        const navOpacity = document.querySelector('nav'); // Targets the navbar
        navOpacity.style.opacity = `${top/100}`; // Sets opacity based on how far the window has been scrolled
      } else {
        document.querySelector('nav').style.opacity = `1`; // If not IO set navbar opacity to 1
      }

      if (bottom <= 64) {
        document.querySelector('nav').style.opacity = `${((bottom - 84) * -1) / 100}`; // display navbar again as the ad window leaves view
      } 


      if (!document.querySelector('.double-midscroll-background')) return;
      let procent = 0; // Procent scrolled (0 - when it starts entering the screen, 100 - when the last pixel leaves the screen)
      
      const height = window.innerHeight; // Height of the viewport
      const elPosition = document.querySelector('.double-midscroll-container').getBoundingClientRect().top - height; // The ad element position with 0 being when the element enters the viewport
      // If the element is within the procent window, calculate the procent visible
      if (elPosition < 0 && elPosition > height * viewportScreenHeightMultiplyer * invertMultiplication) {
        procent = elPosition / (height * viewportScreenHeightMultiplyer * invertMultiplication);
      }
      
      // If the waypoints array is empty, return
      if (waypoints.current.length === 0) return;

  
      triggerAction(getLastThreshold(procent, waypoints.current)); // Get the active threshold and send that waypoint object to the iframe


    }


    const triggerAction = (waypoint) => {
      // if waypoint, send postmessage to the iframe containing the foreground
      if (waypoint) {
        const frame = document.querySelector('.double-midscroll-foreground')
        if (frame.contentWindow == null) return;
        const message = {
          action: "addWaypoint", // action name
          eventId: waypoint.eventId,  // Random eventId (base64 encoded string)
          frame: window.name,  // The current window's name
          threshold: waypoint.threshold,  // The threshold value
          callbackId: waypoint.eventId,  // Unique callbackId
          isIntersecting: true // Signal that the threshold is active
        };
        currentStatus.trigger = {messageStatus: "sent", message: message};
        frame.contentWindow.postMessage(JSON.stringify(message), "*"); // Send message
      } 
    }
  
    
    // Listen for messages
    window.addEventListener('message', messageHandler);
    
    setFrame(document.querySelector('.double-midscroll-foreground')) // Save the iframe of the foreground video

    const viewportScreenHeightMultiplyer = 2; // How many times the viewport size needs to be multiplied
    const invertMultiplication = -1; // Inverts positive and negative numbers
    // Listen to scroll event
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('message', messageHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
    
  }, [])

  console.log(videoMessage)

  // Set the background video to the specified background file from the foreground
  if(videoMessage.video_url) {
    document.querySelector('.double-midscroll-background').src = videoMessage.video_url
  }

    return (
    <div>
    <SvdNavbar type={`fss-nav`}/>
    <div className="page">
        <div className="article-block">
          {[...Array(4)].map((_, i) => (
            <ContentBlock key={`top-block-${i}`} />
          ))}
        </div>
        {parentReady && (
          <div className="double-midscroll-container">
            <Iframe type={'double-midscroll double-midscroll-foreground'} />
            <Iframe type={'double-midscroll double-midscroll-background'} />
          </div>
        )}
      <div className="article-block">
        <div className="article-block">
          {[...Array(4)].map((_, i) => (
            <ContentBlock key={`bottom-block-${i}`} />
          ))}
        </div>
      </div>
    </div>
  </div>
  )

}

export default DoubleMidscroll