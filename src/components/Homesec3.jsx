import React from "react";
import "./styles.css";
import img from "../assets/Img.png";
import {motion} from "framer-motion"
import bannerimg from "../assets/bannerimg.png"
import bannerimgfilter from "../assets/banfiltes3.png"

function Homesec3() {
  return (
    <div className="sec3wrap">

      <motion.div
        initial={{x:-200 , opacity:0}}
        whileInView={{x:0 , opacity:1}}
       transition={{delay:0.8 , x:{type:"spring" , stiffness:50 } , opacity:{duration:0.4} , ease:"easeInOut" , duration:0.5}} 
      className="sec3cont">
        {/* left img */}
        <img src={img} alt="" />

        <div className="sec3right">
          {/* left side  */}

          <div className="se3righleft">
            <p>Exclusive offer</p>
            <h3>Book your holiday with complete confidence</h3>
          </div>

          <button className="booknow">
            <span>Book Now</span>
          </button>
        </div>

      </motion.div>

       <div className="sec3disbanner">

        <img src={bannerimg} alt="bannerimg" className="bannerimg" />

         <img src={bannerimgfilter} alt="bannerimgfilter" className="bannerimgfilter" />

         <div className="s3bancontent">
          <h4>Discover Special Offers!</h4>
          <p>Make sure to check out these special promotions</p>
          <button><span>Book Now</span></button>
         </div>

       </div>

    </div>
  );
}

export default Homesec3;
