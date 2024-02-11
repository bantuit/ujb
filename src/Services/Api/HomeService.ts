import { baseUrl } from "../BaseUrl/index";


const email = async (body:{to:string}) => {
  return baseUrl.post(`/api/email`, body);
};

const homeServices = {  
  email 
};

export default homeServices;