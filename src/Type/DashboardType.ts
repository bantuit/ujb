export interface listPelamarType {
  id: string;
  posisi: string;
  nama_lengkap: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  status: string;
  alamat: string;
  lampiran: string;
  keterangan: string;
  waktu: string;
}
[];

export interface listLowonganType {
  id: string;
  posisi: string;
  kualifikasi: {
    item: string;
  }[];
  jobdesk: {
    item: string;
  }[];
  waktu: string;
}
[];
