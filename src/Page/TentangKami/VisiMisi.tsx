import Navbar from "../../Component/Navbar"

const VisiMisi = () => {
  return (
    <div className="visi-misi">
      <Navbar />
      <div className='w-full h-screen mb-44 px-10 flex flex-col justify-start gap-10 items-center space-y-5 pt-10 z-20'>
        <h1 className='text-5xl font-bold z-20 lg:text-white'>Visi dan Misi Perusahaan</h1>
        <div className='flex items-start font-bold text-black z-20 '>
          <div className='w-full md:px-0 flex  flex-col space-y-8 lg:text-white '>
            <ul>
              <p className='font-bold text-2xl'>VISI</p>
              <li className='list-disc ml-7 w-full lg:w-1/2'>PT. Urusan Jaga Banda adalah salah satu perusahaan yang bergerak dibidang pelayanan jasa, dan sedang berkembang pesat dalam melayani kebutuhan jasa di seluruh Indonesia.</li>
            </ul>
            <div className='w-[80vw]'>
              <p className='font-bold text-2xl'>MISI</p>
              <ul className='space-y-5'>
                <li className='list-disc ml-7 '>Membangun tenaga terampil yang profesional serta berkualitas</li>
                <li className='list-disc ml-7 '>Menjalin kerja sama kemitraan dan memberikan sistem layanan yang dapat memberikan dan
                  mewujudkan kepercayaan dengan lembaga instansi, institusi perusahaan atau perorangan yang
                  menggunkan jasa pelayanan PT. Urusan Jaga Banda. </li>
                <li className='list-disc ml-7 '>Menjalin kerja sama kemitraan dan memberikan sistem layanan yang dapat memberikan dan
                  mewujudkan kepercayaan dengan lembaga instansi, institusi perusahaan atau perorangan yang
                  menggunkan jasa pelayanan PT. Urusan Jaga Banda. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisiMisi