
import Breadcrumb from '../../Component/Breadcrumbs';
import { BsDownload } from "react-icons/bs";



const DetailPelamar = () => {
    const breadcrumb = [
        {
            label: 'Dashboard',
            path: '/dashboard'
        },
        {
            label: 'Detail Pelamar',
            path: '/dashboard/detail-pelamar'
        }
    ];

    return (
        <div className='py-10 space-y-4 px-3'>
            <div className='w-full flex flex-row justify-between'>
                <h1 className='text-xl font-extrabold'>Detail Pelamar</h1>
                <Breadcrumb breadcrumbs={breadcrumb} />
            </div>
            <h3 className='flex items-center gap-3'>Download List Detail <BsDownload className='text-black border-2 rounded-sm   border-blue-500 w-7 h-7 p-1.5' /></h3>
            <div className='grid grid-cols-2 w-[80%] gap-5'>
                <div>
                    <p className="py-1">Posisi</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                </div>
                <div >
                    <p className="py-1">Posisi</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                </div>
                <div >
                    <p className="py-1">Posisi</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                </div>
                <div >
                    <p className="py-1">Posisi</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                </div>
                <div >
                    <p className="py-1">Posisi</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                </div>
                <div >
                    <p className="py-1">Posisi</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
                </div>
            </div>
            <div className='w-[80%]'>
                <p className="py-1">Alamat</p>
                <textarea placeholder="Type here" className="w-full max-h-32 h-28" />
            </div>

        </div>
    )
}

export default DetailPelamar