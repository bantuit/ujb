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
import LayananKamiParent from './Page/LayananKami/index'
import SecurityCenteng from './Page/LayananKami/SecurityCenteng'
import CleaningService from './Page/LayananKami/CleaningService'
import JawaraParkir from './Page/LayananKami/JawaraParkir'
import Getol from './Page/LayananKami/Getol'
import Karir from './Page/Karir/index'
import AlurRekruitment from './Page/Karir/AlurRekruitment'
import LowonganKerja from './Page/Karir/LowonganKerja'
import LamarKerja from './Page/Karir/LamarKerja'
import HubungiKami from './Page/HubungiKami/index'
import Login from './Page/Login/index'
import LupaPassword from './Page/Login/LupaPassword'
import DashboardLayout from './Page/Dashboard/index'
import Dashboard from './Page/Dashboard/Dashbaord'
import Profile from './Page/Dashboard/Profile'
import DetailPelamar from './Page/Dashboard/DetailPelamar'



function App() {
  // const hideNavbarAndFooterPaths = ['/','/login', '/lupa-password', '/dashboard', '/dashboard/profile', '/dashboard/detail-pelamar'];

  return (
    <BrowserRouter>
      {/* {!hideNavbarAndFooterPaths.includes(window.location.pathname) && <Navbar />} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/lupa-password' element={<LupaPassword />} />
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='profile'  element={<Profile />} />
          <Route path='detail-pelamar'  element={<DetailPelamar />} />
        </Route>
        <Route path='tentang-kami' element={<TentangKamiParent />}>
          <Route index element={<TentangKami />} />
          <Route path='visi-dan-misi' element={<VisiMisi />} />
          <Route path='komitment' element={<Komitment />} />
          <Route path='struktur-organisasi' element={<StrukturOrganisasi />} />
        </Route>
        <Route path='layanan-kami' element={<LayananKamiParent />}>
          <Route path='security-centeng' element={<SecurityCenteng />} />
          <Route path='cleaning-service' element={<CleaningService />} />
          <Route path='jawara-parkir' element={<JawaraParkir />} />
          <Route path='getol' element={<Getol />} />
        </Route>
        <Route path='karir' element={<Karir />}>
          <Route path='alur-rekruitment' element={<AlurRekruitment />} />
          <Route path='lowongan-kerja' element={<LowonganKerja />} />
          <Route path='lamar-kerja' element={<LamarKerja />} />
        </Route>
        <Route path='/hubungi-kami' element={<HubungiKami />} />
      </Routes>
      {/* {!hideNavbarAndFooterPaths.includes(window.location.pathname) && <Footer />} */}
    </BrowserRouter>
  )
}

export default App
