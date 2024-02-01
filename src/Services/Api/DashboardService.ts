import { baseUrl } from "../BaseUrl/index";


const CreateLowongan = async (token: string, body: any) => {
    return baseUrl.post(`/api/tambah-lowongan`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

const dashboardService = {  
    CreateLowongan 
};

export default dashboardService;