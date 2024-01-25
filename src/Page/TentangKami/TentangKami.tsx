import city from '../../assets/city.svg'

const TentangKami = () => {
    return (
        <div className='w-full h-fit lg:h-screen flex flex-col justify-start gap-10 items-center space-y-5 pt-10'>
            <h1 className='text-5xl font-extrabold'>Tentang Kami</h1>
            <div className='flex justify-evenly items-start md:flex-row flex-col-reverse md:lex-row font-bold text-[#698E94] '>
                <div className='w-full px-5 md:px-0 md:w-1/2 flex justify-center flex-col space-y-8  '>
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
                <div className='w-full md:w-1/3 flex justify-center px-10 md:px-0 mb-16 md:mb-0'>
                    <div className='relative w-72 lg:w-full rounded-lg top-10 lg:top-28 h-36 lg:h-52 bg-[#4FA6D133]'></div>
                    <img className='absolute w-1/2 md:w-1/4 ' src={city} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TentangKami