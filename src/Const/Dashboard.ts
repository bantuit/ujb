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
export const FORM_PELAMAR = [
  {
    label: 'Nama Lengkap',
    name: 'NamaLengkap',
    type: 'text',
},
{
    label: 'Nama Panggilan',
    name: 'NamaPanggilan',
    type: 'text',
},
{
    label: 'Tempat Lahir',
    name: 'TempatLahir',
    type: 'text',
},
{
    label: 'Tanggal Lahir',
    name: 'TglLahir',
    type: 'date',
},
{
    label: 'Agama',
    name: 'Agama',
    type: 'dropdown',
    options: ['Islam', 'Kristen Protestan', 'Kristen Katolik', 'Hindu', 'Buddha', 'Khonghucu'],
},
{
    label: 'Pendidikan Terakhir',
    name: 'PendidikanTerakhir',
    type: 'text',
},
{
    label: 'Status Pernikahan',
    name: 'StatusPernikahan',
    type: 'dropdown',
    options: ['Belum Menikah', 'Menikah'],

},
{
    label: 'Nomer Telepon ',
    name: 'NoTelpon',
    type: 'number',
},
{
    label: 'Nomer KTP',
    name: 'NoKtp',
    type: 'number',
},
{
    label: 'Nomer NPWP',
    name: 'NoNpwp',
    type: 'number',
},
{
    label: 'Nomer KTA',
    name: 'NoKta',
    type: 'text',
},
{
    name: 'group1',
    type: 'group',
    data: [
        {
            label: 'Tinggi Badan',
            name: 'TinggiBadan',
            type: 'number',
        }, {
            label: 'Berat Badan',
            name: 'BeratBadan',
            type: 'number',
        },
    ]
},
{
    name: 'group2',
    type: 'group',
    data: [
        {
            label: 'Ukuran Baju',
            name: 'UkuranBaju',
            type: 'text',
        },
        {
            label: 'Ukuran Celana',
            name: 'UkuranCelana',
            type: 'text',
        },
    ]
},
{
    name: 'group3',
    type: 'group',
    data: [
        {
            label: 'Jenis Kelamin',
            name: 'JenisKelamin',
            type: 'radio',
            options: ['Laki-laki', 'Perempuan'],
        },
        {
            label: 'Ukuran Sepatu',
            name: 'ukuranSepatu',
            type: 'number',
        },
    ]
},
];
