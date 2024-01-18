import React from 'react'
import logo from '../../assets/logo-svg.svg'

const TentangKami = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-start gap-10 items-center'>
            <h1 className='text-4xl font-extrabold'>Tentang Kami</h1>
            <div className='flex justify-center items-center px-10'>
                <div className='w-1/2 '>
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
                <div className='w-1/2'>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TentangKami