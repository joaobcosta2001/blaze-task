import { changeLanguage } from "i18next";
import "./Navbar.css"
import NavbarButton from "./NavbarButton/NavbarButton";
import { useState,useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

function Navbar() {

    const {t} = useTranslation()

    const [language,setLanguage] = useState("pt")

    const [isMobileNavbarOpen,setIsMobileNavbarOpen] = useState(false)


    const changePage = ()=>{
        toggleNavbar();
        window.scrollTo(0,0);
    }


    const toggleNavbar = ()=>{
        if (isMobileNavbarOpen){
            document.body.style.overflowY = "auto"
            setIsMobileNavbarOpen(false)
        }else{
            document.body.style.overflowY = "hidden"
            setIsMobileNavbarOpen(true)
        }
    }

    const toggleLanguage = ()=>{
        console.log("Current language: " + i18n.language)
        if(language === "pt"){
            setLanguage("en")
        }else{
            setLanguage("pt")
        }
        changeLanguage(language)
    }

    return (
        <div>
        {!isMobile?(
            <div id="navbar">
                <Link to="/"><NavbarButton title={t("HOME")}/></Link>
                <Link to="/aboute-us"><NavbarButton title={t("ABOUT_US")}/></Link>
                <Link to="/services"><NavbarButton title={t("SERVICES")}/></Link>
                <Link to="/contacts"><NavbarButton title={t("CONTACTS")}/></Link>
                <div id="language-button-div">
                    <div id="language-button-container">
                        <div id={(language==="pt")?"language-button-background-div-pt":"language-button-background-div-en"}></div>
                        <div id="language-button-background-text"><div className="language-button-text-container" onClick={toggleLanguage}>PT</div><div className="language-button-text-container">EN</div></div>
                        <div id={(language==="pt")?"language-button-foreground-text-pt":"language-button-foreground-text-en"} onClick={toggleLanguage}><div className="language-button-text-container">PT</div><div className="language-button-text-container">EN</div></div>
                    </div>
                </div>
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
                    <div id="language-button-div-mobile">
                        <div id="language-button-container-mobile">
                            <div id={(language==="pt")?"language-button-background-div-pt-mobile":"language-button-background-div-en-mobile"}></div>
                            <div id="language-button-background-text-mobile"><div className="language-button-text-container-mobile" onClick={toggleLanguage}>PT</div><div className="language-button-text-container-mobile">EN</div></div>
                            <div id={(language==="pt")?"language-button-foreground-text-pt-mobile":"language-button-foreground-text-en-mobile"} onClick={toggleLanguage}><div className="language-button-text-container-mobile">PT</div><div className="language-button-text-container-mobile">EN</div></div>
                        </div>
                    </div>
                    <Link to="/" className="mobile-navbar-link" onClick={changePage}><button className="mobile-navbar-button" disabled={!isMobileNavbarOpen}>
                        {t("HOME")}
                    </button></Link>
                    <Link to="/abput-us" className="mobile-navbar-link" onClick={changePage}><button className="mobile-navbar-button" disabled={!isMobileNavbarOpen}>
                        {t("ABOUT_US")}
                    </button></Link>
                    <Link to="/services" className="mobile-navbar-link" onClick={changePage}><button className="mobile-navbar-button" disabled={!isMobileNavbarOpen}>
                        {t("SERVICES")}
                    </button></Link>
                    <Link to="/contacts" className="mobile-navbar-link" onClick={changePage}><button className="mobile-navbar-button" disabled={!isMobileNavbarOpen}>
                        {t("CONTACTS")}
                    </button></Link>
                </div>
            </div>
        )}
        </div>
    );
}

export default Navbar;
