import React from 'react'
import logo from '../../assets/logo-svg.svg'

const LupaPassword = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="card lg:w-1/4 h-auto  bg-base-100 md:shadow-xl md:border-t-2 md:border-[#006FC0]  ">
                <div className="w-full card-body flex flex-col items-center space-y-4">
                    <img className="w-auto h-20" src={logo} alt="" />
                    <h2 className="card-title text-base text-center">Lupa Password ?</h2>
                    <p className='text-center text-sm'>Masukkan alamat email dan kami akan mengirimkan email untuk menyetel ulang kata sandi Anda.</p>
                    <div className='w-64 flex flex-col'>
                        <label>Email</label>
                        <input type="text" placeholder="Masukan Email Anda  " className="input input-bordered input-sm w-full " />
                    </div>
                    <button className="w-64 btn btn-sm bg-[#12AE57] text-white btn-success">Kirim Pengaturan Ulang</button>
                </div>
            </div>
        </div>
    )
}

export default LupaPassword