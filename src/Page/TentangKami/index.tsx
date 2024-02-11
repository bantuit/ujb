import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer'

const index = () => {
  return (
    <div className='h-[900px]'>
      <Outlet />
      <Footer />
    </div>

  )
}

export default index