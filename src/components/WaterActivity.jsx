import React from 'react';
import card1 from "../assets/Card 1.png";
import card2 from "../assets/Card 2.png";
import "./service.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
        >Top Water Sports Activities</motion.h2>

        <div className="wateracitems">
          
          {/* Left Image - Diagonally from bottom left */}
          <motion.img
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
            src={card1}
            alt=""
          />

          {/* Middle Image - From directly below */}
          <motion.img
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
          />
        </div>

        <button className='seemorebtn'>
          <span>See more</span> <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default WaterActivity;
