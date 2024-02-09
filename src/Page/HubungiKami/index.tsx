import { IoLocationOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';


const index = () => {
  return (
    <div className='hubungi h-fit flex flex-col justify-start items-center gap-10 '>
      <Navbar />
      <h1 className='text-4xl font-extrabold z-10 '>Hubungi Kami</h1>
      <div className='w-full flex flex-col-reverse md:flex-row flex-wrap gap-5 justify-center md:justify-start px-5 lg:px-20 z-10'>
        <div className='w-full md:w-1/3 space-y-3'>
          <header className="font-bold text-black">Kantor Kami</header>
          <a className="link link-hover flex items-center gap-2"><BsTelephone /> 021 - 2265 2417</a>
          <a className="link link-hover flex items-center gap-2"><HiOutlineMail /> urusanjagabanda20@gmail.com</a>
          <a className="link link-hover flex items-center gap-2"><CgWebsite /> http://ujb.co.id</a>
          <div className='flex gap-2 '>
            <IoLocationOutline className='text-3xl' />
            <a className="link link-hover w-1/2 "> JL. Sunter kemayoran No.45A, Sunter Jaya. kec. Tanjung Priok Kota Jakarta Utara 14350</a>
          </div>
        </div>
        <div className='w-1/2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.767871960616!2d106.8726640745303!3d-6.161835060389313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50e4a5a2c97%3A0xc001b2a6d43a76c1!2sJl.%20Sunter%20Kemayoran%20No.45a%2C%20RT.1%2FRW.9%2C%20Sunter%20Jaya%2C%20Kec.%20Tj.%20Priok%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014360!5e0!3m2!1sid!2sid!4v1706538970616!5m2!1sid!2sid"
            width="900" height="250" style={{ border: "0" }} loading="lazy" ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index