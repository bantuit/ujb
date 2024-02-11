import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='kaki px-10 pt-44 md:pt-44  mt-10 footer text-white bg-white flex flex-col items-center z-20 '>
            <footer className="footer flex flex-wrap gap-y-10 justify-start lg:justify-around z-20 ">
                <aside className='flex flex-col gap-10'>
                    <div className="space-y-5"> 
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
                        <header className=" font-bold mb-3">Halaman</header>
                        <a href="/" className="link link-hover">Beranda</a>
                        <a href="/tentang-kami" className="link link-hover">Tentang Kami</a>
                        <a href="/layanan-kami/security-centeng" className="link link-hover">Layanan</a>
                        <a href="#partner" className="link link-hover">Partner Kami</a>
                        <a href="#legalitas" className="link link-hover">Legalitas Perusahaan </a>
                        <a href="/hubungi-kami" className="link link-hover">Hubungi Kami</a>
                    </nav>
                <nav>
                    <header className="font-bold mb-3">Berita</header>
                    <a href="/layanan-kami/getol" className="link link-hover">SDM</a>
                    <a href="/karir/lowongan-kerja" className="link link-hover">Rekruitment</a>
                </nav>
                <nav className='w-44'>
                    <header className="font-bold mb-3">Contact</header>
                    <a className="link link-hover flex items-center gap-2"><BsTelephone /> 021 - 2265 2417</a>
                    <a className="link link-hover flex items-center gap-2"><HiOutlineMail /> urusanjagabanda20@gmail.com</a>
                    <a className="link link-hover flex items-center gap-2"><CgWebsite /> http://ujb.co.id</a>
                    <div className='flex gap-2 '>
                        <IoLocationOutline className='text-5xl' />
                        <a className="link link-hover "> JL. Sunter kemayoran No.45A, Sunter Jaya. kec. Tanjung Priok Kota Jakarta Utara 14350</a>
                    </div>
                </nav>
            </footer >
            <div className='mb-4 z-20 border-t w-full flex justify-center pt-3'>© 2024 PT. Urusan Jaga Banda</div>
        </div>
    )
}

export default Footer