import React from 'react'
// import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const index = () => {
  return (
    <div className='h-fit flex flex-col justify-start pt-10 items-center gap-10    '>
      <h1 className='text-4xl font-extrabold '>Hubungi Kami</h1>
      <div className='w-full flex flex-col-reverse md:flex-row flex-wrap gap-5 justify-center md:justify-start px-5 lg:px-20'>
        <div className='w-full md:w-1/3 space-y-2'>
          <header className="font-bold text-black">Kantor Kami</header>
          <a className="link link-hover flex items-center gap-2"><BsTelephone /> 021 - 2265 2417</a>
          <a className="link link-hover flex items-center gap-2"><HiOutlineMail /> urusanjagabanda20@gmail.com</a>
          <a className="link link-hover flex items-center gap-2"><CgWebsite /> http://ujb.co.id</a>
          <div className='flex gap-2 '>
            <IoLocationOutline className='text-3xl' />
            <a className="link link-hover "> JL. Sunter kemayoran No.45A, Sunter Jaya. kec. Tanjung Priok Kota Jakarta Utara 14350</a>
          </div>
        </div>
        <div className='w-1/2'>ok</div>
      </div>
    </div>
  )
}

export default index