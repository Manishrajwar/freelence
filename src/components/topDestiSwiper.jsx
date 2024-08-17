import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules";
import smallTop from "../assets/topdesti1.png"

const topDestiSwiper = () => {

  return (
    <Swiper
      rewind={true}
      modules={[Navigation]}
      className="mySwiper44"
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        1160: {
          slidesPerView: 2,
        },
        200: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide>
        <div className="singleTopdesti">
             <img src={smallTop} alt="" />
             <p className="destiname">France - 5 days in  Paris, Nice</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="singleTopdesti">
             <img src={smallTop} alt="" />
             <p className="destiname">France - 5 days in  Paris, Nice</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="singleTopdesti">
             <img src={smallTop} alt="" />
             <p className="destiname">France - 5 days in  Paris, Nice</p>
        </div>
      </SwiperSlide>

    
    </Swiper>
  );
};

export default topDestiSwiper;
