import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/index'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import './App.css'
import TentangKamiParent from './Page/TentangKami/index'
import TentangKami from './Page/TentangKami/TentangKami'
import VisiMisi from './Page/TentangKami/VisiMisi'
import Komitment from './Page/TentangKami/Komitment'
import StrukturOrganisasi from './Page/TentangKami/StrukturOrganisasi'
// import Kontak from './Page/Kontak';
// import AlurRekruitment from './Page/Karir/AlurRekruitment/index';
// import FormPelamar from './Page/Karir/FormPelamar/index';
// import LowonganTerkini from './Page/Karir/LowonganTerkini/index';
// import StandarRekruitment from './Page/Karir/StandarRekruitment/index';
// import Partnership from './Page/Partnership';
// import SecurityCenteng from './Page/LayananKami/SecurityCenteng';
// import CleaningServices from './Page/LayananKami/CleaningServices';
// import JawaraParkir from './Page/LayananKami/JawaraParkir';
// import Getol from './Page/LayananKami/getol';
// import DetailLowongan from './Page/Karir/LowonganTerkini/DetailLowongan';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tentang-kami' element={<TentangKami />} />
        {/* <Route path='/layanan-kami' element={<LayananKami />}> */}
          <Route path='tentang-kami' element={<TentangKamiParent />}>
            <Route index element={<TentangKami />} />
            <Route path='visi-dan-misi' element={<VisiMisi />} />
            <Route path='komitment' element={<Komitment />} />
            <Route path='struktur-organisasi' element={<StrukturOrganisasi />} />
            {/* Add more routes for specific services as needed */}
          </Route>
          {/* <Route path='/kontak' element={<Kontak />} /> */}
          {/* <Route path='/alur-rekruitment' element={<AlurRekruitment />} /> */}
          {/* <Route path='/form-pelamar' element={<FormPelamar />} /> */}
          {/* <Route path='/lowongan-terkini' element={<LowonganTerkini />} /> */}
          {/* <Route path='/detail-lowongan' element={<DetailLowongan />} /> */}
          {/* <Route path='/standar-rekruitment' element={<StandarRekruitment />} /> */}
          {/* <Route path='/partnership' element={<Partnership />} /> */}
          {/* <Route path='/security-centeng' element={<SecurityCenteng />} /> */}
          {/* <Route path='/cleaning-services' element={<CleaningServices />} /> */}
          {/* <Route path='/jawara-parkir' element={<JawaraParkir />} /> */}
          {/* <Route path='/getol' element={<Getol />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
