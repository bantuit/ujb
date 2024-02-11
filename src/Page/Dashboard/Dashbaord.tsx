import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsDownload } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';
import { TiEdit } from 'react-icons/ti';
import { useCookies } from 'react-cookie';
import dashboardService from '../../Services/Api/DashboardService';
import DropdownButton from '../../Component/DropdownBtn';
import ModalWrapper from '../../Component/ModalWrapper';
import ModalHeader from '../../Component/ModalHeader';
import {
  ActivityCountType,
  DropdownPositiontType,
  createLowonganType,
  listLowonganType,
  listPelamarType
} from '../../Type/DashboardType';
import { queryparamsType } from '../../Type/PaginationType';
import lamaranTerbaru from '../../assets/lowonganTerbaru.svg';
import jumlahpelamar from '../../assets/jumlaPelamar.png';
import lamaranDiproses from '../../assets/proses.svg';
import Pagination from '../../Component/Pagination';
import Swal from 'sweetalert2';
import { MdDelete } from 'react-icons/md';


const Dashbaord = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);
  const [listPelamar, setListPelamar] = useState<listPelamarType[]>();
  const [activityCount, setActivityCount] = useState<ActivityCountType>();
  const [dataLowongan, setDataLowongan] = useState<listLowonganType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermPelamar, setSearchTermPelamar] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [posisi, setPosisi] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownData, setDropdownData] = useState<DropdownPositiontType[]>([]);
  const [countKualifikasi, setCountKualifikasi] = useState<number>(1);
  const [countJobdesk, setCountJobdesk] = useState<number>(1);
  const [kualifikasiValues, setKualifikasiValues] = useState<string[]>(Array.from({ length: countKualifikasi }, () => ''));
  const [inputJobdesk, setInputJobdesk] = useState<string[]>(Array.from({ length: countJobdesk }, () => ''));
  const [selectedLowongan, setSelectedLowongan] = useState<listLowonganType | null>(null);
  const [initialKualifikasiValues, setInitialKualifikasiValues] = useState<string[]>([]);
  const [initialJobdeskValues, setInitialJobdeskValues] = useState<string[]>([]);
  const [idUpdate, setIdUpdate] = useState('')
  const [paginationInfo, setPaginationInfo] = useState<queryparamsType>({
    PageNumber: 1,
    TotalPages: 1,
    PageSize: 10,
    TotalCount: 0,
    SearchTerm: '',
    HasNext: true
  });
  const [paginationPelamar, setPaginationPelamar] = useState<queryparamsType>({
    PageNumber: 1,
    TotalPages: 1,
    PageSize: 10,
    TotalCount: 0,
    SearchTerm: '',
    HasNext: true
  });


  useEffect(() => {
    getData(cookies.token, paginationInfo);
    getPelamar(cookies.token, paginationPelamar);
    getActivity();
    getDropdownList();
  }, []);

  useEffect(() => {
    const updatedPaginationInfo = {
      ...paginationInfo,
      searchTerm: searchTerm
    };
    getData(cookies.token, updatedPaginationInfo);
  }, [searchTerm]);

  useEffect(() => {
    if (selectedItem !== '') {
      const updatedPaginationPelamar = {
        ...paginationPelamar,
        searchTerm: selectedItem
      };
      paginationPelamar.SearchTerm = selectedItem;
      getPelamar(cookies.token, updatedPaginationPelamar);
    } else {
      const updatedPaginationPelamar = {
        ...paginationPelamar,
        searchTerm: searchTermPelamar
      };
      getPelamar(cookies.token, updatedPaginationPelamar);
    }
  }, [searchTermPelamar, selectedItem]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (idUpdate) {
      const newInputValues = [...initialKualifikasiValues];
      newInputValues[index] = event.target.value;
      setInitialKualifikasiValues(newInputValues);
    } else {
      const newInputValues = [...kualifikasiValues];
      newInputValues[index] = event.target.value;
      setKualifikasiValues(newInputValues);
    }
  };

  const handleInputChangeJobdesk = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (idUpdate) {
      const newInputValues = [...initialJobdeskValues];
      newInputValues[index] = event.target.value;
      setInitialJobdeskValues(newInputValues);
    } else {
      const newInputValues = [...inputJobdesk];
      newInputValues[index] = event.target.value;
      setInputJobdesk(newInputValues);
    }
  };

  const handleAddClick = () => {
    if (idUpdate) {
      setCountKualifikasi(initialKualifikasiValues.length + 1);
      setInitialKualifikasiValues([...initialKualifikasiValues, '']);
    } else {
      setCountKualifikasi(countKualifikasi + 1);
      setKualifikasiValues([...kualifikasiValues, '']);
    }
  };

  const handleAddClickJobdesk = () => {
    if (idUpdate) {
      setCountJobdesk(initialJobdeskValues.length + 1);
      setInitialJobdeskValues([...initialJobdeskValues, '']);
    } else {
      setCountJobdesk(countJobdesk + 1);
      setInputJobdesk([...inputJobdesk, '']);
    }
  };

  const getData = async (token: string, queryparams: queryparamsType) => {
    try {
      const response = await dashboardService.listLowongan(token, queryparams);
      setDataLowongan(response.data.data);
      const paginationData = await JSON.parse(response.headers['x-pagination']);
      setPaginationInfo({
        PageNumber: paginationData.page_number,
        TotalPages: paginationData.total_page,
        PageSize: paginationData.page_size,
        TotalCount: paginationData.total_count,
        HasNext: paginationData.has_next
      });
    } finally { /* empty */ }
  };

  const getActivity = async () => {
    try {
      const response = await dashboardService.GetActivityCount(cookies.token);
      setActivityCount(response.data.data);
    } finally { /* empty */ }
  };
  const resetLowongan = () => {
    setInputJobdesk([''])
    setKualifikasiValues([''])
    setSelectedLowongan(null)
    setIdUpdate('')
    setPosisi('')
  }

  const save = async () => {
    try {
      let kualifikasiData: { item: string }[] = [];
      let jobdeskData: { item: string }[] = [];
      if (idUpdate) {
        jobdeskData = initialJobdeskValues.map(item => ({ item }));
        kualifikasiData = initialKualifikasiValues.map(item => ({ item }));
      } else {
        jobdeskData = inputJobdesk.map(item => ({ item }));
        kualifikasiData = kualifikasiValues.map(item => ({ item }));
      }

      const body: createLowonganType = {
        posisi: posisi,
        kualifikasi: kualifikasiData,
        jobdesk: jobdeskData,
      };

      await dashboardService.CreateLowongan(cookies.token, body);
      await getData(cookies.token, paginationInfo);
      resetLowongan()
      await getActivity();
      setShowModal(false);
    } finally { /* empty */ }
  };

  const edit = async () => {
    setIsLoading(true)
    try {
      const kualifikasiData = initialKualifikasiValues.map(item => ({ item }));
      const jobdeskData = initialJobdeskValues.map(item => ({ item }));

      const body: createLowonganType = {
        id: idUpdate,
        posisi: selectedLowongan?.posisi,
        kualifikasi: kualifikasiData,
        jobdesk: jobdeskData,
      };

      await dashboardService.UpdateLowongan(cookies.token, body);
      await getData(cookies.token, paginationInfo);
      resetLowongan()
      setShowModal(false);
      setIsLoading(false)
    } catch {
      setIsLoading(false)
    }
  };

  const deleteFunc = async (id: string, posisi: string) => {
    try {
      const result = await Swal.fire({
        title: `Apakah anda ingin menghapus ${posisi}?`,
        text: "Anda tidak akan dapat mengembalikannya!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ya, hapus!"
      });

      if (result.isConfirmed) {
        // User confirmed the delete action
        await dashboardService.deleteLowongan(cookies.token, id);
        await getActivity();
        await getData(cookies.token, paginationInfo);

        Swal.fire({
          title: "Terhapus!",
          text: "File anda sudah terhapus.",
          icon: "success"
        });
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the file.",
        icon: "error"
      });
    }
  };

  const getPelamar = async (token: string, queryparams: queryparamsType) => {
    try {
      const response = await dashboardService.ListPelamar(token, queryparams);
      setListPelamar(response.data.data);
      const paginationData = await JSON.parse(response.headers['x-pagination']);
      setPaginationPelamar({
        PageNumber: paginationData.page_number,
        TotalPages: paginationData.total_page,
        PageSize: paginationData.page_size,
        TotalCount: paginationData.total_count,
        HasNext: paginationData.has_next
      });
    } finally { /* empty */ }
  };

  const deletePelamar = async (id: string, posisi: string) => {
    try {
      const result = await Swal.fire({
        title: `Apakah anda ingin menghapus ${posisi}?`,
        text: "Anda tidak akan dapat mengembalikannya!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ya, hapus!"
      });

      if (result.isConfirmed) {
        await dashboardService.deletePelamar(cookies.token, id);
        await getActivity();
        await getPelamar(cookies.token, paginationInfo);

        Swal.fire({
          title: "Terhapus!",
          text: "File anda sudah terhapus.",
          icon: "success"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Terdapat masalah ketika menghapus file anda.",
        icon: "error"
      });
    }
  };

  const getDropdownList = async () => {
    const response = await dashboardService.dropdowPosisi(cookies.token);
    setDropdownData(response.data.data);
  };

  const selectDropdown = (e: string) => {
    setSelectedItem(e);
    setDropDownOpen(false);
  };

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handlePageClick = (pageNumber: number) => {
    const updatedPaginationInfo = {
      ...paginationInfo,
      PageNumber: pageNumber
    };
    getData(cookies.token, updatedPaginationInfo);
  };
  const handleNextPelamar = (pageNumber: number) => {
    const updatedPaginationPelamar = {
      ...paginationPelamar,
      PageNumber: pageNumber
    };
    getPelamar(cookies.token, updatedPaginationPelamar);
  };

  const handleUpdateLowongan = (lowongan: listLowonganType) => {
    setSelectedLowongan(lowongan);
    setIdUpdate(lowongan.id)
    setInitialKualifikasiValues(lowongan.kualifikasi);
    setInitialJobdeskValues(lowongan.jobdesk)
    setShowModal(true); 
  }

  return (
    <div className="w-full h-fit px-2 space-y-5">
      <h1 className="font-bold text-lg">Dashboard</h1>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className=" h-32 border-4 drop-shadow-lg border-[#269ED8] bg-[#fff]  grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center ">
            <img className='w-7 h-7' src={lamaranTerbaru} alt="" />Lowongan Terbaru
          </div>
          <div className="font-bold text-5xl">
            {activityCount?.loker_terbaru !== undefined ? activityCount?.loker_terbaru : '-'}
          </div>
        </div>
        <div className=" h-32 border-4 drop-shadow-lg border-[#12AE57] bg-[#fff] grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center">
            <img className='w-7 h-7' src={jumlahpelamar} alt="" /> Jumlah Pelamar
          </div>
          <div className="font-bold text-5xl">
            {activityCount?.jumlah_pelamar !== undefined ? activityCount?.jumlah_pelamar : '-'}
          </div>
        </div>
        <div className=" h-32 border-4 drop-shadow-lg border-[#FFC000] bg-[#fff]  grid grid-rows-2 p-3">
          <div className="font-bold flex gap-2 items-center">
            <img className='w-7 h-7' src={lamaranDiproses} alt="" /> Lamaran Yang Diproses
          </div>
          <div className="font-bold text-5xl">
            {activityCount?.lamaran !== undefined ? activityCount?.lamaran : '-'}
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
            <table className="table table-auto w-full">
              <thead className="bg-[#698E94] text-white">
                <tr>
                  <th className='text-center'>No</th>
                  <th className='text-center'>Posisi</th>
                  <th className='text-center'>Nama Lengkap</th>
                  <th className='text-center'>Nama Panggilan</th>
                  <th className='text-center'>Tempat Lahir</th>
                  <th className='text-center'>Tanggal Lahir</th>
                  <th className='text-center'>Agama</th>
                  <th className='text-center'>Jenis Kelamin</th>
                  <th className='text-center'>Pendidikan Terakhir</th>
                  <th className='text-center'>Status Pernikahan</th>
                  <th className='text-center'>Nomer Telepon</th>
                  <th className='text-center'>Nomer KTP</th>
                  <th className='text-center'>Nomer NPWP</th>
                  <th className='text-center'>Nomer KTA</th>
                  <th className='text-center'>Tinggi Badan</th>
                  <th className='text-center'>Berat Badan</th>
                  <th className='text-center'>Ukuran Baju</th>
                  <th className='text-center'>Ukuran Celana</th>
                  <th className='text-center'>Ukuran Sepatu</th>
                  <th className='text-center'>Alamat Tinggal</th>
                  <th className='text-center'>Lampiran</th>
                  <th className='text-center'>waktu</th>
                  <th className='text-center'>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {listPelamar?.map((item: listPelamarType, index) => {
                  return (
                    <tr key={item.id} className="bg-base-200">
                      <th className='text-center'>{index + 1}</th>
                      <td className='text-center'>{item.posisi}</td>
                      <td className='text-center'>{item.nama_lengkap}</td>
                      <td className='text-center'>{item.nama_panggilan}</td>
                      <td className='text-center'>{item.tempat_lahir}</td>
                      <td className='text-center'>{item.tgl_lahir}</td>
                      <td className='text-center'>{item.agama}</td>
                      <td className='text-center'>{item.jenis_kelamin}</td>
                      <td className='text-center'>{item.pendidikan_terakhir}</td>
                      <td className='text-center'>{item.status_pernikahan}</td>
                      <td className='text-center'>{item.no_telpon}</td>
                      <td className='text-center'>{item.no_ktp}</td>
                      <td className='text-center'>{item.no_npwp}</td>
                      <td className='text-center'>{item.no_kta}</td>
                      <td className='text-center'>{item.tinggi_badan}</td>
                      <td className='text-center'>{item.berat_badan}</td>
                      <td className='text-center'>{item.ukuran_baju}</td>
                      <td className='text-center'>{item.ukuran_celana}</td>
                      <td className='text-center'>{item.ukuran_sepatu}</td>
                      <td className='text-center'>{item.alamat}</td>
                      <td className='text-left'>
                        <a className='btn btn-outline btn-sm btn-info' href={`https://ujb.biz.id/api/requirement/download/${item.lampiran}`} download><BsDownload className='text-black' /></a>
                      </td>
                      <td>{item.date_time}</td>
                      <td className='flex flex-row gap-2'>
                        <button className=" btn-sm rounded-sm border border-green-400 " onClick={() => navigate('/dashboard/detail-pelamar', { state: { item } })}><IoEyeOutline className='text-black' /></button>
                        <button
                          className='btn-sm rounded-sm  border border-red-400'
                          type="button"
                          onClick={() => deletePelamar(item.id, item.posisi)}
                        >
                          <MdDelete className='text-red-500 ' />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <Pagination paginationInfo={paginationPelamar} handlePageClick={handleNextPelamar} />
        </div>
      </div>
      <div className="w-full h-fit bg-[#fff] rounded-md space-y-5 px-3 py-2">
        <p className="font-bold">List Lowongan</p>
        <div className="flex flex-row  gap-5">
          {/* create list lowongan  */}
          <ModalWrapper type='normal' title='Tambahkan Lowongan +' showModal={showModal} setShowModal={() => setShowModal(true)} style='btn bg-blue-500 text-xs btn-sm hover:bg-blue-600 text-white'>
            <ModalHeader closeModal={() => setShowModal(false)} reset={resetLowongan} title='Formulir Tambah Lowongan Kerja' />
            <section className='w-[30vw] flex flex-col justify-center space-y-5 p-5' >
              <div >
                <p className="py-1">Posisi</p>
                {idUpdate
                  ?
                  <input type="text" disabled placeholder="Type here" value={selectedLowongan?.posisi} className="input input-bordered input-sm w-full " />
                  :
                  <input type="text" placeholder="Type here" value={posisi} onChange={(e) => setPosisi(e.target.value)} className="input input-bordered input-sm w-full " />
                }
              </div>
              <div >
                <p className="py-1 flex items-center gap-4">
                  <p>Kualifikasi</p>
                  <button onClick={handleAddClick} className=' h-10 text-blue-500 max-w-xs rounded-md'>add+</button>
                </p>
                <div className='space-y-2  h-32 overflow-y-auto flex flex-row'>
                  <div className='space-y-2 w-full h-32 overflow-y-auto flex flex-col'>
                    {idUpdate
                      ? <>
                        {initialKualifikasiValues.map((_value, index) => (
                          <input
                            key={index}
                            type="text"
                            placeholder="Masukkan kualifikasi anda"
                            value={initialKualifikasiValues[index]}
                            onChange={(e) => handleInputChange(e, index)}
                            className="input input-bordered input-sm w-full max-w-md"
                          />
                        ))}
                      </>
                      : <>
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
                      </>}
                  </div>
                </div>
              </div>
              <div >
                <p className="py-1 flex items-center gap-4">
                  <p>Jobdesk</p>
                  <button onClick={handleAddClickJobdesk} className=' h-10 text-blue-500 max-w-xs rounded-md'>add+</button>
                </p>
                <div className='space-y-2 h-32 overflow-y-auto flex flex-col'>
                  {idUpdate
                    ? <>
                      {initialJobdeskValues.map((_value, index) => (
                        <input
                          key={index}
                          type="text"
                          placeholder="Masukan Jobdesk ANda"
                          value={initialJobdeskValues[index]}
                          onChange={(e) => handleInputChangeJobdesk(e, index)}
                          className="input input-bordered input-sm w-full max-w-md"
                        />
                      ))}</>

                    : <>
                      {inputJobdesk.map((value, index) => (
                        <input
                          key={index}
                          type="text"
                          placeholder="Masukan Jobdesk ANda"
                          value={value}
                          onChange={(e) => handleInputChangeJobdesk(e, index)}
                          className="input input-bordered input-sm w-full max-w-md"
                        />
                      ))}</>}

                </div>
              </div>
              <div className="modal-action">
                <label onClick={() => { setShowModal(false), resetLowongan() }} className="btn btn-outline text-xs px-5 hover:bg-gray-400 border hover:border-gray-500 border-gray-500 btn-sm">Batal</label>
                <label className="btn btn-success text-white text-xs px-5 btn-sm" onClick={idUpdate ? edit : save}>
                  {isLoading ? <div className='flex flex-row justify-center items-center gap-2'><span className="loading loading-spinner loading-sm">kirim</span> <span>Loading..</span></div> : 'kirim'}
                </label>
              </div>
            </section>
          </ModalWrapper>
          <input type="text" placeholder="Type here" onChange={(e) => setSearchTerm(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
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
                    <tr key={item.id} className="bg-base-200">
                      <th>{index + 1}</th>
                      <td>{item.posisi}</td>
                      <td key={index} className='
                      '>
                        {item.kualifikasi.map((item: string, index: number) => {
                          return (
                            <div key={index}>{index + 1}. {item}</div>
                          )
                        })}
                      </td>
                      <td >
                        {item.jobdesk.map((item: string, index) => {
                          return (
                            <div key={index} >{index + 1}. {item}</div>
                          )
                        })}
                      </td>
                      <td>{item.waktu}</td>
                      <td className='flex flex-row gap-2'>
                        <label onClick={() => handleUpdateLowongan(item)} className="btn btn-outline btn-sm rounded-sm btn-info border border-yellow-400"><TiEdit className='text-black' /></label>
                        <button
                          className='btn-sm rounded-sm  border border-red-400'
                          type="button"
                          onClick={() => deleteFunc(item.id, item.posisi)}
                        >
                          <MdDelete className='text-red-500 ' />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {/* pagination */}
            <Pagination paginationInfo={paginationInfo} handlePageClick={handlePageClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashbaord     