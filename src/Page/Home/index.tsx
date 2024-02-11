import Summary from './Summary'
import LayananKami from './LayananKami'
import Partner from './Partner'
import Legalitas from './Legalitas'
import Email from './Email'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'


const index = () => {
    return (
        <div className='home bg-white'  >
            <Navbar />
            <Summary />
            <LayananKami />
            <Partner />
            <Legalitas />
            <Email />
            <Footer />
        </div>
    )
}

export default index