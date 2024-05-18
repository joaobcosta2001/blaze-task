import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export default function PageView() {
    const location = useLocation();
  
    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, [location]);
  
    return null;
}