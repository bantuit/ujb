import Footer from '../../Component/Footer'
import Navbar from '../../Component/Navbar'
import notFound from '../../assets/page-not-found.svg'

const Getol = () => {
  return (
    <div className='getol h-[900px] -z-20'>
      <Navbar />
      <div className='w-full mb-20 h-screen flex justify-center p-20 '>
        <img className='w-1/2 z-20' src={notFound} alt="" />
      </div>
      <Footer />

    </div>
  )
}

export default Getol