import React from "react";
import "./home.css";
import background from "../assets/homebackground.png";
import backgroundFilter from "../assets/homefilter.png";
import Navbar from "../Common/Navbar";
import { FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion"

function Home() {

   

  return (
    <div className="homeWrap">
        
      <img
        src={background}
        loading="lazy"
        alt="background"
        className="background"
      />
      <img
        src={backgroundFilter}
        alt="backgroundFilter"
        loading="lazy"
        className="backgroundFilter"
      />

      <Navbar />

      <div className="homeCont">

        <div 
      
        className="homeContent">
          <motion.h2 
           initial={{x:-100 , opacity:0}}
           animate={{x:0 , opacity:1}}
          transition={{delay:0.2 , x:{type:"spring" , stiffness:60 } , opacity:{duration:0.4} , ease:"easeIn" , duration:1}} 
          
          >Explore the world with exciting people</motion.h2>
          <motion.p  
             initial={{x:-100 , opacity:0}}
             animate={{x:0 , opacity:1}}
            transition={{delay:0.2 , x:{type:"spring" , stiffness:60 } , opacity:{duration:1} , ease:"easeIn" , duration:0.6}} 
          >
            We help people find co travellers and also structure their travel
            plans{" "}
          </motion.p>
          <motion.button
            initial={{x:-100 , opacity:0}}
            animate={{x:0 , opacity:1}}
           transition={{delay:0.4 , x:{type:"spring" , stiffness:60 } , opacity:{duration:0.6} , ease:"easeIn"}} 
          >
            <span>Book With Us</span> <FaArrowRight />{" "}
          </motion.button>
        </div>

      </div>


    </div>

  );
}

export default Home;
