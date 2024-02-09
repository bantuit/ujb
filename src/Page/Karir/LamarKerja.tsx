import { ChangeEvent, useState } from 'react';
import Breadcrumb from '../../Component/Breadcrumbs';
import { FiFilePlus } from "react-icons/fi";
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        name: 'NamaLengkap',

    },
    {
        label: 'Nama Panggilan',
        name: 'NamaPanggilan',
    },
    {
        label: 'Tempat Lahir',
        name: 'TempatLahir',
    },
    {
        label: 'Tanggal Lahir',
        name: 'TglLahir',
    },
    {
        label: 'Agama',
        name: 'Agama',
    },
    {
        label: 'Jenis Kelamin',
        name: 'JenisKelamin',
        type: 'radio',
        options: ['Laki-laki', 'Perempuan'],
    },
    {
        label: 'Pendidikan Terakhir',
        name: 'PendidikanTerakhir',
    },
    {
        label: 'Status Pernikahan',
        name: 'StatusPernikahan',
    },
    {
        label: 'Nomer Telepon ',
        name: 'NoTelpon',
    },
    {
        label: 'Nomer KTP',
        name: 'NoKtp',
    },
    {
        label: 'Nomer NPWP',
        name: 'NoNpwp',
    },
    {
        label: 'Nomer KTA',
        name: 'NoKta',
    },
    {
        label: 'Tinggi Badan',
        name: 'TinggiBadan',
    },
    {
        label: 'Berat Badan',
        name: 'BeratBadan',
    },
    {
        label: 'Ukuran Baju',
        name: 'UkuranBaju',
    },
    {
        label: 'Ukuran Celana',
        name: 'UkuranCelana',
    },
    {
        label: 'Ukuran Sepatu',
        name: 'ukuranSepatu',
    },
]



const LamarKerja = () => {
    const { posisi } = useParams()
    const defaultPosisi = "security";
    const initialFormData: { [key: string]: string } = {};
    formInput.forEach(input => {
        initialFormData[input.name] = '';
        initialFormData['Alamat'] = '';
        initialFormData['Posisi'] = posisi || defaultPosisi;
    });

    const [formData, setFormData] = useState(initialFormData);
    const [uploadFile, setUploadFile] = useState<string | undefined>();

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Membuat objek FormData
        const formDataToSend = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        if (formDataUpload.file) {
            formDataToSend.append('Lampiran', formDataUpload.file);
        }

        for (const pair of formDataToSend.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        try {

            await axios.post('https://ujb.biz.id/api/requirement', formDataToSend, {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            });
            console.log(formDataToSend);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const [formDataUpload, setFormDataUpload] = useState({
        name: '',
        file: null as File | null
    });


    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const file = e.target.files?.[0] || null;

            // Mengecek apakah file yang diunggah adalah file PDF
            if (file && file.type !== 'application/pdf') {
                alert('Mohon unggah file dalam format PDF.');
                return;
            }

            // Mengecek apakah ukuran file tidak melebihi 2MB
            if (file && file.size > 2 * 1024 * 1024) {
                alert('Ukuran file melebihi batas maksimum (2MB).');
                return;
            }

            setFormDataUpload((prevData) => ({ ...prevData, file }));
            setUploadFile(file?.name);
        } catch (error) {
            console.error('Error:', error);
        }
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
                                        <div key={index} className='w-full flex flex-col'>
                                            <label>{item.label}</label>
                                            {item.type === 'radio' && (
                                                <div>
                                                    {item.options.map((option, i) => (
                                                        <label key={i} className="radio">
                                                            <input
                                                                type="radio"
                                                                name={item.name}
                                                                value={option}
                                                                checked={formData[item.name] === option}
                                                                onChange={handleChange}
                                                            />
                                                            {option}
                                                        </label>
                                                    ))}
                                                </div>
                                            )}
                                            {item.type !== 'radio' && (
                                                <input
                                                    type="text"
                                                    name={item.name}
                                                    required
                                                    placeholder={item.label}
                                                    className="input input-bordered input-sm w-full"
                                                    value={formData[item.name]}
                                                    onChange={handleChange}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='flex flex-col'>
                                <label>Alamat Tinggal</label>
                                <textarea name='Alamat' value={formData.alamat} onChange={handleChange} placeholder="Alamat Tinggal" className="textarea textarea-bordered textarea-sm w-full " ></textarea>
                            </div>
                            <input
                                type="file"
                                id='upload'
                                name="file"
                                accept="application/pdf"
                                onChange={(e) => handleFileChange(e)}
                                className=" p-2 w-full border hidden"
                            />
                            <div className='w-full h-52 bg-[#F9F9FC] flex flex-col justify-center items-center gap-3 px-5 '>
                                <div className='bg-[#DADADC] w-10 h-10 flex justify-center items-center rounded-full text-2xl'><FiFilePlus className='text-[#269ED8]' /></div>
                                <p className='md:w-1/2 text-center'>{uploadFile !== undefined ? uploadFile : 'Drag and drop image here, or click add Document, Format PDF (CV, Ijazah, Transkip, dsb)'}</p>
                                <label htmlFor='upload' className="btn btn-xs bg-[#DADADC] text-[#269ED8] sm:btn-base md:btn-sm lg:btn-md">Add Document</label>
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