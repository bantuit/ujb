import { Outlet } from 'react-router-dom'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'

const index = () => {
  return (
    <div className='tentang-kami h-[900px]'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}

export default index