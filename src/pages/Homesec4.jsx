import React from 'react';
import "./home.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import TopDestiSwiper from "../components/topDestiSwiper"
import { TOP_DESTINATIONS } from '../Data/Home';

function Homesec4() {
  return (
    <div className='hsec4wrap'>

      <motion.div className="hsec4cont">
        <h2>Top Destinations</h2>

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
              src={TOP_DESTINATIONS.image1}
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
              src={TOP_DESTINATIONS.image2}
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
              src={TOP_DESTINATIONS.image3}
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
              src={TOP_DESTINATIONS.image4}
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
              src={TOP_DESTINATIONS.image5}
              alt=""
            />
          </div>

          <button className='seealljour'>
            <span>See all journeys</span> <FaArrowRight />
          </button>

        </div>

         <div className='TopDestiSwiper'>

        <TopDestiSwiper />

         </div>

      </motion.div>

    </div>
  );
}

export default Homesec4;
