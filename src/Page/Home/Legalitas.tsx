import React from 'react'
import Iso1 from '../../assets/iso1.svg'
import Iso2 from '../../assets/iso2.svg'
import Iso3 from '../../assets/iso3.svg'
import Iso4 from '../../assets/iso4.svg'
import bkpn from '../../assets/bkpn.svg'

const Legalitas = () => {
    return (
        <div className='w-full h-fit flex flex-col lg:flex-row flex-wrap px-20 py-20 space-y-5'>
            <div className='h-full w-full lg:w-1/2 '>
                <div className='font-bold text-5xl lg:w-full mb-10 space-y-5 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                    <p>Legalitas</p>
                    <p>Perusahaan</p>
                </div>
                <p className='text-xl w-full font-bold text-[#698E94]'>Kami Mempunyai Legaslitas perusahaan yang sudah diakui</p>
            </div>
            <div className='h-full w-full lg:w-1/2 flex flex-wrap justify-center gap-3  '>
                <img className='w-36 h-48' src={Iso4} alt="" />
                <img className='w-36 h-48' src={Iso1} alt="" />
                <img className='w-36 h-48' src={Iso2} alt="" />
                <img className='w-56 h-48' src={Iso3} alt="" />
                <img className='w-36 h-48' src={bkpn} alt="" />
            </div>
        </div>
    )
}

export default Legalitas