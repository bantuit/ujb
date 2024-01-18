import React from 'react';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import jeklingko from '../../assets/jaklingko.svg';
import SMP from '../../assets/semen-merah-putih.svg';
import NusaKirana from '../../assets/nusa-kirana.svg';
import SPV from '../../assets/spv.svg';
import Nisson from '../../assets/nisson.svg';

const Partner = () => {
  return (
    <div className="h-fit w-full flex flex-col items-center  ">
      <h1 className="font-bold text-5xl">Partner Kami</h1>
      <div className="w-full h-full flex justify-center items-center gap-3 flex-wrap p-10     ">
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          //   navigation
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
        >
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={jeklingko} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SMP} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={NusaKirana} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SPV} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={Nisson} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SPV} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SPV} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SPV} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SPV} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SPV} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
