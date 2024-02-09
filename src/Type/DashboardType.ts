export interface listPelamarType {
  id: string;
  posisi: string;
  nama_lengkap: string;
  nama_panggilan: string;
  tempat_lahir: string;
  tgl_lahir: string;
  alamat: string;
  jenis_kelamin: string;
  status_pernikahan: string;
  no_telpon: string;
  no_ktp: string;
  no_npwp: string;
  no_kta: string;
  tinggi_badan: string;
  berat_badan: string;
  ukuran_baju: string;
  ukuran_celana: string;
  agama: string;
  lampiran: string;
  pendidikan_terakhir: string;
  ukuran_sepatu: string;
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
export interface DropdownPositiontType {
  posisi: string;
}[]
