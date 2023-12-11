import "./Logo3d.css";
import logoRotating from "./logo-rotating.mp4"

function Logo3d() {

  return (
    <video width="900" height="600" autoPlay id="rotating-logo-video" loop>
        <source src={logoRotating} type="video/mp4"/>
    </video>
  );
}

export default Logo3d;
