import Navbar from '../../Component/Navbar'
import city from '../../assets/tentangKamiImg.png'

const TentangKami = () => {
    return (
        <div className='tentang-kami'>
              <Navbar />
            <div className='w-full mb-44 h-screen lg:h-screen flex flex-col justify-start gap-10 items-center space-y-5 pb-4 pt-10 px-5 '>
                <h1 className='text-5xl font-bold z-20 lg:text-white'>Tentang Kami</h1>
                <div className='flex justify-between items-start md:flex-row flex-col md:lex-row font-bold text-black z-20'>
                    <div className='w-full md:w-1/3 flex justify-center px-10 md:px-0 mb-16 md:mb-0'>
                        <img className=' w-1/2 md:w-[80%] ' src={city} alt="" />
                    </div>
                    <div className='w-full px-5 md:px-0 md:w-[60%] flex justify-center flex-col space-y-6 lg:text-white  '>
                        <p>PT. Urusan Jaga Banda adalah salah satu perusahaan yang bergerak dibidang pelayanan jasa, dan sedang berkembang pesat dalam melayani kebutuhan jasa di seluruh Indonesia.</p>
                        <p>Perusahaan yang berdiri pada tanggal 01 Desember 2020 didukung dengan  sarana fasilitas lengkap serta sistem teknologi yang menyesuaikan dengan kebutuhan pengguna jasa.</p>
                        <p>Sampai dengan saat ini PT. UJB menjalankan 4 (Empat) Bidang jasa, diantaranya :</p>
                        <ul>
                            <li>1. Jasa Penyedia Tenaga Keamanan</li>
                            <li>2. Aktivitas Kebersihan Umum & Bangunan</li>
                            <li>3. Aktivitas Perparkiran (On Street & Off Street)</li>
                            <li>4. Aktivitas Penyediaan Sumber Daya Manusia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TentangKami