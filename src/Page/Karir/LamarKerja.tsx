import React from 'react'
import Breadcrumb from '../../Component/Breadcrumbs';
import { FiFilePlus } from "react-icons/fi";

const LamarKerja = () => {
    const breadcrumb = [
        {
            label: 'Lowongan Kerja',
            path: '/karir/lowongan-kerja'
        },
        {
            label: 'lamar Kerja',
            path: '/karir/lamar-kerja'
        }
    ];
    return (
        <div>
            <Breadcrumb breadcrumbs={breadcrumb} />
            <div className='h-fit flex flex-col justify-start pt-10 items-center gap-5 px-5 lg:px-0 '>
                <h1 className='text-4xl font-extrabold text-center'>Formulir Lamaran Kerja</h1>
                <div className='flex flex-col items-center '>
                    <p className='lg:w-[60vw] text-center'>Silahkan lengkapi persyaratan dan isi formulir dengan benar dan sesuai. Pastikan data yang tersisi  sudah  lengkap dan benar sebelum mengirim data tersebut. </p>
                    <div className='w-full space-y-5 mt-10'>
                        <h2 className='text-2xl font-extrabold'>Biodata lengkap</h2>
                        <div className='w-full flex flex-col gap-5 '>
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className='w-full flex flex-col'>
                                    <label>Nama Lengkap</label>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                                </div>
                                <div className='flex flex-col'>
                                    <label>tempat Lahir</label>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Tanggal Lahir</label>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Status</label>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full " />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label>Status</label>
                                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full " ></textarea>
                            </div>
                            <div className='w-full h-52 bg-[#F9F9FC] flex flex-col justify-center items-center gap-3 px-5 '>
                                <div className='bg-[#DADADC] w-10 h-10 flex justify-center items-center rounded-full text-2xl'><FiFilePlus className='text-[#269ED8]'/></div>
                                <p className='md:w-1/2 text-center'>Drag and drop image here, or click add Document, Format PDF (CV, Ijazah, Transkip, dsb)</p>
                                <button className="btn btn-xs bg-[#DADADC] text-[#269ED8] sm:btn-base md:btn-sm lg:btn-md">Add Document</button>
                            </div>
                            <div className='w-full flex flex-row justify-end gap-5'>
                            <button className="btn btn-outline btn-info btn-sm">Cancel</button>
                            <button className="btn btn-info btn-sm text-white">Kirim</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LamarKerja