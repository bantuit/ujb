import Summary from './Summary'
import LayananKami from './LayananKami'
import Partner from './Partner'
import Legalitas from './Legalitas'
import Email from './Email'
import latar from '../../assets/bg-ujb1.jpg'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'


const index = () => {
    return (
        <div>
            <img src={latar} alt="bg" className='absolute w-full -z-10 -top-8 ' />
            <Navbar/>
            <Summary />
            <LayananKami />
            <Partner />
            <Legalitas />
            <Email />
            <Footer/>
        </div>
    )
}

export default index