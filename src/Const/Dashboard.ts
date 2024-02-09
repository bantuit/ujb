import {
  ActivityCountType,
  DropdownPositiontType,
  listLowonganType,
  listPelamarType,
} from "../Type/DashboardType";

export const LIST_PELAMAR: Partial<listPelamarType>[] = [
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    posisi: "string",
    nama_lengkap: "string",
    tempat_lahir: "string",
    tgl_lahir: "string",
    alamat: "string",
    jenis_kelamin: "string",
    status_pernikahan: "string",
    no_telpon: "string",
    no_ktp: "string",
    no_npwp: "string",
    no_kta: "string",
    tinggi_badan: "string",
    berat_badan: "string",
    ukuran_baju: "string",
    ukuran_celana: "string",
    agama: "string",
    lampiran: "string",
  },
];
export const LIST_LOWONGAN: listLowonganType[] = [
  {
    id: "adbakhsdbadbhacasd",
    posisi: "programer",
    kualifikasi: ["pendidikan Min SLTA"],
    jobdesk: ["Jaga keamanan 24 Jam"],
    waktu: "20-01-2024 08:40:05",
  },
  {
    id: "adbakhsdbadbhacasd",
    posisi: "programer",
    kualifikasi: ["pendidikan Min SLTA"],
    jobdesk: ["Jaga keamanan 24 Jam"],
    waktu: "20-01-2024 08:40:05",
  },
  {
    id: "adbakhsdbadbhacasd",
    posisi: "programer",
    kualifikasi: ["pendidikan Min SLTA"],
    jobdesk: ["Jaga keamanan 24 Jam"],
    waktu: "20-01-2024 08:40:05",
  },
];
export const ACTIVITY_COUNT: ActivityCountType = {
  loker_terbaru: 23,
  jumlah_pelamar: 12,
  lamaran: 22,
};

export const DROPDOWN_POSITION:DropdownPositiontType[] = [
  {
    posisi: "string",
  },
];
