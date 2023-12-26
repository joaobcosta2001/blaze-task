//import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return(
        <div id="footer-div">
            <div id="footer-social-buttons">
                <button className="footer-social-button" id="instagram-button"></button>
                <button className="footer-social-button" id="linkedin-button"></button>
                <button className="footer-social-button" id="facebook-button"></button>
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
