import React, {useState, useEffect} from 'react'
import { createPortal } from 'react-dom'
import Iframe from '../../components/Iframe'
import './Double_Midscroll_styles.css'


function DoubleMidscrollFrame() {
      const [frame, setFrame] = useState(); // Hold foreground iframe
      const [videoMessage, setVideoMessage] = useState({}); // Containe
      const [waypoints, setWaypoints] = useState([]);
      const claimedIDs = []; // is this needed, can i get this data from waypoints? should it be a state?
          
    
      function getLastThreshold(percentage, waypoints) {
        waypoints.sort((a, b) => a.threshold - b.threshold); // Sort thresholds in ascending order (optional, depending on the input)
    
        // Loop through the thresholds from the highest to the lowest
        for (let i = waypoints.length - 1; i >= 0; i--) {
          if (percentage >= waypoints[i].threshold) {
              return waypoints[i];
          }
        }
      }
    
    
      const triggerAction = (waypoint) => {
        // if waypoint, send postmessage to the iframe containing the foreground
        if (waypoint) {
          if (frame.contentWindow == null) return;
          const message = {
            action: "addWaypoint", // action name
            eventId: btoa(Math.random()).substring(0, 12),  // Random eventId (base64 encoded string)
            frame: window.name,  // The current window's name
            threshold: waypoint.threshold,  // The threshold value
            callbackId: waypoint.eventId,  // Unique callbackId
            isIntersecting: true // Signal that the threshold is active
          };
          frame.contentWindow.postMessage(JSON.stringify(message), "*"); // Send message
        }
      }
    
    
      useEffect(() => {
        // Listen for messages
        window.addEventListener('message', (e) => {
          if(e.origin === "https://video.seenthis.se") {
            console.log(e)
            if (typeof(e.data) === 'string'){
              const obj = JSON.parse(e.data); // Parse data
              if (obj.video_url) {
                setVideoMessage(JSON.parse(e.data)); // Set background video url
                return;
              }
              if (obj.action === 'addWaypoint') {
                if (claimedIDs.includes(obj.eventId)) return; // If eventId already exists, do not add the waypoint again
                setWaypoints(waypoints => [...waypoints, obj]); // Add waypoints
                claimedIDs.push(obj.eventId) // Save the added eventId
                return;
              }
            }
          }
        }, false);
    
    
        setFrame(document.querySelector('.double-midscroll-foreground')) // Save the iframe of the foreground video
    
        const viewportScreenHeightMultiplyer = 2; // How many times the viewport size needs to be multiplied
        const invertMultiplication = -1; // Inverts positive and negative numbers
        // Listen to scroll event
        window.addEventListener('scroll', () => {
    
          if (!document.querySelector('.double-midscroll-background')) return;
          let procent = 0; // Procent scrolled (0 - when it starts entering the screen, 100 - when the last pixel leaves the screen)
          const height = window.innerHeight; // Height of the viewport
          const elPosition = document.querySelector('.double-midscroll-container').getBoundingClientRect().top - height; // The ad element position with 0 being when the element enters the viewport
    
          // If the element is within the procent window, calculate the procent visible
          if (elPosition < 0 && elPosition > height * viewportScreenHeightMultiplyer * invertMultiplication) {
            procent = elPosition / (height * viewportScreenHeightMultiplyer * invertMultiplication);
          }
          
          // If the waypoints array is empty, return
          if (waypoints.length === 0) return;
          triggerAction(getLastThreshold(procent, waypoints)); // Get the active threshold and send that waypoint object to the iframe
          
        }, false)
        
    
      }, [waypoints])
    
      // Set the background video to the specified background file from the foreground
      if(videoMessage.video_url) {
        document.querySelector('.double-midscroll-background').src = videoMessage.video_url
      }

      setTimeout(() => {
        console.log(document.querySelector('.double-midscroll-container').innerHTML);
      }, 1000);
      
    
  return (
    <div className={`double-midscroll-container`}>
        <Iframe type={'double-midscroll double-midscroll-foreground'}/> 
        <Iframe type={'double-midscroll double-midscroll-background'}/> 
    </div>
  )
}

export default DoubleMidscrollFrame