import { useState } from 'react';
import Breadcrumb from '../../Component/Breadcrumbs';
import { FiFilePlus } from "react-icons/fi";

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

const formInput = [
    {
        label: 'Nama Lengkap',
        name: 'namalengkap',

    },
    {
        label: 'Nama Panggilan',
        name: 'namapanggilan',
    },
    {
        label: 'Tempat Lahir',
        name: 'tempatlahir',
    },
    {
        label: 'Tanggal Lahir',
        name: 'tanggallahir',
    },
    {
        label: 'Agama',
        name: 'agama',
    },
    {
        label: 'Jenis Kelamin',
        name: 'jeniskelamin',
    },
    {
        label: 'Pendidikan Terakhir',
        name: 'pendidikanterakhir',
    },
    {
        label: 'Status Pernikahan',
        name: 'statuspernikahan',
    },
    {
        label: 'Nomer Telepon ',
        name: 'nomertelepon',
    },
    {
        label: 'Nomer KTP',
        name: 'nomerktp',
    },
    {
        label: 'Nomer NPWP',
        name: 'nomernpwp',
    },
    {
        label: 'Nomer KTA',
        name: 'nomerkta',
    },
    {
        label: 'Tinggi Badan',
        name: 'tinggibadan',
    },
    {
        label: 'Berat Badan',
        name: 'beratbadan',
    },
    {
        label: 'Ukuran Baju',
        name: 'ukuranbaju',
    },
    {
        label: 'Ukuran Celana',
        name: 'ukurancelana',
    },
    {
        label: 'Ukuran Septu',
        name: 'ukuransepatu',
    },
]



const LamarKerja = () => {
    const initialFormData: { [key: string]: string } = {};
    formInput.forEach(input => {
      initialFormData[input.name] = ''; // Inisialisasi setiap nilai dengan string kosong
    });
  
    const [formData, setFormData] = useState(initialFormData);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // Lakukan sesuatu dengan formData, misalnya kirim ke server
    };
    return (
        <div>
            <Breadcrumb breadcrumbs={breadcrumb} />
            <div className='h-fit flex flex-col justify-start pt-10 items-center gap-5 px-5 lg:px-0 z-20'>
                <h1 className='text-4xl font-extrabold text-center z-20'>Formulir Lamaran Kerja</h1>
                <div className='flex flex-col items-center z-20'>
                    <p className='lg:w-[60vw] text-center'>Silahkan lengkapi persyaratan dan isi formulir dengan benar dan sesuai. Pastikan data yang tersisi  sudah  lengkap dan benar sebelum mengirim data tersebut. </p>
                    <div className='w-full space-y-5 mt-10'>
                        <h2 className='text-2xl font-extrabold'>Biodata lengkap</h2>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 p-5 h-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 '>
                            <div className='grid md:grid-cols-2 gap-5'>
                                {formInput.map((item, index) => {
                                    return (
                                        <label key={index} className='w-full flex flex-col'>
                                            {item.label}
                                            <input
                                                type="text"
                                                name={item.name}
                                                required
                                                placeholder="Nama Lengkap"
                                                className="input input-bordered input-sm w-full"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    )
                                })}
                                <label className='w-full flex flex-col'>
                                    nama
                                    <input
                                        type="text"
                                        name='nama'
                                        required
                                        placeholder="Nama Lengkap"
                                        className="input input-bordered input-sm w-full"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>

                            <div className='flex flex-col'>
                                <label>Alamat Tinggal</label>
                                <textarea placeholder="Alamat Tinggal" className="textarea textarea-bordered textarea-sm w-full " ></textarea>
                            </div>
                            <div className='w-full h-52 bg-[#F9F9FC] flex flex-col justify-center items-center gap-3 px-5 '>
                                <div className='bg-[#DADADC] w-10 h-10 flex justify-center items-center rounded-full text-2xl'><FiFilePlus className='text-[#269ED8]' /></div>
                                <p className='md:w-1/2 text-center'>Drag and drop image here, or click add Document, Format PDF (CV, Ijazah, Transkip, dsb)</p>
                                <button className="btn btn-xs bg-[#DADADC] text-[#269ED8] sm:btn-base md:btn-sm lg:btn-md">Add Document</button>
                            </div>
                            <div className='w-full flex flex-row justify-end gap-5'>
                                <button className="btn btn-outline btn-info btn-sm">Cancel</button>
                                <button type='submit' className="btn btn-info btn-sm text-white">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LamarKerja