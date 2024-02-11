import security2 from '../../assets/securityImg2.png'
import cleaning1 from '../../assets/cleaning1.png'
import parkir from '../../assets/parkir1.png'
import img2 from '../../assets/img2.png'
import Navbar from '../../Component/Navbar'


const Komitment = () => {
    return (
        <div className='visi-misi'>
            <Navbar />
            <div className='w-full mb-44 h-scren lg:h-screen flex flex-col justify-start gap-10 items-center py-20 space-y-5  text-black '>
                <h1 className='text-5xl font-bold text-center z-20 lg:text-white'>Komitment Kami</h1>
                <div className='flex justify-evenly items-center md:flex-row flex-col-reverse md:lex-row font-bold h-1/2 z-20 lg:text-white '>
                    <div className='w-full px-5 md:px-0 md:w-1/2 flex justify-center flex-col space-y-8  '>
                        <p className='w-[90%] text-lg '>PT. URUSAN JAGA BANDA (UJB), Bertekad untuk menjadi Perusahaan Jasa yang berkualitas,
                            Profesional dan dapat dipercaya dibidang Jasa Pengamanan, Jasa Kebersihan, Jasa Layanan Parkir
                            serta Penyedia Jasa Tenaga Kerja bagi seluruh Mayarakat Indonesia. </p>
                    </div>
                    <div className='w-fit h-fit md:w-1/5 grid grid-cols-2 justify-start items-center px-10 md:px-0 gap-2 mb-10 md:mb-0'>
                        <img className='w-42 rounded-lg' src={security2} alt="" />
                        <img className='w-42 rounded-lg' src={cleaning1} alt="" />
                        <img className='w-42 rounded-lg' src={parkir} alt="" />
                        <img className='w-42 rounded-lg' src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Komitment