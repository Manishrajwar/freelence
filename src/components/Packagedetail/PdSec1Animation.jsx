import "./pd.css";
import { HEROSECTION_IMAGES_SMALLSCREEN } from "../../Data/PackageDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

function PdSec1Animation() {
  return (
    <div className="pdsec1aniwrap">
      <Swiper
        pagination={true}
        loop={true} 
        autoplay={{
          delay: 1500, 
          disableOnInteraction: false, 
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {HEROSECTION_IMAGES_SMALLSCREEN.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="singhersmalwidth">
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PdSec1Animation;
