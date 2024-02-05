import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import dashboardService from "../../Services/Api/DashboardService";
import { listLowonganType } from "../../Type/DashboardType";
import { LIST_LOWONGAN } from "../../Const/Dashboard";
import { queryparamsType } from "../../Type/PaginationType";


const LowonganKerja = () => {
  const navigaet = useNavigate()
  const [cookies] = useCookies(['token']);
  const [dataLowongan, setDataLowongan] = useState(LIST_LOWONGAN)


  const getData = async (token: string) => {
    try {
      const params: queryparamsType= {
        PageSize: 10,
        PageNumber: 1,
      }

      const response = await dashboardService.listLowongan(token, params)
      setDataLowongan(response.data.data)
      console.log('g', response.data)
    } finally { /* empty */ }
  }

  useEffect(() => {
    getData(cookies.token)
  },[])


  return (
    <div className='h-fit flex flex-col justify-start pt-10 items-center gap-10 py-44 '>
      <h1 className='text-4xl font-extrabold z-20 '>Lowongan Kerja</h1>
      <div className='flex flex-row flex-wrap gap-5 justify-center md:justify-start md:px-10'>
        {dataLowongan?.map((item:listLowonganType, index: number) => {
          return (
            <div key={index} className="card w-80 bg-base-100 shadow-xl">
              <div className="card-body flex items-center ">
                <h2 className="card-title text-center ">{item.posisi}</h2>
                <div>
                  <p>Kualifikasi:</p>
                  {item.kualifikasi?.map((item:string,index) => {
                    return(
                      <p key={index} className='text-sm'>{index + 1} {item}</p>
                    )
                  })}
                </div>
                <div className="card-actions justify-end mt-10">
                  <button className="btn btn-outline btn-info" onClick={() => navigaet('/karir/lamar-kerja')}>Lamar Sekarang <IoIosArrowRoundForward /></button>
                </div>
              </div>
            </div>
          )
        })}



      </div>
    </div>
  )
}

export default LowonganKerja