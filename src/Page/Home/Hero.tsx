import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Dot from '../../assets/Dot.svg'
import Rectangle1 from '../../assets/rectangle1.svg'
import Rectangle2 from '../../assets/rectangle2.svg'

const Hero = () => {
  return (
    <div className='h-[90vh] w-full flex flex-col justify-center items-center gap-10 px-5   '>
      <h1 className='text-3xl md:text-5xl lg:w-1/2 text-center w-full font-extrabold'>Kami Memberikan Solusi Pelayanan Untuk Bisnis Anda</h1>
      <div className='w-full md:w-[90vw] lg:w-1/2 md:text-2xl text-center'>Mari berkerjasama dengan kami untuk membangun bisnis anda menjadi lebih mudah dengan penawaran layanan yang kami berikan </div>
      <button className="btn btn-active btn-info text-white">Bergabung <IoIosArrowRoundForward /></button>
      <img className='absolute right-0 bottom-0 w-40' src={Dot} alt="" />
      <img className='absolute -left-40 bottom-80 -md:left-40 md:bottom-20  z-10' src={Rectangle2} alt="" />
      <img className='absolute -left-40 bottom-60 -md:left-40 lg:bottom-10 z-10' src={Rectangle1} alt="" />
    </div>
  )
}

export default Hero