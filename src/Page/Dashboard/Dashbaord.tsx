import lamaranTerbaru from '../../assets/lowonganTerbaru.svg'
import jumlahpelamar from '../../assets/jumlaPelamar.png'
import lamaranDiproses from '../../assets/proses.svg'
import { LIST_LOWONGAN, LIST_PELAMAR } from '../../Const/Dashboard'
import DropdownButton from '../../Component/DropdownBtn'
import { BsDownload } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import ModalWrapper from '../../Component/ModalWrapper'
import ModalHeader from '../../Component/ModalHeader'
import ModalDelete from '../../Component/ModalDelete'
import { useEffect, useState } from 'react'
import dashboardService from '../../Services/Api/DashboardService'
import { useCookies } from 'react-cookie'


const Dashbaord = () => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['token'])


  const [posisi, setPosisi] = useState<string>('')

  const [countKualifikasi, setCountKualifikasi] = useState<number>(0);
  const [countJobdesk, setCountJobdesk] = useState<number>(0);
  const [inputValues, setInputValues] = useState<string[]>(Array.from({ length: countKualifikasi }, () => ''));
  const [inputJobdesk, setInputJobdesk] = useState<string[]>(Array.from({ length: countJobdesk }, () => ''));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };
  const handleInputChangeJobdesk = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputValues = [...inputJobdesk];
    newInputValues[index] = event.target.value;
    setInputJobdesk(newInputValues);
  };

  const handleAddClick = () => {
    setCountKualifikasi(countKualifikasi + 1);
    setInputValues([...inputValues, '']);
  };
  const handleAddClickJobdesk = () => {
    setCountJobdesk(countJobdesk + 1);
    setInputJobdesk([...inputJobdesk, '']);
  };


  useEffect(() => {
    console.log(posisi)
    console.log(inputValues)
    console.log(inputJobdesk)
  }, [inputValues,inputJobdesk,posisi])


  const save = async () => {
    // setIsLoading(true);
    try {
        const body: Partial<any> = {
            posisi: posisi,
            kualifikasi: inputValues,
            jobdesk: inputJobdesk,
        }
        await dashboardService.CreateLowongan(cookies.token, body);
    } finally { /* empty */ }
};



  return (
    <div className="w-full h-fit px-2 space-y-5">
      <h1 className="font-bold text-lg">Dashboard</h1>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className=" h-32 border-4 drop-shadow-lg border-[#269ED8] bg-[#fff]  grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center ">
            <img className='w-7 h-7' src={lamaranTerbaru} alt="" />Lowongan Terbaru
          </div>
          <div className="font-bold text-5xl">
            5
          </div>
        </div>
        <div className=" h-32 border-4 drop-shadow-lg border-[#12AE57] bg-[#fff] grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center">
            <img className='w-7 h-7' src={jumlahpelamar} alt="" /> Jumlah Pelamar
          </div>
          <div className="font-bold text-5xl">
            25
          </div>
        </div>
        <div className=" h-32 border-4 drop-shadow-lg border-[#FFC000] bg-[#fff]  grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center">
            <img className='w-7 h-7' src={lamaranDiproses} alt="" /> Lamaran Yang Diproses
          </div>
          <div className="font-bold text-5xl">
            10
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-[#fff] rounded-md space-y-5 px-3 py-2">
        <p className="font-bold">List Pelamar</p>
        <div className="flex flex-row  gap-5">
          <input type="text" placeholder="Pencarian..." className="input input-bordered border-blue-400 input-sm w-full max-w-xs" />
          <DropdownButton />
        </div>
        <div className="" >
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-[#698E94] text-white">
                <tr>
                  <th>No</th>
                  <th>Posisi</th>
                  <th>Nama Lengkap</th>
                  <th>Tempat Lahir</th>
                  <th>Tanggal Lahir</th>
                  <th>Status</th>
                  <th>Alamat</th>
                  <th>Lampiran</th>
                  <th>Keterangan</th>
                  <th>Waktu</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {LIST_PELAMAR.map((item, index) => {
                  return (
                    <tr className="bg-base-200">
                      <th>{index + 1}</th>
                      <td>{item.posisi}</td>
                      <td>{item.nama_lengkap}</td>
                      <td>{item.tempat_lahir}</td>
                      <td>{item.tanggal_lahir}</td>
                      <td>{item.status}</td>
                      <td>{item.alamat}</td>
                      <td>
                        <button className="btn btn-outline btn-sm btn-info"><BsDownload className='text-black' /></button>
                      </td>
                      <td>{item.keterangan}</td>
                      <td>{item.waktu}</td>
                      <td className='flex flex-row gap-2'>
                        <button className="btn btn-outline btn-sm rounded-sm btn-info border border-green-400 " onClick={() => navigate('/dashboard/detail-pelamar')}><IoEyeOutline className='text-black' /></button>
                        <label htmlFor='open_modal' className="btn btn-outline btn-sm rounded-sm btn-info border border-yellow-400"><TiEdit className='text-black' /></label>
                        <label htmlFor='delete' className="btn btn-outline btn-sm rounded-sm btn-info border border-red-400"><RiDeleteBin6Line className='text-black' /></label>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {/* <Pagination items={LIST_PELAMAR} itemsPerPage={5} /> */}
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-[#fff] rounded-md space-y-5 px-3 py-2">
        <p className="font-bold">List Lowongan</p>
        <div className="flex flex-row  gap-5">
          <label htmlFor="open_modal" className="btn bg-blue-500 text-xs btn-sm hover:bg-blue-600 text-white">Tambahkan Lowongan +</label>
          <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
          <DropdownButton />
        </div>
        <div className="" >
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#698E94] text-white">
                <tr>
                  <th>No</th>
                  <th>Posisi</th>
                  <th>Kualifikasi</th>
                  <th>Jobdesk</th>
                  <th>Waktu</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {LIST_LOWONGAN.map((item, index) => {
                  return (
                    <tr className="bg-base-200">
                      <th>{index + 1}</th>
                      <td>{item.posisi}</td>
                      <td className='flex flex-col'>
                        {item.kualifikasi.map((item, index) => {
                          return (
                            <td>{index + 1}. {item.item}</td>
                          )
                        })}
                      </td>
                      {item.jobdesk.map((item, index) => {
                        return (
                          <td>{index + 1}. {item.item}</td>
                        )
                      })}
                      <td>{item.waktu}</td>
                      <td className='flex flex-row gap-2'>
                        <label htmlFor='open_modal' className="btn btn-outline btn-sm rounded-sm btn-info border border-yellow-400"><TiEdit className='text-black' /></label>
                        <label htmlFor='delete' className="btn btn-outline btn-sm rounded-sm btn-info border border-red-400"><RiDeleteBin6Line className='text-black' /></label>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalWrapper id='open_modal'  >
        <ModalHeader id='open_modal' title='Formulir Ubah Lowongan Kerja' />
        <section className='my-4 space-y-2'>
          <div >
            <p className="py-1">Posisi</p>
            <input type="text" placeholder="Type here" onChange={(e) => setPosisi(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
          </div>
          <div >
            <p className="py-1">Kualifikasi</p>
            <div className='space-y-2 h-32 overflow-y-auto flex flex-col'>
              <div className='space-y-2 h-32 overflow-y-auto flex flex-col'>
                {inputValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="Type here"
                    value={value}
                    onChange={(e) => handleInputChange(e, index)}
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                ))}
                <button onClick={handleAddClick} className='bg-blue-500 text-white max-w-xs rounded-md'>add+</button>
              </div>
            </div>
          </div>
          <div >
            <p className="py-1">Jobdesk</p>
            <div className='space-y-2 h-32 overflow-y-auto flex flex-col'>
                {inputJobdesk.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="Type here"
                    value={value}
                    onChange={(e) => handleInputChangeJobdesk(e, index)}
                    className="input input-bordered input-sm w-full max-w-xs"
                  />
                ))}
                <button onClick={handleAddClickJobdesk} className='bg-blue-500 text-white max-w-xs rounded-md'>add+</button>
              </div>
          </div>
          <div className="modal-action">
            <label htmlFor="open_modal" className="btn btn-outline text-xs px-5 hover:bg-gray-400 border hover:border-gray-500 border-gray-500 btn-sm">Batal</label>
            <label className="btn btn-success text-white text-xs px-5 btn-sm" onClick={save}>Ubah</label>
          </div>
        </section>
      </ModalWrapper>
      <ModalDelete posisi='Security' id='delete' />

    </div>
  )
}

export default Dashbaord     