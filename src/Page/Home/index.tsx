import Summary from './Summary'
import LayananKami from './LayananKami'
import Partner from './Partner'
import Legalitas from './Legalitas'
import Email from './Email'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'


const index = () => {
    return (
        <div >
            <div className='home'>
            <Navbar/>
            <Summary />
            <LayananKami />
            <Partner />
            <Legalitas />
            <Email />
            <Footer/>
            </div>
        </div>
    )
}

export default index