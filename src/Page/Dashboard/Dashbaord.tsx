import lamaranTerbaru from '../../assets/lowonganTerbaru.svg'
import jumlahpelamar from '../../assets/jumlaPelamar.png'
import lamaranDiproses from '../../assets/proses.svg'
import { ACTIVITY_COUNT, LIST_PELAMAR } from '../../Const/Dashboard'
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
import { ActivityCountType, createLowonganType, listLowonganType, listPelamarType } from '../../Type/DashboardType'
import { queryparamsType } from '../../Type/PaginationType'


const Dashbaord = () => {
  const [listPelamar] = useState<listPelamarType[]>(LIST_PELAMAR)
  const [activityCount, setActivityCount] = useState<ActivityCountType>(ACTIVITY_COUNT)
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);
  const [dataLowongan, setDataLowongan] = useState([])
  const [id, setId] = useState('')
  const [searchTerm, SetsearchTerm] = useState('')

  const [posisi, setPosisi] = useState<string>('');

  const [countKualifikasi, setCountKualifikasi] = useState<number>(0);
  const [countJobdesk, setCountJobdesk] = useState<number>(0);
  const [kualifikasiValues, setKualifikasiValues] = useState<string[]>(Array.from({ length: countKualifikasi }, () => ''));
  const [inputJobdesk, setInputJobdesk] = useState<string[]>(Array.from({ length: countJobdesk }, () => ''));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputValues = [...kualifikasiValues];
    newInputValues[index] = event.target.value;
    setKualifikasiValues(newInputValues);
  };
  const handleInputChangeJobdesk = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newInputValues = [...inputJobdesk];
    newInputValues[index] = event.target.value;
    setInputJobdesk(newInputValues);
  };

  const handleAddClick = () => {
    setCountKualifikasi(countKualifikasi + 1);
    setKualifikasiValues([...kualifikasiValues, '']);
  };
  const handleAddClickJobdesk = () => {
    setCountJobdesk(countJobdesk + 1);
    setInputJobdesk([...inputJobdesk, '']);
  };
  useEffect(() => {
    console.log(posisi);
    console.log(kualifikasiValues);
    console.log(inputJobdesk);
  }, [kualifikasiValues, inputJobdesk, posisi]);

  const getData = async (token: string, queryparams:queryparamsType) => {
    try {
      const response = await dashboardService.listLowongan(token, queryparams)
      setDataLowongan(response.data.data)
      console.log('g', response.data)
    } finally { /* empty */ }
  }

  const save = async () => {
    // setIsLoading(true);
    try {
      const kualifikasiData = kualifikasiValues.map(function (item) {
        return { item: item };
      });
      const jobdeskData = inputJobdesk.map(function (item) {
        return { item: item };
      });

      const body: createLowonganType = {
        posisi: posisi,
        kualifikasi: kualifikasiData,
        jobdesk: jobdeskData,
      };
      await dashboardService.CreateLowongan(cookies.token, body);
    } finally {
      /* empty */
    }
  };

  const deleteFunc = () => {
    console.log(id)
    try {
      dashboardService.deleteLowongan(cookies.token, id)
    } finally { /* empty */ }
  }

  const getActivity = async () => {
    try {
      const response = await dashboardService.GetActivityCount(cookies.token)
      setActivityCount(response.data.data)
    } finally { /* empty */ }
  }
  // const getPelamar = () => {
  //   try {
  //     const params: Partial<Params> = {
  //       PageSize: 1,
  //       PageNumber: 10,
  //     }
  //     dashboardService.ListPelamar(cookies.token, params)
  //     // setListPelamar(response.data.data)
  //   } finally { /* empty */ }
  // }

  useEffect(() => {
    const queryparams = {
      searchTerm: searchTerm,
      PageSize: 10,
      PageNumber: 1
    }
    getData(cookies.token, queryparams)

  }, [searchTerm])

  useEffect(() => {
    const queryparams = {
      searchTerm: '',
      PageSize: 10,
      PageNumber: 1
    }
    getData(cookies.token, queryparams)
    // console.log('f', dataLowongan)
    getActivity()
    // getPelamar()
  }, [])


  return (
    <div className="w-full h-fit px-2 space-y-5">
      <h1 className="font-bold text-lg">Dashboard</h1>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className=" h-32 border-4 drop-shadow-lg border-[#269ED8] bg-[#fff]  grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center ">
            <img className='w-7 h-7' src={lamaranTerbaru} alt="" />Lowongan Terbaru
          </div>
          <div className="font-bold text-5xl">
            {activityCount?.loker_terbaru}
          </div>
        </div>
        <div className=" h-32 border-4 drop-shadow-lg border-[#12AE57] bg-[#fff] grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center">
            <img className='w-7 h-7' src={jumlahpelamar} alt="" /> Jumlah Pelamar
          </div>
          <div className="font-bold text-5xl">
            {activityCount?.jumlah_pelamar}
          </div>
        </div>
        <div className=" h-32 border-4 drop-shadow-lg border-[#FFC000] bg-[#fff]  grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center">
            <img className='w-7 h-7' src={lamaranDiproses} alt="" /> Lamaran Yang Diproses
          </div>
          <div className="font-bold text-5xl">
            {activityCount?.lamaran}
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
                {listPelamar?.map((item, index) => {
                  return (
                    <tr key={index} className="bg-base-200">
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
                        <label htmlFor='delete' onClick={() => setId(item.id)} className="btn btn-outline btn-sm rounded-sm btn-info border border-red-400"><RiDeleteBin6Line className='text-black' /></label>
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
          <input type="text" placeholder="Type here" onChange={(e) => SetsearchTerm(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
          {/* <DropdownButton /> */}
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
                {dataLowongan?.map((item: listLowonganType, index) => {
                  return (
                    <tr key={index} className="bg-base-200">
                      <th>{index + 1}</th>
                      <td>{item.posisi}</td>
                      <td key={index} className='
                      '>
                        {item.kualifikasi.map((item: string, index: number) => {
                          return (
                            <div>{index + 1}. {item}</div>
                          )
                        })}
                      </td>
                      <td key={index} >
                        {item.jobdesk.map((item: string, index) => {
                          return (
                            <div >{index + 1}. {item}</div>
                          )
                        })}
                      </td>
                      <td>{item.waktu}</td>
                      <td className='flex flex-row gap-2'>
                        <label htmlFor='open_modal' className="btn btn-outline btn-sm rounded-sm btn-info border border-yellow-400"><TiEdit className='text-black' /></label>
                        <label className="btn btn-outline btn-sm rounded-sm btn-info border border-red-400"><RiDeleteBin6Line className='text-black' /></label>
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
        <ModalHeader id='open_modal' title='Formulir Tambah Lowongan Kerja' />
        <section className='my-4 space-y-2'>
          <div >
            <p className="py-1">Posisi</p>
            <input type="text" placeholder="Type here" onChange={(e) => setPosisi(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
          </div>
          <div >
            <p className="py-1">Kualifikasi</p>
            <div className='space-y-2 h-32 overflow-y-auto flex flex-col'>
              <div className='space-y-2 h-32 overflow-y-auto flex flex-col'>
                {kualifikasiValues.map((value, index) => (
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
            <label className="btn btn-success text-white text-xs px-5 btn-sm" onClick={save}>Tambah</label>
          </div>
        </section>
      </ModalWrapper>
      <ModalDelete posisi='Security' id='delete' deleteData={deleteFunc} />
    </div>
  )
}

export default Dashbaord     