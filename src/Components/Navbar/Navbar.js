import "./Navbar.css"
import NavbarButton from "./NavbarButton/NavbarButton";
import { useState} from "react";
import { isMobile } from "react-device-detect";

function Navbar() {

    const [isMobileNavbarOpen,setIsMobileNavbarOpen] = useState(false)


    const toggleNavbar = ()=>{
        if (isMobileNavbarOpen){
            document.body.style.overflowY = "auto"
            setIsMobileNavbarOpen(false)
        }else{
            document.body.style.overflowY = "hidden"
            setIsMobileNavbarOpen(true)
        }
    }

    return (
        <div>
        {!isMobile?(
            <div id="navbar">
                <NavbarButton title="home"/>
                <NavbarButton title="ABOUT US"/>
                <NavbarButton title="SERVICES"/>
                <NavbarButton title="CONTACTS"/>
            </div>
        ):(
            <div id="mobile-navbar">
                <button id="mobile-navbar-toggle-button" onClick={toggleNavbar}>
                    {!isMobileNavbarOpen?(
                        <div>
                            <div id="mobile-navbar-toggle-button-bar-1" className="mobile-navbar-toggle-button-bar"/>
                            <div id="mobile-navbar-toggle-button-bar-2" className="mobile-navbar-toggle-button-bar"/>
                            <div id="mobile-navbar-toggle-button-bar-3" className="mobile-navbar-toggle-button-bar"/>
                            <div id="mobile-navbar-toggle-button-bar-4" className="mobile-navbar-toggle-button-bar"/>
                        </div>
                    ):(
                        <div>
                            <div id="mobile-navbar-toggle-button-bar-1-toggled" className="mobile-navbar-toggle-button-bar"/>
                            <div id="mobile-navbar-toggle-button-bar-2-toggled" className="mobile-navbar-toggle-button-bar"/>
                            <div id="mobile-navbar-toggle-button-bar-3-toggled" className="mobile-navbar-toggle-button-bar"/>
                            <div id="mobile-navbar-toggle-button-bar-4-toggled" className="mobile-navbar-toggle-button-bar"/>
                        </div>
                    )}
                </button>
                <div id={isMobileNavbarOpen?"mobile-navbar-overlay":"mobile-navbar-overlay-hidden"}>
                    <button className="mobile-navbar-button">
                        HOME
                    </button>
                    <button className="mobile-navbar-button">
                        ABOUT US
                    </button>
                    <button className="mobile-navbar-button">
                        SERVICES
                    </button>
                    <button className="mobile-navbar-button">
                        CONTACTS
                    </button>
                </div>
            </div>
        )}
        </div>
    );
}

export default Navbar;
