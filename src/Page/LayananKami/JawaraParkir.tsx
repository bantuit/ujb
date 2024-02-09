import parkir1 from '../../assets/parkir1.png'
import parkir2 from '../../assets/parkir2.png'
import img1 from '../../assets/img1.png'
import parkir3 from '../../assets/parkir3.png'


const JawaraParkir = () => {
    return (
        <div>
            <div className='w-full h-fit lg:h-fit flex flex-col justify-start gap-10 items-center space-y-5 py-20 md:text-white'>
                <h1 className='text-4xl font-extrabold z-20'>Tentang Kami</h1>
                <div className='w-full  flex justify-between px-5 lg:px-10 items-start md:flex-row flex-col md:lex-row font-bold z-20'>
                    <div className='w-full md:w-1/3 flex justify-center px-10 md:px-0 mb-16 md:mb-0'>
                        <img className=' w-full md:w-full ' src={parkir1} alt="" />
                    </div>
                    <div className='w-full md:w-[60vw] flex justify-center flex-col space-y-8  '>
                        <p>Jawara parkir adalah perusahaan swasta nasional yang bergerak di bidang Suplier dan Jasa. Seiring dengan pengembangan pembangunan di indonesia khususnya  di kota kota besar.</p>
                        <p>JAWARA PARKIR juga mengembangan perusahaan dengan membentuk divisi divisi dalam
                            menyiasati dunia bisnis yang semakin kompetitif.</p>
                        <p>Dalam mewujudkan visi dan misi perusahaan, kami jawara parkir selalu berusaha berperan
                            aktif dan memberikan kontribusi maksimal dalam memberikan pelayanan secara profesional
                            untuk mewujudkan harapan pihak Management Building.</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit px-5 md:px-10 flex flex-col justify-start gap-10 items-center space-y-5 py-10'>
                <h1 className='text-4xl font-extrabold z-20'>Visi dan Misi</h1>
                <div className='w-full flex items-start font-bold text-black '>
                    <div className='w-full md:px-0 flex  flex-col space-y-8 z-20 '>
                        <ul>
                            <p className='font-bold text-2xl'>VISI</p>
                            <li className='list-disc ml-7 w-full lg:w-1/2'>Menjadikan Perusahaan Jasa Keamanan yang Profesional dan dapat di percaya serta
                                mengedepankan kejujuran, pelayanan, yang maksimal demi kelancaraan bersama.
                            </li>
                        </ul>
                        <div className='w-[80vw]'>
                            <p className='font-bold text-2xl'>MISI</p>
                            <ul className='space-y-2'>
                                <li className='list-disc ml-7 '>Membina tenaga kerja yang profesional</li>
                                <li className='list-disc ml-7 '>Menjalin kerjasama serta kemitraan yang luas untuk membangun system pelayanan yang baik </li>
                                <li className='list-disc ml-7 '>Menjujung tinggi persaudaraan dan kejujuran dalam menkjalankan peraturan. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit flex flex-col justify-start gap-10 items-start px-5 space-y-5 pt-10'>
                <h1 className='text-4xl font-extrabold z-20'>Pelayanan</h1>
                <div className='flex w-full justify-evenly items-start md:items-center lg:flex-row flex-col-reverse font-bold text-black z-20'>
                    <div className='w-full px-5 md:px-0 md:w-full flex justify-center flex-col space-y-8  '>
                        <div className='w-fit h-1/2 space-y-5  '>
                            <div>
                                <li className='list-none'>Pelayanan yang kami berikan kepada management property. Beberapa pelayanan yang kami tawarkan, yaitu :</li>
                                <ul className='pl-8'>
                                    <li className='list-disc'>Management perparkiran ( Standar Operation Prosedure)</li>
                                    <li className='list-disc'>Design dan Landscape lahan parkir</li>
                                    <li className='list-disc'>Sumber Daya Manusia (Penyediaan dan Pelatihan)</li>
                                    <li className='list-disc'>Pengadaan Perangkat Keras & Lunak serta alat penunjang lainya untuk sistem perparkiran. </li>
                                </ul>
                            </div>
                            <div>
                                <li className='list-none'>Kepada pengguna dan Pemakai Jasa Parkir yang kami berikan adalah :</li>
                                <ul className='pl-8'>
                                    <li className='list-disc'>Lokasi parkir yang aman, tertib dan nyaman</li>
                                    <li className='list-disc'>Traffic Flow Parking yang praktis</li>
                                    <li className='list-disc'>Operasional Parkir yang lancar dan Sistematis</li>
                                </ul>
                            </div>
                            <div>
                                <li className='list-none'>Solusi terbaik yang kami tawarkan dalam pengelolaan perparkiran adalah sebagai berikut :</li>
                                <ul className='pl-8'>
                                    <li className='list-disc'>Management pembiayaan yang efisien dan menguntungkan</li>
                                    <li className='list-disc'>Peningkatan atas nilai dari property secara keseluruhaan </li>
                                    <li className='list-disc'>Performance lokasi yang maksimal serta operasional lokasi yang sistematis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-fit h-fit md:w-1/2 grid grid-cols-2 justify-start items-center px-10 md:px-0 gap-3 mb-10 md:mb-0'>
                        <img className='w-32 md:w-full rounded-lg' src={parkir2} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={parkir3} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={img1} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={img1} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit px-5 md:px-10 flex flex-col justify-start gap-10 items-center space-y-5 py-10'>
                <h1 className='text-4xl font-extrabold z-20'>Bentuk Kerjasama</h1>
                <div className='w-full flex items-start font-bold text-black '>
                    <div className='w-full md:px-0 flex  flex-col space-y-8  '>
                        <div>
                            <li className='list-none'>Beberapa bentuk kerjasama yang sudah berlangsung pada perusahaan kami, antara lain :</li>
                            <ul className='pl-8'>
                                <li className='list-disc'>Profit sharing
                                    Sistem bagi hasil yang di dapat dari pendapatan bersih  setelah di kurangi biaya karywan.</li>
                                <li className='list-disc'>Fixed income Guarante
                                    Jaminan pendapatan yang di berikan kepada manajemen property garansi akan di
                                    perhitungkan berdasarkan analisa
                                    yang spesifik dari potensi dan produktifitas lahan park.</li>
                                <li className='list-disc'>Technical Assistance
                                    Jawara parkir sebagai konsultan bagi property dengan memberikan masukan operasional
                                    perparkiran secara
                                    menyuluruh yang meliputi penyediaan perangkat lunak dan memberikan
                                    pelatihan kepada petugas/operator, maintance
                                    dan pengembangan program atau sistem, supervisi operasional serta pengauditan data dan operasional secara
                                    keseluruhan di serahkan kepada
                                    property.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit px-5 md:px-10 flex flex-col justify-start gap-10 items-center space-y-5 py-10'>
                <h1 className='text-4xl font-extrabold z-20'>Jawara Parkir Solution</h1>
                <div className='w-full flex items-start font-bold text-black z-20'>
                    <div className='w-full md:px-0 flex  flex-col space-y-8  '>
                        <div>
                            <li className='list-none'>Kami memberikan jangka waktu jawara parkir solution, yaitu : </li>
                            <ul className='pl-8'>
                                <li className='list-disc'>Jangka waktu kerjasama ini akan dimulai dengan 120 bulan dan akan di perpanjang selama
                                    120 bulan berikutnya berdasarkan kinerja.</li>
                                <li className='list-disc'>awara parkir tercipta karena kami memegang suatu filosofi utama bahwa lokasi parkir
                                </li>
                                <li className='list-disc'>merupakan hal yang pertama dan terakhir yang akan di lihat dan di rasakan oleh para</li>
                                <li className='list-disc'>pengunjung</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JawaraParkir