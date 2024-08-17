import React from "react";
import "./blog.css"; // Ensure this file includes pagination styling
import star from "../assets/starts.png";
import profile from "../assets/profile.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper Pagination module
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

function Testimonail() {
  const slideUpAnimation = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and invisible
    visible: { opacity: 1, y: 0 } // End at the original position, fully visible
  };

  return (
    <div className="testiwrap">
      <div className="testiCont">
        <div className="testtop">
          <p className="testitag">What customers say</p>
          <h2>Customer testimonials</h2>
        </div>

        <Swiper
          rewind={true}
          modules={[Navigation, Pagination]} // Add Pagination module here
          className="mySwiper"
          pagination={{ clickable: true }} // Enable clickable pagination dots
          breakpoints={{
            1050:{
              spaceBetween:20 , 
              slidesPerView: 3
            } , 
            750:{
              spaceBetween:20 , 
              slidesPerView: 2
            } , 
            200:{
              spaceBetween:20 , 
              slidesPerView: 1
            }
          }}
        >
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="singletebox"
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: index * 0.2 }}
                variants={slideUpAnimation}
              >
                <img className="starimg" src={star} alt="Star" />
                <p className="estipara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>

                <div className="profildea">
                  <img src={profile} alt="Profile" />
                  <div className="profc">
                    <p className="namep">Orlando Diggs</p>
                    <p className="addpre">Position, Company name</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonail;
