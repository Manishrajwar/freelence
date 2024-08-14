import React from "react";
import "./blog.css";
import star from "../assets/starts.png";
import profile from "../assets/profile.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={0}
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
                <img className="starimg" src={star} alt="" />
                <p className="estipara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>

                <div className="profildea">
                  <img src={profile} alt="" />
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
