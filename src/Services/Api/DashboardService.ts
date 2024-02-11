import { createLowonganType } from "../../Type/DashboardType";
import { queryparamsType } from "../../Type/PaginationType";
import { baseUrl } from "../BaseUrl/index";



const CreateLowongan = async (token: string, body: createLowonganType) => {
  return baseUrl.post(`/api/job`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const UpdateLowongan = async (token: string, body: createLowonganType) => {
  return baseUrl.put(`/api/job/${body.id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const listLowongan = async (token: string, queryparams?:queryparamsType) => {
  return baseUrl.get(`/api/job`, {
    params: queryparams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const deleteLowongan = async (token: string,id:string) => {
  return baseUrl.delete(`/api/job/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const deletePelamar = async (token: string,id:string) => {
  return baseUrl.delete(`/api/requirement/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const GetActivityCount = async (token: string) => {
  return baseUrl.get(`/api/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const ListPelamar = async (token: string, queryparams?:queryparamsType) => {
  return baseUrl.get(`/api/requirement`, {
    params: queryparams,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const dropdowPosisi = async (token: string) => {
  return baseUrl.get(`/api/requirement/dropdown-position`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const downloadLampiran = async (lampiran:string) => {
  return baseUrl.get(`https://ujb.biz.id/api/requirement/download/${lampiran}`, {
    headers: {
      'Content-Type': 'application/pdf'
    },
  });
};

const dashboardService = {
  CreateLowongan,
  UpdateLowongan,
  listLowongan,
  deleteLowongan,
  GetActivityCount,
  ListPelamar,
  deletePelamar,
  dropdowPosisi,
  downloadLampiran
};

export default dashboardService;
