import lamaranTerbaru from '../../assets/lowonganTerbaru.svg'
import jumlahpelamar from '../../assets/jumlaPelamar.png'
import lamaranDiproses from '../../assets/proses.svg'
import { ACTIVITY_COUNT } from '../../Const/Dashboard'
import DropdownButton from '../../Component/DropdownBtn'
import { BsDownload } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import ModalWrapper from '../../Component/ModalWrapper'
import ModalDelete from '../../Component/ModalDelete'
import { useEffect, useState } from 'react'
import dashboardService from '../../Services/Api/DashboardService'
import { useCookies } from 'react-cookie'
import { ActivityCountType, createLowonganType, listLowonganType, listPelamarType } from '../../Type/DashboardType'
import { queryparamsType } from '../../Type/PaginationType'
import React from 'react'
import ModalHeader from '../../Component/ModalHeader'
import { downloadFile } from '../../Utils/DownloadFile'


const Dashbaord = () => {
  const [listPelamar, setListPelamar] = useState<listPelamarType[]>()
  const [activityCount, setActivityCount] = useState<ActivityCountType>(ACTIVITY_COUNT)
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);
  const [dataLowongan, setDataLowongan] = useState([])
  const [searchTerm, SetsearchTerm] = useState('')
  const [searchTermPelamar, setSearchTermPelamar] = useState('')
  const [selectedItem, setSelectedItem] = useState('')
  const [posisi, setPosisi] = useState<string>('');
  const [showModal, setShowModal] = React.useState(false);
  const [modalDelete, setModalDelete] = React.useState(false);
  const [modalDeletePelamar, setModalDeletePelamar] = React.useState(false);
  const [dropdownData, setDropdownData] = React.useState([]);

  const queryparams: queryparamsType = {
    SearchTerm: '',
    PageSize: 10,
    PageNumber: 1
  }



  const [countKualifikasi, setCountKualifikasi] = useState<number>(1);
  const [countJobdesk, setCountJobdesk] = useState<number>(1);
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

  const getData = async (token: string, queryparams: queryparamsType) => {
    try {
      const response = await dashboardService.listLowongan(token, queryparams)
      setDataLowongan(response.data.data)
      console.log('g', response.data)
    } finally { /* empty */ }
  }

  const getActivity = async () => {
    try {
      const response = await dashboardService.GetActivityCount(cookies.token)
      setActivityCount(response.data.data)
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
      setShowModal(false)
      getData(cookies.token, queryparams)
      getActivity()
    } finally {
      /* empty */
    }
  };

  const deleteFunc = (id: string) => {
    try {
      dashboardService.deleteLowongan(cookies.token, id)
      setModalDelete(false)
      getData(cookies.token, queryparams)
    } finally { /* empty */ }
  }

  const deletePelamar = (id: string) => {
    try {
      dashboardService.deletePelamar(cookies.token, id)
      setModalDeletePelamar(false)
      getData(cookies.token, queryparams)
    } finally { /* empty */ }
  }



  const getPelamar = async (token: string, queryparams: queryparamsType) => {
    try {
      const response = await dashboardService.ListPelamar(token, queryparams)
      setListPelamar(response.data.data)
    } finally { /* empty */ }
  }

  useEffect(() => {
    queryparams.SearchTerm = searchTerm
    getData(cookies.token, queryparams)
  }, [searchTerm])
  useEffect(() => {
    if (selectedItem !== '') {
      queryparams.SearchTerm = selectedItem
      getPelamar(cookies.token, queryparams)
    } else {
      queryparams.SearchTerm = searchTermPelamar
      getPelamar(cookies.token, queryparams)
    }
  }, [searchTermPelamar, selectedItem])


  const getDropdownList = async () => {
    const response = await dashboardService.dropdowPosisi(cookies.token)
    setDropdownData(response.data.data)
  }


  useEffect(() => {
    getData(cookies.token, queryparams)
    getPelamar(cookies.token, queryparams)
    getActivity()
    getDropdownList()
  }, [])

  const [dropDownOpen, setDropDownOpen] = useState(false)

  const selectDropdown = (e: string) => {
    setSelectedItem(e)
    setDropDownOpen(false)
  }

  const download = async (lampiran:string) => {
    try {
      const response = await dashboardService.downloadLampiran( lampiran);
      downloadFile(response.data);
    } catch (error) {
      console.log(error);
    }
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
          <input type="text" placeholder="Pencarian..." onChange={(e) => setSearchTermPelamar(e.target.value)} className="input input-bordered border-blue-400 input-sm w-full max-w-xs" />
          <DropdownButton dataDropwdown={dropdownData} handleItemClick={selectDropdown} selectedItem={selectedItem} toggleDropdown={() => setDropDownOpen(true)} dropDownOpen={dropDownOpen} />
        </div>
        <div className="" >
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-[#698E94] text-white">
                <tr>
                  <th className='text-center'>No</th>
                  <th>Nama Lengkap</th>
                  <th>Nama Panggilan</th>
                  <th>Tempat Lahir</th>
                  <th>Tanggal Lahir</th>
                  <th>Agama</th>
                  <th>Jenis Kelamin</th>
                  <th>Pendidikan Terakhir</th>
                  <th>Status Pernikahan</th>
                  <th>Nomer Telepon</th>
                  <th>Nomer KTP</th>
                  <th>Nomer NPWP</th>
                  <th>Nomer KTA</th>
                  <th>Tinggi Badan</th>
                  <th>Berat Badan</th>
                  <th>Ukuran Baju</th>
                  <th>Ukuran Celana</th>
                  <th>Ukuran Sepatu</th>
                  <th>Alamat Tinggal</th>
                  <th>Lampiran</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {listPelamar?.map((item: listPelamarType, index) => {
                  console.log('f', listPelamar)
                  return (
                    <tr key={index} className="bg-base-200">
                      <th>{index + 1}</th>
                      <td>{item.nama_lengkap}</td>
                      <td>{item.nama_panggilan}</td>
                      <td>{item.tempat_lahir}</td>
                      <td>{item.tgl_lahir}</td>
                      <td>{item.agama}</td>
                      <td>{item.jenis_kelamin}</td>
                      <td>{item.pendidikan_terakhir}</td>
                      <td>{item.status_pernikahan}</td>
                      <td>{item.no_telpon}</td>
                      <td>{item.no_ktp}</td>
                      <td>{item.no_npwp}</td>
                      <td>{item.no_kta}</td>
                      <td>{item.tinggi_badan}</td>
                      <td>{item.berat_badan}</td>
                      <td>{item.ukuran_baju}</td>
                      <td>{item.ukuran_celana}</td>
                      <td>{item.ukuran_sepatu}</td>
                      <td>{item.alamat}</td>
                      <td>
                        <button onClick={() => download(item.lampiran)} className="btn btn-outline btn-sm btn-info"><BsDownload className='text-black' /></button>
                      </td>
                      <td>{item.waktu}</td>
                      <td className='flex flex-row gap-2'>
                        <button className="btn btn-outline btn-sm rounded-sm btn-info border border-green-400 " onClick={() => navigate('/dashboard/detail-pelamar', { state: { item } })}><IoEyeOutline className='text-black' /></button>
                        <label htmlFor='open_modal' className="btn btn-outline btn-sm rounded-sm btn-info border border-yellow-400"><TiEdit className='text-black' /></label>
                        <ModalDelete id={item.id} deleteData={deletePelamar} closeModal={() => setModalDeletePelamar(false)} openModal={() => setModalDeletePelamar(true)} modalDelete={modalDeletePelamar} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {/* <Pagination items={LIST_PELAMAR} itemsPerPa ge={5} /> */}
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-[#fff] rounded-md space-y-5 px-3 py-2">
        <p className="font-bold">List Lowongan</p>
        <div className="flex flex-row  gap-5">
          <ModalWrapper title='Tambahkan Lowongan +' showModal={showModal} setShowModal={() => setShowModal(true)} style='btn bg-blue-500 text-xs btn-sm hover:bg-blue-600 text-white'>
            <ModalHeader closeModal={() => setShowModal(false)} title='Formulir Tambah Lowongan Kerja' />
            <section className='w-[30vw] flex flex-col justify-center space-y-5 p-5' >
              <div >
                <p className="py-1">Posisi</p>
                <input type="text" placeholder="Type here" onChange={(e) => setPosisi(e.target.value)} className="input input-bordered input-sm w-full " />
              </div>
              <div >
                <p className="py-1 flex items-center gap-4">
                  <p>Kualifikasi</p>
                  <button onClick={handleAddClick} className=' h-10 text-blue-500 max-w-xs rounded-md'>add+</button>
                </p>
                <div className='space-y-2  h-32 overflow-y-auto flex flex-row'>
                  <div className='space-y-2 w-full h-32 overflow-y-auto flex flex-col'>
                    {kualifikasiValues.map((value, index) => (
                      <input
                        key={index}
                        type="text"
                        placeholder="Masukkan kualifikasi anda"
                        value={value}
                        onChange={(e) => handleInputChange(e, index)}
                        className="input input-bordered input-sm w-full max-w-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div >
                <p className="py-1 flex items-center gap-4">
                  <p>Jobdesk</p>
                  <button onClick={handleAddClickJobdesk} className=' h-10 text-blue-500 max-w-xs rounded-md'>add+</button>
                </p>
                <div className='space-y-2 h-32 overflow-y-auto flex flex-col'>
                  {inputJobdesk.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder="Masukan Jobdesk ANda"
                      value={value}
                      onChange={(e) => handleInputChangeJobdesk(e, index)}
                      className="input input-bordered input-sm w-full max-w-md"
                    />
                  ))}
                </div>
              </div>
              <div className="modal-action">
                <label onClick={() => setShowModal(false)} className="btn btn-outline text-xs px-5 hover:bg-gray-400 border hover:border-gray-500 border-gray-500 btn-sm">Batal</label>
                <label className="btn btn-success text-white text-xs px-5 btn-sm" onClick={save}>Tambah</label>
              </div>
            </section>
          </ModalWrapper>
          <input type="text" placeholder="Type here" onChange={(e) => SetsearchTerm(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
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
                        <ModalDelete id={item.id} deleteData={deleteFunc} closeModal={() => setModalDelete(false)} openModal={() => setModalDelete(true)} modalDelete={modalDelete} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Dashbaord     