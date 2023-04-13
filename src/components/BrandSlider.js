import { Swiper, SwiperSlide } from "swiper/react";
import { brandswiper } from "../sliderProps";

const BrandSlider = () => {
  return (
    <Swiper {...brandswiper} className="swiper-container brandswiper">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/brand-1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/brand-2.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/brand-3.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/brand-4.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/brand-5.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-img">
            <img alt="img" src="assets/img/brand-6.png" />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default BrandSlider;
