import React from 'react';
import logo from '../../assets/logo-svg.svg';

const Summary = () => {
  return (
    <div className="h-fit w-full flex justify-center items-center py-16">
      <div className="w-full min-h-fit h-full lg:h-full bg-[#269ED808] flex flex-col md:flex-row  flex-wrap gap-5 justify-center items-center  ">
        <img className="h-1/3 w-1/4 " src={logo} alt="" />
        <div className="flex flex-col gap-3 px-10 md:py-3 w-full md:w-1/2">
          <h2 className="font-extrabold text-4xl">PT. urusan Jaga Banda</h2>
          <p className="text-base font-semibold text-[#698E94] ">
            PT. Urusan Jaga Banda adalah salah satu perusahaan yang bergerak dibidang pelayanan jasa, dan sedang berkembang pesat dalam melayani kebutuhan jasa di seluruh Indonesia. Perusahaan yang berdiri pada tanggal 01 Desember 2020
            didukung dengan sarana fasilitas lengkap serta sistem teknologi yang menyesuaikan dengan kebutuhan pengguna jasa.
          </p>
          <p className="font-semibold text-base text-[#698E94]">
            Bertekad untuk menjadi Perusahaan Jasa yang berkualitas, Profesional dan dapat dipercaya dibidang Jasa Pengamanan, Jasa Kebersihan, Jasa Layanan Parkir serta Penyedia Jasa Tenaga Kerja bagi seluruh Mayarakat Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
