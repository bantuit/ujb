import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import dashboardService from "../../Services/Api/DashboardService";
import { listLowonganType } from "../../Type/DashboardType";
import { queryparamsType } from "../../Type/PaginationType";
import Pagination from "../../Component/Pagination";


const LowonganKerja = () => {
  const navigate = useNavigate(); // Corrected typo in the variable name
  const [cookies] = useCookies(['token']);
  const [dataLowongan, setDataLowongan] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  const [paginationLowongan, setPaginationLowongan] = useState<queryparamsType>({
    PageNumber: 1,
    TotalPages: 1,
    PageSize: 10,
    TotalCount: 0,
    SearchTerm: '',
    HasNext: true
  });

  const handlePageClick = (pageNumber: number) => {
    const updatedPaginationInfo = {
      ...paginationLowongan,
      PageNumber: pageNumber
    };
    getData(cookies.token, updatedPaginationInfo);
  };

  const getData = async (token: string, queryparams: queryparamsType) => {
    try {
      const response = await dashboardService.listLowongan(token, queryparams);
      setDataLowongan(response.data.data);
      const paginationData = await JSON.parse(response.headers['x-pagination']);
      setPaginationLowongan({
        PageNumber: paginationData.page_number,
        TotalPages: paginationData.total_page,
        PageSize: paginationData.page_size,
        TotalCount: paginationData.total_count,
        HasNext: paginationData.has_next
      });
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(cookies.token, paginationLowongan);
  }, []);

  return (
    <div className='h-fit min-h-screen mb-20 flex flex-col justify-start pt-10 items-center gap-10 py-44 '>
      <h1 className='text-4xl font-bold z-20 lg:text-white'>Lowongan Kerja</h1>
      {isLoading ? ( 
        <div className="w-full h-96 flex justify-center">
        <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <div className='flex flex-row flex-wrap gap-5 justify-center md:px-10'>
          {dataLowongan?.map((item: listLowonganType, index: number) => {
            return (
              <>
                <div key={index} className="card w-80 bg-base-100 shadow-xl">
                  <div className="card-body flex justify-between items-center space-y-5">
                    <h2 className="card-title text-center ">{item.posisi}</h2>
                    <div className="h-full w-full"> 
                      <p className="font-bold">Kualifikasi:</p>
                      {item.kualifikasi?.map((item: string, index) => {
                        return (
                          <p key={index} className='text-sm'>{index + 1} {item}</p>
                        )
                      })}
                      <p className="font-bold">Jobdesk:</p>
                      {item.jobdesk?.map((item: string, index) => {
                        return (
                          <p key={index} className='text-sm'>{index + 1} {item}</p>
                        )
                      })}
                    </div>
                    <div className="card-actions items-end justify-end mt-10">
                      <button className="btn btn-outline btn-info" onClick={() => navigate(`/karir/lamar-kerja/${item.posisi}`)}>Lamar Sekarang <IoIosArrowRoundForward /></button>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
          <div className="w-full flex justify-center">
            <Pagination paginationInfo={paginationLowongan} handlePageClick={handlePageClick} />
          </div>

        </div>
      )}
    </div>
  )
}

export default LowonganKerja;
