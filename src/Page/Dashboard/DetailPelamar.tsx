import { useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Component/Breadcrumbs';
import { useEffect } from 'react';

const DetailPelamar = () => {
    const location = useLocation();
    const { item } = location.state;
    const navigate = useNavigate()
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

    useEffect(() => {
        if(item == null){
            navigate('/dashboard');
        }
    },[])

    return (
        <div className='py-10 space-y-4 px-3'>
            <div className='w-full flex flex-row justify-between'>
                <h1 className='text-xl font-bold'>Detail Pelamar</h1>
                <Breadcrumb breadcrumbs={breadcrumb} />
            </div>
            <div className='grid grid-cols-2 w-[100%] lg:w-[80%] gap-5'>
                <div>
                    <p className="py-1">Nama Lengkap</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.nama_lengkap}</div>
                </div>
                <div>
                    <p className="py-1">Nama Panggilam</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.nama_panggilan}</div>
                </div>
                <div>
                    <p className="py-1">Tempat Lahir</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.tempat_lahir}</div>
                </div>
                <div>
                    <p className="py-1">Tanggal Lahir</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.tgl_lahir}</div>
                </div>
                <div>
                    <p className="py-1">Agama</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.agama}</div>
                </div>
                <div>
                    <p className="py-1">Jenis Kelamin</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.jenis_kelamin}</div>
                </div>
                <div>
                    <p className="py-1">Pendidikan Terakhir</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.pendidikan_terakhir}</div>
                </div>
                <div>
                    <p className="py-1">Status Pernikahan</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.status_pernikahan}</div>
                </div>
                <div>
                    <p className="py-1">Nomer Telepon</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.no_telpon}</div>
                </div>
                <div>
                    <p className="py-1">Nomer KTP</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.no_ktp}</div>
                </div>
                <div>
                    <p className="py-1">Nomer NPWP</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.no_npwp}</div>
                </div>
                <div>
                    <p className="py-1">Nomer KTA</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.no_kta}</div>
                </div>
                <div>
                    <p className="py-1">Tinggi Badan</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.tinggi_badan}</div>
                </div>
                <div>
                    <p className="py-1">Berat Badan</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.berat_badan}</div>
                </div>
                <div>
                    <p className="py-1">Ukuran Baju</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.ukuran_baju}</div>
                </div>
                <div>
                    <p className="py-1">Ukuran Celana</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.ukuran_celana}</div>
                </div>
                <div>
                    <p className="py-1">Ukuran Sepatu</p>
                    <div className='w-full h-8 px-3 py-1 rounded-md bg-white'>{item.ukuran_sepatu}</div>
                </div>
                
            </div>
            <div className='w-[80%]'>
                <p className="py-1">Alamat Tinggal</p>
                <div className='w-full max-h-32 h-28 bg-white rounded-md p-3'>{item.alamat}</div>
            </div>

        </div>
    )
}

export default DetailPelamar