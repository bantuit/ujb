import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const LowonganKerja = () => {
  const navigaet = useNavigate()
  return (
    <div className='h-fit flex flex-col justify-start pt-10 items-center gap-10    '>
      <h1 className='text-4xl font-extrabold '>Lowongan Kerja</h1>
      <div className='flex flex-row flex-wrap gap-5 justify-center md:justify-start md:px-10'>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body flex items-center ">
            <h2 className="card-title text-center ">Security</h2>
            <div>
              <p>Kualifikasi:</p>
              <p className='text-sm'>1. Pendidikan Minimal SLTA</p>
              <p className='text-sm'>2. Usia Minimal 20 Tahun, Maksimal 35 Tahun</p>
              <p className='text-sm'>3. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>4. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>5. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>6. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>7. Mengikuti tes rekrutmen security</p>
            </div>
            <div className="card-actions justify-end mt-10">
              <button className="btn btn-outline btn-info" onClick={() => navigaet('/karir/lamar-kerja')}>Lamar Sekarang <IoIosArrowRoundForward /></button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body flex items-center ">
            <h2 className="card-title text-center ">Security</h2>
            <div>
              <p>Kualifikasi:</p>
              <p className='text-sm'>1. Pendidikan Minimal SLTA</p>
              <p className='text-sm'>2. Usia Minimal 20 Tahun, Maksimal 35 Tahun</p>
              <p className='text-sm'>3. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>4. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>5. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>6. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>7. Mengikuti tes rekrutmen security</p>
            </div>
            <div className="card-actions justify-end mt-10">
              <button className="btn btn-outline btn-info">Lamar Sekarang <IoIosArrowRoundForward /></button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body flex items-center ">
            <h2 className="card-title text-center ">Security</h2>
            <div>
              <p>Kualifikasi:</p>
              <p className='text-sm'>1. Pendidikan Minimal SLTA</p>
              <p className='text-sm'>2. Usia Minimal 20 Tahun, Maksimal 35 Tahun</p>
              <p className='text-sm'>3. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>4. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>5. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>6. Mengikuti tes rekrutmen security</p>
              <p className='text-sm'>7. Mengikuti tes rekrutmen security</p>
            </div>
            <div className="card-actions justify-end mt-10">
              <button className="btn btn-outline btn-info">Lamar Sekarang <IoIosArrowRoundForward /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LowonganKerja