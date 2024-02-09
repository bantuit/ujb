import { Outlet } from 'react-router-dom'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';


const index = () => {
  return (
    <div className='layanan h-[900px] -z-20'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index