import { baseUrl } from "../BaseUrl/index";


const login = async (body:{username:string, password:string}) => {
  return baseUrl.post(`/api/authentication`, body);
};

const authServices = {  
  login 
};

export default authServices;