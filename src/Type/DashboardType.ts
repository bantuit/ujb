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

export interface createLowonganType {
  id?: string;
  posisi: string;
  kualifikasi: {
    item: string;
  }[];
  jobdesk: {
    item: string;
  }[];

}
[];

export interface listLowonganType {
  id: string;
  posisi: string;
  kualifikasi: [string];
  jobdesk: [string];
  waktu: string;
}
[];

export interface ActivityCountType {
  loker_terbaru: number;
  jumlah_pelamar: number;
  lamaran: number;
}
