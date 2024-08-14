import React, { useRef } from 'react'
import "./service.css"
import rec3 from "../assets/rectange3.png"
import neRec from "../assets/newRec.png"
import { FaArrowRight } from "react-icons/fa";
import { useScroll , motion, useTransform } from 'framer-motion'



function Service() {

  const ref = useRef(null);

  const {scrollYProgress} =  useScroll({
     target: ref , 
     offset:["0 1" , "1.20 1"]
   })

    const scaleProgress =useTransform(scrollYProgress , [0 , 1] , [0.5 , 1]);

  return (
    <motion.div style={{scale: scaleProgress }} ref={ref} className='servicewrap'>

        <div className="servicecont">

            <h3>Our Services</h3>

            <div className="serviceimages">

                <img src={neRec} alt="rec3" className='rec3' />

                <div className='servirwoinmg'>
                    <img src={rec3} alt="" />
                    <img src={rec3} alt="" />
                </div>

            </div>

            <button className='seeMorebtn'><span>See more</span><FaArrowRight /> </button>

        </div>
         
    </motion.div>
  )
}

export default Service