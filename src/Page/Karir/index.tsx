import { Outlet } from 'react-router-dom'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';

const index = () => {
  return (
    <div className='karir -z-20'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index