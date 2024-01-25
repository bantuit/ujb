import city from '../../assets/city.svg'


const SecurityCenteng = () => {
    return (
        <div>
            <div className='w-full h-fit lg:h-fit flex flex-col justify-start gap-10 items-center space-y-5 py-20'>
                <h1 className='text-4xl font-extrabold'>Tentang Kami</h1>
                <div className='w-full  flex justify-between px-5 lg:px-10 items-start md:flex-row flex-col-reverse md:lex-row font-bold text-[#698E94] '>
                    <div className='w-full md:w-1/2 flex justify-center flex-col space-y-8  '>
                        <p>Jasa Keamanan dengan nama “CENTENG”, sampai saat ini usaha Jasa Pengamanan menjadikan
                            project utama di Sektor  usaha Bisnis PT. Urusan jaga Banda. </p>
                        <div>
                            <li className='list-none'>Jenis Layanan:</li>
                            <ul className='px-5'>
                                <li className='list-disc'>Jasa Penyedia Tenaga Keamanan</li>
                                <li className='list-disc'>Aktivitas Kebersihan Umum & Bangunan</li>
                                <li className='list-disc'>Aktivitas Perparkiran (On Street & Off Street)</li>
                                <li className='list-disc'>Aktivitas Penyediaan Sumber Daya Manusia</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 flex justify-center px-10 md:px-0 mb-16 md:mb-0'>
                        <div className='relative w-72 lg:w-full rounded-lg top-10 lg:top-28 h-36 lg:h-52 bg-[#4FA6D133]'></div>
                        <img className='absolute w-1/2 md:w-1/4 ' src={city} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit px-20 md:px-10 flex flex-col justify-start gap-10 items-center space-y-5 py-10'>
                <h1 className='text-4xl font-extrabold'>Visi dan Misi</h1>
                <div className='flex items-start font-bold text-[#698E94] '>
                    <div className='w-full md:px-0 flex  flex-col space-y-8  '>
                        <ul>
                            <p className='font-bold text-2xl'>VISI</p>
                            <li className='list-disc ml-7 w-full lg:w-1/2'>Menjadikan Perusahaan Jasa Keamanan yang Profesional dan dapat di percaya serta
                                mengedepankan kejujuran, pelayanan, yang maksimal demi kelancaraan bersama.
                                Misi </li>
                        </ul>
                        <div className='w-[80vw]'>
                            <p className='font-bold text-2xl'>MISI</p>
                            <ul className='space-y-2'>
                                <li className='list-disc ml-7 '>Membina tenaga kerja yang profesional</li>
                                <li className='list-disc ml-7 '>Menjalin kerjasama serta kemitraan yang luas untuk membangun system pelayanan yang baik </li>
                                <li className='list-disc ml-7 '> Menjujung tinggi persaudaraan dan kejujuran dalam menkjalankan peraturan. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit flex flex-col justify-start gap-10 items-start px-5 space-y-5 pt-10'>
                <h1 className='text-4xl font-extrabold'>Sarana Penunjang</h1>
                <div className='flex w-full justify-evenly items-start md:items-center lg:flex-row flex-col-reverse font-bold text-[#698E94]   '>
                    <div className='w-full px-5 md:px-0 md:w-full flex justify-center flex-col space-y-8  '>
                        <p className='lg:w-[50vw]'>PT. Urusan Jaga Banda adalah salah satu perusahaan yang bergerak dibidang pelayanan jasa, dan sedang berkembang pesat
                            dalam melayani kebutuhan jasa di seluruh Indonesia.</p>
                        <p className='lg:w-[50vw]'>Perusahaan yang berdiri pada tanggal 01 Desember 2020 didukung dengan  sarana fasilitas lengkap serta sistem teknologi yang menyesuaikan dengan kebutuhan pengguna jasa.</p>
                        <p>Sampai dengan saat ini PT. UJB menjalankan 4 (Empat) Bidang jasa, diantaranya :</p>
                        <ul>
                            <li>1. Jasa Penyedia Tenaga Keamanan</li>
                            <li>2. Aktivitas Kebersihan Umum & Bangunan</li>
                            <li>3. Aktivitas Perparkiran (On Street & Off Street)</li>
                            <li>4. Aktivitas Penyediaan Sumber Daya Manusia</li>
                        </ul>
                    </div>
                    <div className='w-fit h-fit md:w-1/2 grid grid-cols-2 justify-start items-center px-10 md:px-0 gap-3 mb-10 md:mb-0'>
                        <img className='w-32 md:w-full rounded-lg' src={city} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={city} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={city} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={city} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityCenteng