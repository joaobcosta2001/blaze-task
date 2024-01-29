import "./Logo3d.css";
import blazetask_buildings from "../../../assets/images/blaze-task-buildings.png"
import {motion} from "framer-motion"

function Logo3d() {

  return (
    <motion.img id="homepage-splash-image" alt="blaze task logo" src={blazetask_buildings} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}/>
  );
}

export default Logo3d;
