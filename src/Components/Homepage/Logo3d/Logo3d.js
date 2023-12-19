import { useRef, useEffect } from "react";
import "./Logo3d.css";
import logoRotating from "./logo-rotating.mp4"
import { isMobile } from "react-device-detect";

function Logo3d() {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleInteraction = () => {
      // Check if the video is paused and not ended before playing
      if (video.paused && !video.ended) {
        video.play().catch((error) => {
          // Autoplay was prevented, handle the error (e.g., show a play button)
          console.error('Autoplay prevented:', error);
        });
      }
    };

    // Add an event listener to the document for user interaction (e.g., click)
    document.addEventListener('click', handleInteraction);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, []);


  return (
    <video ref={videoRef} width={isMobile?"300vw":"900"} height={isMobile?"200vw":"600"} autoPlay id={isMobile?"rotating-logo-video-mobile":"rotating-logo-video"} loop>
        <source src={logoRotating} type="video/mp4"/>
    </video>
  );
}

export default Logo3d;
