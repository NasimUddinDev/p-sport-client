import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Highlights = () => {
  return (
    <div className="py-6 mb-6 mx-5">
      <h2 className="text-2xl font-bold text-primary border-b border-primary mb-6">
        LATEST HIGHLIGHTS
      </h2>

      <div>
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper gap-6">
          <SwiperSlide>
            <div className="cursor-pointer">
              <img
                src="https://digitalhub.fifa.com/transform/c6f530c6-53d7-4a4a-b78c-72fbdbf1df7d/ENG_FRA_QF_FWC22_THUMB_V3?io=transform:fill,aspectratio:16x9,width:468&quality=100"
                alt=""
                className="rounded-md"
              />
              <p className="text-xl mt-2">
                England v France | Quarter-finals | FIFA World Cup Qatar 2022™ |
                Highlights
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <img
                src="https://digitalhub.fifa.com/transform/09125409-8dda-41c0-b5e8-4c2d92215caf/MAR_POR_QF_FW22?io=transform:fill,aspectratio:16x9,width:468&quality=100"
                alt=""
                className="rounded-md"
              />
              <p className="text-xl mt-2">
                Morocco v Portugal | Quarter-finals | FIFA World Cup Qatar 2022™
                | Highlights
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <img
                src="https://digitalhub.fifa.com/transform/4be784cd-f418-4fb9-b462-2385267180f2/NED_ARG_QF_FW22?io=transform:fill,aspectratio:16x9,width:468&quality=100"
                alt=""
                className="rounded-md"
              />
              <p className="text-xl mt-2">
                Netherlands v Argentina | Quarter-finals | FIFA World Cup Qatar
                2022™ | Highlights
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cursor-pointer">
              <img
                src="https://digitalhub.fifa.com/transform/7236e90c-6fdb-4918-b1c8-82f7e22d8027/ENG_SEN_R16_FWC22_THUMB?io=transform:fill,aspectratio:16x9,width:468&quality=100"
                alt=""
                className="rounded-md"
              />
              <p className="text-xl mt-2">
                England v Senegal | Round of 16 | FIFA World Cup Qatar 2022™ |
                Highlights
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Highlights;
