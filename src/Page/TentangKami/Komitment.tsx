import city from '../../assets/city.svg'


const Komitment = () => {
    return (
        <div className='w-full h-fit lg:h-screen flex flex-col justify-start gap-10 items-center py-20 space-y-5 pt-10'>
            <h1 className='text-5xl font-extrabold text-center'>Komitment Kami</h1>
            <div className='flex justify-evenly items-center md:flex-row flex-col-reverse md:lex-row font-bold h-1/2 text-[#698E94] '>
                <div className='w-full px-5 md:px-0 md:w-1/2 flex justify-center flex-col space-y-8  '>
                    <p className='w-[80%]'>PT. URUSAN JAGA BANDA (UJB), Bertekad untuk menjadi Perusahaan Jasa yang berkualitas,
                        Profesional dan dapat dipercaya dibidang Jasa Pengamanan, Jasa Kebersihan, Jasa Layanan Parkir
                        serta Penyedia Jasa Tenaga Kerja bagi seluruh Mayarakat Indonesia. </p>
                </div>
                <div className='w-fit h-fit md:w-1/6 grid grid-cols-2 justify-start items-center px-10 md:px-0 gap-3 mb-10 md:mb-0'>
                    {/* <div className='relative w-72 lg:w-full rounded-lg top-10 lg:top-28 h-36 lg:h-52 bg-[#4FA6D133]'></div> */}
                    <img className='w-32 rounded-lg' src={city} alt="" />
                    <img className='w-32 rounded-lg' src={city} alt="" />
                    <img className='w-32 rounded-lg' src={city} alt="" />
                    <img className='w-32 rounded-lg' src={city} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Komitment