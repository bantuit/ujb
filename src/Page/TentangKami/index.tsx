import { Outlet } from 'react-router-dom'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import BgPartner from '../../assets/bg-partner.png';

const index = () => {
  return (
    <div className='bg-[#F3F1F1] -z-20'>
      <img src={BgPartner} alt="" className='absolute h-full w-full z-0 bg-[#F3F1F1]  ' />
      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}

export default index