import React from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer text-base-content flex flex-col items-center'>
            <footer className="footer p-10 flex flex-wrap gap-y-10  justify-start lg:justify-around text-base-content">
                <aside className='flex flex-col gap-10'>
                    <div>
                        <h1 className='font-bold text-xl'>PT. Urusan Jaga Banda</h1>
                        <p className='w-80'>perusahaan yang bergerak di bidang pelayanan jasa dan sedang berkembang pesat dalam melayani kebutuhan jasa di seluruh Indonesia</p>
                    </div>
                    <div className="grid grid-flow-col gap-4">
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaLinkedin />
                    </div>
                </aside>
                <nav>
                    <header className=" font-bold text-black">Halaman</header>
                    <a className="link link-hover">Beranda</a>
                    <a className="link link-hover">Tentang Kami</a>
                    <a className="link link-hover">Layanan</a>
                    <a className="link link-hover">Partner Kami</a>
                    <a className="link link-hover">Legalitas Perusahaan </a>
                    <a className="link link-hover">Hubungi Kami</a>
                    <a className="link link-hover">Parner</a>
                </nav>
                <nav>
                    <header className="font-bold text-black">Berita</header>
                    <a className="link link-hover">SDM</a>
                    <a className="link link-hover">Rekruitment</a>
                </nav>
                <nav className='w-44'>
                    <header className="font-bold text-black">Contact</header>
                    <a className="link link-hover flex items-center gap-2"><BsTelephone /> 021 - 2265 2417</a>
                    <a className="link link-hover flex items-center gap-2"><HiOutlineMail /> urusanjagabanda20@gmail.com</a>
                    <a className="link link-hover flex items-center gap-2"><CgWebsite /> http://ujb.co.id</a>
                    <div className='flex gap-2 '>
                        <IoLocationOutline className='text-5xl'/>
                        <a className="link link-hover "> JL. Sunter kemayoran No.45A, Sunter Jaya. kec. Tanjung Priok Kota Jakarta Utara 14350</a>
                    </div>
                </nav>
            </footer >
            <div className='mb-4'>© 2024 PT. Urusan Jaga Banda</div>
        </div>
    )
}

export default Footer