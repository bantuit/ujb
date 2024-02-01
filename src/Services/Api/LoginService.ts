import { baseUrl } from "../BaseUrl/index";


const login = async (body:any) => {
  return baseUrl.post(`/api/login`, body);
};

const authServices = {  
  login 
};

export default authServices;