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
import BgPartner from '../../assets/bg-partner.png';

const Partner = () => {
  return (
    <div className="h-fit mb-44 w-full flex flex-col items-center  ">
      <img src={BgPartner} alt="" className='absolute -z-10'/>
      <h1 className="font-bold text-5xl pt-10">Partner Kami</h1>
      <div className="w-full h-full flex justify-center items-center gap-3 flex-wrap p-10 ">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          pagination={{ clickable: true }}
          breakpoints={{
            1280: {
              slidesPerView: 5,
            },
            758: {
              slidesPerView: 3,
            },
            360: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={jeklingko} alt=""  />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SMP} alt="" className='h-28' />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={NusaKirana} alt="" className='h-28'/>
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={SPV} alt="" className='h-40'/>
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={Nisson} alt="" className='h-28'/>
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
