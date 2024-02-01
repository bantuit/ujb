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
import Pertamina from '../../assets/Pertamina.png';
import balaiKeselamatan from '../../assets/balai-keselamatan.png';
import alamSampurna from '../../assets/alam-sampurna.png';
import holywings from '../../assets/holywings_169.png';
import pollux from '../../assets/pollux.png';
import labklinik from '../../assets/labklinik.jpg';

const Partner = () => {
  return (
    <div className="h-fit lg:mb-44 w-full flex flex-col items-center bg-[#F3F1F1] ">
      <img src={BgPartner} alt="" className='absolute h-[50%] bg-[#F3F1F1]  '/>
      <h1 className="font-bold text-4xl md:text-6xl pt-10 z-20">Partner Kami</h1>
      <div className="w-full h-full flex justify-center items-center gap-3 flex-wrap p-10 ">
        <Swiper
          modules={[Pagination, A11y]}
          className='cursor-pointer'
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
            <img src={Pertamina} alt="" className='h-28'/>
          </SwiperSlide>
          <SwiperSlide className="h-auto flex justify-center items-center">
            <img src={balaiKeselamatan} alt="" className='w-32' />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={alamSampurna} alt="" className='w-28' />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={holywings} alt="" className='w-48' />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={pollux} alt="" className='w-28' />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={labklinik } alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
