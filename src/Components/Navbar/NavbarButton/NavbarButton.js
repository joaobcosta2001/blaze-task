import "./NavbarButton.css"

import React, {useState} from 'react'

function NavbarButton(props) {

  const [isMouseHover,setMouseHover] = useState(false);

  const setMouseHoverTrue = () =>{setMouseHover(true)}
  const setMouseHoverFalse = () =>{setMouseHover(false)}


  return (
    <button className="navbar-button" onMouseEnter={setMouseHoverTrue} onMouseLeave={setMouseHoverFalse}>
        {props.title}
        <div className="navbar-button-underline-background"></div>
        <div className={isMouseHover?"navbar-button-underline-foreground-hovered":"navbar-button-underline-foreground"}></div>
    </button>
  );
}

export default NavbarButton;
