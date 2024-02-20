//import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return(
        <div id="footer-div">
            <div id="footer-social-buttons">
                <a href="https://www.instagram.com/blazetask/" target="_blank" rel="noreferrer"><button className="footer-social-button" id="instagram-button"></button></a>
                <a href="https://www.facebook.com/profile.php?id=61554834218565" target="_blank" rel="noreferrer"><button className="footer-social-button" id="facebook-button"></button></a>
                <a href="https://www.linkedin.com/company/blazetask/about/" target="_blank" rel="noreferrer"><button className="footer-social-button" id="linkedin-button"></button></a>
            </div>

            {/*<div id="footer-links">
                <Link to="/" className="footer-link">HOME</Link>
                <Link to="/about-us" className="footer-link">ABOUT US</Link>
                <Link to="/services" className="footer-link">SERVICES</Link>
                <Link to="/contacts" className="footer-link">CONTACTS</Link>
            </div>*/}
            BlazeTask @ 2024

        </div>
    )
}

export default Footer;
