import Footer from '../../Component/Footer'
import Navbar from '../../Component/Navbar'
import cleaning1 from '../../assets/cleaning1.png'
import cleaning2 from '../../assets/cleaning2.png'
import cleaning3 from '../../assets/cleaning3.png'
import cleaning4 from '../../assets/cleaning4.png'


const CleaningService = () => {
    return (
        <div className='layanan h-[900px] -z-20'>
            <Navbar />
            <div className='w-full h-fit lg:h-fit flex flex-col justify-start gap-10 items-center space-y-5 py-20 z-20 md:text-white'>
                <h1 className='text-4xl font-bold z-20'>Tentang Kami</h1>
                <div className='w-full flex gap-10 justify-between px-5 lg:px-10 items-start md:flex-row flex-col md:lex-row font-bold z-20 '>
                    <div className='w-full bg-red-100 md:w-1/3 flex justify-center px-10 md:px-0 mb-16 md:mb-0'>
                        <img className='w-full md:w-full ' src={cleaning1} alt="" />
                    </div>
                    <div className='w-[60vw] flex justify-center flex-col space-y-8  '>
                        <p>Kami membentuk jasa layanan kebersihaan dan perawatan gedung dengan nama kinclong
                            fasility service.</p>
                        <div>
                            <li className='list-none'>Jenis Layanan:</li>
                            <ul className='px-5'>
                                <li className='list-disc'>General Cleaning Service</li>
                                <li className='list-disc'>Commercial Cleaning Service</li>
                                <li className='list-disc'>Suplay Menpower & Service</li>
                                <li className='list-disc'>Glass Cleaning & Gondola Service</li>
                                <li className='list-disc'>High Rise</li>
                                <li className='list-disc'>Washroom Service</li>
                                <li className='list-disc'>Home Care</li>
                                <li className='list-disc'>Landscape</li>
                                <li className='list-disc'>Pest control</li>
                                <li className='list-disc'>Waste management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit px-5 md:px-10 flex flex-col justify-start gap-10 items-center space-y-5 py-10 z-20'>
                <h1 className='text-4xl font-bold z-20'>Visi dan Misi</h1>
                <div className='w-full flex items-start font-bold text-black '>
                    <div className='w-full md:px-0 flex  flex-col space-y-8  z-20'>
                        <ul>
                            <p className='font-bold text-2xl'>VISI</p>
                            <li className='list-disc ml-7 w-full lg:w-1/2'>Menjadi perusahaan penyedia jasa perawatan dan pemeliharaan kebersihan terpercaya dan
                                handal.</li>
                        </ul>
                        <div className='w-[80vw]'>
                            <p className='font-bold text-2xl'>MISI</p>
                            <ul className='space-y-2'>
                                <li className='list-disc ml-7 '>Beroperasi sebagai perusahaan penyedia jasa perawatan dan pemeliharaan kebersihan
                                    terkemuka, dengan jaringan yang luas, di dukung oleh tenaga kerja yang terampil, jujur,
                                    berdisiplin tinggi dan bertanggung jawab, serta ditunjang dengan peralatan dan perlengkapan
                                    kerja moderen.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit flex flex-col justify-start gap-10 items-start px-5 space-y-5 pt-10 z-20'>
                <h1 className='text-4xl font-bold'>Sarana Penunjang</h1>
                <div className='flex w-full justify-evenly items-start md:items-center lg:flex-row flex-col-reverse font-bold text-black z-20 '>
                    <div className='w-full px-5 md:px-0 md:w-full flex justify-center flex-col space-y-8  '>
                        <p className='lg:w-[50vw]'>Management profesional PT.Urusan Jaga Banda menawarkan untuk memenuhi kebutuhan
                            pemakai jasa agar lebih dapat memperoleh efisiensi biaya,meningkatkan produktifitas dan
                            mengoptimalkan profit pengguna jasa. Efisiensi dengan system outsourcing, perusahaan anda dapat menghindari eskalasi biaya
                            dalam bentuk kenaikan gaji, pension, pesangon tenaga kerja dan terbantu dalam pengelolaan
                            tenaga kerja. Kami menjadi solusi dalam hal kebutuhan tenaga kerja yang dibutuhkan oleh
                            perusahaan/kantor di berbagai bidang
                            .</p>
                        <div>Beberapa penawaran kami, yaitu :</div>
                        <div className='w-fit h-1/2 grid grid-cols-2 gap-2  '>
                            <div className='space-y-5'>
                                <div>
                                    <li className='list-none'>1. Cleaning:</li>
                                    <ul className='pl-8'>
                                        <li className='list-disc'>Comercial cleaning service</li>
                                        <li className='list-disc'>Hospital cleaning service</li>
                                        <li className='list-disc'>Glass cleaning & gondola Service</li>
                                        <li className='list-disc'>High Rise</li>
                                    </ul>
                                </div>
                                <div>
                                    <li className='list-none'>2 . Home Care :</li>
                                    <ul className='pl-8'>
                                        <li className='list-disc'>General cleaning</li>
                                        <li className='list-disc'>Glass cleaning </li>
                                        <li className='list-disc'>Restorasi lantai</li>
                                        <li className='list-disc'>Wash & Dry</li>
                                        <li className='list-disc'>Electrial</li>
                                        <li className='list-disc'>Kontruksi</li>
                                    </ul>
                                </div>
                                <div>
                                    <li className='list-none'>3. Office Support :</li>
                                    <ul className='pl-8'>
                                        <li className='list-disc'>Receptionist</li>
                                        <li className='list-disc'>Messenger</li>
                                        <li className='list-disc'>Office Boy/girl</li>
                                        <li className='list-disc'>Handyman</li>
                                        <li className='list-disc'>Telephone opertaor</li>
                                        <li className='list-disc'>Car call</li>
                                        <li className='list-disc'>Driver</li>
                                        <li className='list-disc'>Technician</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='space-y-5'>
                                <div>
                                    <li className='list-none'>4. Gardening :</li>
                                    <ul className='pl-8'>
                                        <li className='list-disc'>Penyiraman</li>
                                        <li className='list-disc'>Penyiangan</li>
                                        <li className='list-disc'>Pendaringan</li>
                                        <li className='list-disc'>Pemupukan</li>
                                        <li className='list-disc'>Pemangkasan</li>
                                    </ul>
                                </div>
                                <div>
                                    <li className='list-none'>5. Waste Management :</li>
                                    <ul className='pl-8'>
                                        <li className='list-disc'>Pengangkutan</li>
                                        <li className='list-disc'>Pengumpulan</li>
                                        <li className='list-disc'>Pemilihan</li>
                                        <li className='list-disc'>Daur Ulang</li>
                                        <li className='list-disc'>Pemusnahan Arsip/Kertas</li>
                                    </ul>
                                </div>
                                <div>
                                    <li className='list-none'>4. Pest Control :</li>
                                    <ul className='pl-8'>
                                        <li className='list-disc'>Pengendalian serangga terbang</li>
                                        <li className='list-disc'>Pengendalian serangga merayap</li>
                                        <li className='list-disc'>Pengendalian hama tikus</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-fit h-fit md:w-1/2 grid grid-cols-2 justify-start items-center px-10 md:px-0 gap-3 mb-10 md:mb-0'>
                        <img className='w-32 md:w-full rounded-lg' src={cleaning2} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={cleaning1} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={cleaning3} alt="" />
                        <img className='w-32 md:w-full rounded-lg' src={cleaning4} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full h-fit lg:h-fit px-5 md:px-10 flex flex-col justify-start gap-10 items-center space-y-5 py-10'>
                <h1 className='text-4xl font-bold'>Quality Management System</h1>
                <div className='w-full flex items-start font-bold text-black '>
                    <div className='w-full md:px-0 flex  flex-col space-y-8  '>
                        <div>
                            <li className='list-none'>Beberapa alur dalam quality management system :</li>
                            <ul className='pl-8'>
                                <li className='list-disc'>Crew yang d tempatkan di area siap kerja karena telah melalui pelatihan dengan sylabus yg up to date sesuai kondisi dengan project klien .</li>
                                <li className='list-disc'>Crew akan mempunyai Standard Groming yang telah di terapkan.</li>
                                <li className='list-disc'>Pengawasaan akan di lakukan oleh para manager yang telah berpengalaman mengenai facility service.</li>
                                <li className='list-disc'>Chemichal, consumable, equipment akan di suplay sesuai Standard dan persetujuan clien.</li>
                                <li className='list-disc'>Design program kerja akan di ajukan secara berkala kepada klien dan akan di lakukan setelah approval. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CleaningService