import { ChangeEvent, useState } from 'react';
import Breadcrumb from '../../Component/Breadcrumbs';
import { FiFilePlus } from "react-icons/fi";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FORM_PELAMAR } from '../../Const/Dashboard';

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

const formInput = FORM_PELAMAR


const LamarKerja = () => {
    const { posisi } = useParams()
    const [isLoading, setIsLoading] = useState(false); 
    const [showAlertPdf, setShowAlertPdf] = useState(false);
    const defaultPosisi = "security";
    const initialFormData: { [key: string]: string } = {};
    formInput.forEach(input => {
        initialFormData[input.name] = '';
        initialFormData['Alamat'] = '';
        initialFormData['Posisi'] = posisi || defaultPosisi;
    });

    const [formData, setFormData] = useState(initialFormData);
    const [uploadFile, setUploadFile] = useState<string | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Membuat objek FormData
        const formDataToSend = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        if (formDataUpload.file) {
            formDataToSend.append('Lampiran', formDataUpload.file);
        }

        try {
            await axios.post('https://ujb.biz.id/api/requirement', formDataToSend, {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            });
            setIsLoading(false);
            setFormData({
                ...initialFormData,
                Alamat: '', 

            });
            setFormData(initialFormData);
            setUploadFile(undefined);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Lamaran telah terkirim  ",
                showConfirmButton: false,
                timer: 1500
            });
            window.location.reload();
        } catch (error) {
            setIsLoading(false);
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

            if (file && file.size > 1 * 1024 * 1024) {
                setShowAlertPdf(true)

                setTimeout(() => {
                    setShowAlertPdf(false);
                }, 3000);
            } else {
                setFormDataUpload((prevData) => ({ ...prevData, file }));
                setUploadFile(file?.name);
            }
        } catch (error) {
            setShowAlertPdf(false);
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {showAlertPdf && (
                <div className="flex justify-center fixed top-2 w-full z-50 ">
                    <div role="alert" className="alert alert-error w-[50%]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className='text-white'>File Lebih 2MB</span>
                    </div>
                </div>
            )}


            <Breadcrumb breadcrumbs={breadcrumb} />
            <div className='h-fit flex flex-col justify-start pt-10 items-center gap-5 px-5 lg:px-0 z-20'>
                <h1 className='text-4xl font-bold text-center z-20 text-white'>Formulir Lamaran Kerja</h1>
                <div className='flex flex-col items-center z-20'>
                    <p className='lg:w-[60vw] text-center'>Silahkan lengkapi persyaratan dan isi formulir dengan benar dan sesuai. Pastikan data yang tersisi  sudah  lengkap dan benar sebelum mengirim data tersebut. </p>
                    <div className='w-full space-y-5 mt-10'>
                        <h2 className='text-2xl font-bold'>Biodata lengkap</h2>
                        <form onSubmit={handleSubmit} className='lg:w-[70vw] flex flex-col gap-5 p-5 h-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 '>
                            <div className='grid md:grid-cols-2 gap-5'>
                                {formInput.map((item, index) => {
                                    return (
                                        <div key={index} className='w-full flex flex-col'>
                                            <label>{item.label}</label>
                                            {item.type === 'radio' && (
                                                <div className='space-x-5'>
                                                    {item.options?.map((option, i) => (
                                                        <label key={i} className="radio border-none">
                                                            <input
                                                                type="radio"
                                                                name={item.name}
                                                                required
                                                                value={option}
                                                                checked={formData[item.name] === option}
                                                                onChange={handleChange}
                                                            />
                                                            {option}
                                                        </label>
                                                    ))}
                                                </div>
                                            )}
                                            {item.type === 'text' && (
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
                                            {item.type === 'number' && (
                                                <input
                                                    type="number"
                                                    name={item.name}
                                                    required
                                                    placeholder={item.label}
                                                    className="input input-bordered input-sm w-full"
                                                    value={formData[item.name]}
                                                    onChange={handleChange}
                                                />
                                            )}
                                            {item.type === 'dropdown' && (
                                                <select
                                                    name={item.name}
                                                    value={formData[item.name]}

                                                    onChange={handleChange}
                                                    className='rounded-md px-3'
                                                    required
                                                >
                                                    <option disabled selected value="">{item.label}</option>
                                                    {item.options?.map((option, i) => (
                                                        <option key={i} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            )}
                                            {item.type === 'date' && (
                                                <input
                                                    type="date"
                                                    name={item.name}
                                                    required
                                                    value={formData[item.name]}
                                                    onChange={handleChange}
                                                    className='rounded-md px-3'

                                                />
                                            )}
                                            {item.type === 'group' && (
                                                <div className="flex flex-row space-x-3">
                                                    {item.data?.map((subItem, subIndex) => (
                                                        <div key={subIndex} className="w-full flex flex-col">
                                                            <label>{subItem.label}</label>
                                                            {subItem.type === 'radio' ? (
                                                                <div className="flex flex-col lg:flex-row">
                                                                    {subItem.options?.map((option, optionIndex) => (
                                                                        <label key={optionIndex} className="radio border-none w-[80%] lg:w-[50%] ">
                                                                            <input
                                                                                type="radio"
                                                                                name={subItem.name}
                                                                                required
                                                                                value={option}
                                                                                checked={formData[subItem.name] === option}
                                                                                onChange={handleChange}
                                                                            />
                                                                            {option}
                                                                        </label>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <input
                                                                    type={subItem.type}
                                                                    name={subItem.name}
                                                                    required
                                                                    placeholder={subItem.label}
                                                                    className="input input-bordered input-sm"
                                                                    value={formData[subItem.name]}
                                                                    onChange={handleChange}
                                                                    style={{ width: '100%' }}
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}


                                        </div>
                                    );
                                })}
                            </div>
                            <div className='flex flex-col'>
                                <label>Alamat Tinggal</label>
                                <textarea name='Alamat' value={formData.Alamat} onChange={handleChange} placeholder="Alamat Tinggal" className="textarea textarea-bordered textarea-sm w-full " ></textarea>
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
                                <a href='/karir/lowongan-kerja' className="btn btn-outline btn-info btn-sm" >Cancel</a>
                                <button type='submit' className="btn btn-info btn-sm text-white">
                                    {isLoading ? <div className='flex flex-row justify-center items-center gap-2'><span className="loading loading-spinner loading-sm">kirim</span> <span>Loading..</span></div> : 'kirim'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LamarKerja