import React from 'react';
import "./service.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { WATER_ACTIVITY } from '../Data/Home';

function WaterActivity() {
  return (
    <div className='waterAcwrap'>
      <div className="wateracticont">
        
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1
          }}
        >{WATER_ACTIVITY.heading}</motion.h2>


        <div className="wateracitems">
          

           {
            WATER_ACTIVITY.sliderData.map((item , index)=>(
              <motion.img
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1
              }}
              src={item.img}
              alt=""
            />
  
            ))
           }
        
          {/* <motion.img
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1
            }}
            src={card2}
            alt=""
          />

          <motion.img
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1
            }}
            src={card1}
            alt=""
          /> */}
        </div>

        <button className='seemorebtn'>
          <span>See more</span> <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default WaterActivity;
