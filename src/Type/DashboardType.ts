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
  date_time: string;
}
[];

export interface createLowonganType {
  id?: string;
  posisi: string | undefined;
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


interface FormField {
  label: string;
  name: string;
  type: 'text' | 'date' | 'dropdown' | 'number' | 'group' | 'radio';
  options?: string[]; // Only required for dropdown and radio types
}

interface FormGroup {
  name: string;
  type: 'group';
  data: FormField[];
}

type FormItem = FormField | FormGroup;

// Define interface for the array of form items
export interface FormItemsType extends Array<FormItem> {}
