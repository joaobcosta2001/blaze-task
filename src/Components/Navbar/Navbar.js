import "./Navbar.css"
import NavbarButton from "./NavbarButton/NavbarButton";

function Navbar() {

  return (
    <div id="navbar">
        <NavbarButton title="home"/>
        <NavbarButton title="ABOUT US"/>
        <NavbarButton title="SERVICES"/>
        <NavbarButton title="CONTACTS"/>
    </div>
  );
}

export default Navbar;
