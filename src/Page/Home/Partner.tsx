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
import Pertamina from '../../assets/Pertamina.png';
import balaiKeselamatan from '../../assets/balai-keselamatan.png';
import holywings from '../../assets/holywings_169.png';
import pollux from '../../assets/pollux.png';
import labklinik from '../../assets/labklinik.jpg';
import alamSampurna from '../../assets/asm.png';
import bw from '../../assets/bw.png';
import kmk from '../../assets/kmk.png';
import mppt from '../../assets/mppt.png';
import hmi from '../../assets/hmi.png';
import sms from '../../assets/sms.png';
import faruq from '../../assets/faruq.jpg';

const Partner = () => {
  return (
    <div id='partner' className="h-fit w-full flex flex-col items-center ">
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
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide className="h-52 flex justify-center items-center">
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
          <SwiperSlide className="h-44  flex justify-center items-center">
            <img src={Pertamina} alt="" className='h-16 lg:h-28'/>
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center items-center">
            <img src={balaiKeselamatan} alt="" className='w-36' />
          </SwiperSlide>
          <SwiperSlide className="w-auto flex justify-center items-center">
            <img src={alamSampurna} alt="" className='w-96' />
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
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={bw } alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={kmk } alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={mppt } alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={hmi } alt="" className='w-44' />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={sms } alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-44 flex justify-center items-center">
            <img src={faruq } alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
