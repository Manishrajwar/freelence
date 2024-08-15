import React from 'react';
import "./home.css";
import frame from '../assets/Frame.png';
import frame1 from '../assets/Frame2.png';
import frame2 from '../assets/Frame3.png';
import frame3 from '../assets/Frame4.png';
import frame4 from '../assets/Frame5.png';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import TopDestiSwiper from "../components/topDestiSwiper"

function Homesec4() {
  return (
    <div className='hsec4wrap'>

      <motion.div className="hsec4cont">
        <h2>Top Destination</h2>

        <div className="sec4image">
          {/* First Section */}
          <div className="sec4sec1">
            <motion.img
              initial={{ x: -200, y: -100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 50 },
                y: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.5 },
                duration: 1.5,
              }}
              src={frame}
              alt=""
            />
            <motion.img
              initial={{ x: 200, y: -100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 50 },
                y: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.5 },
                duration: 1.5,
              }}
              src={frame1}
              alt=""
            />
          </div>

          {/* Second Section */}
          <div className="sec4sec2">
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                y: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.5 },
                duration: 1.5,
              }}
              src={frame2}
              alt=""
            />
            <motion.img
              initial={{ x: -200, y: 100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 50 },
                y: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.5 },
                duration: 1.5,
              }}
              src={frame3}
              alt=""
            />
            <motion.img
              initial={{ x: 200, y: 100, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 50 },
                y: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.5 },
                duration: 1.5,
              }}
              src={frame4}
              alt=""
            />
          </div>

          <button className='seealljour'>
            <span>See all journeys</span> <FaArrowRight />
          </button>

        </div>


        <TopDestiSwiper />



      </motion.div>

    </div>
  );
}

export default Homesec4;
