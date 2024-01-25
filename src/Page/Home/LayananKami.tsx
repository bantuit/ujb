import { IoIosArrowRoundForward } from 'react-icons/io';
import securityIcon from '../../assets/security.svg'
import cleaningIcon from '../../assets/cleaning.svg'
import ParkirIcon from '../../assets/parkir.svg'
import getolIcon from '../../assets/getol.svg'
import Rectangle1 from '../../assets/rectangle1.svg'
import Rectangle2 from '../../assets/rectangle2.svg'


const LayananKami = () => {
  return (
    <div className="h-fit lg:h-fit px-5 w-full flex flex-col items-center space-y-7 py-10  ">
      <h1 className="font-bold text-center text-6xl">Layanan Kami</h1>
      <div className="w-full h-fit flex justify-center items-center gap-3 flex-wrap ">
        <div className="card w-64 h-96  bg-base-100 shadow-xl border-t-8 border-[#006FC0]  ">
          <div className="card-body flex flex-col items-center">
            <img className="w-28 h-20" src={securityIcon} alt="" />
            <h2 className="card-title">Jasa Keamanan</h2>
            <p className="text-xs w-full">Jasa Keamanan dengan nama “CENTENG”. Beberapa layanan kami yaitu : Penyedia Tenaga Pengamanan, Konsultasi Keamanan, dsb. </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-info">
                Selengkapnya
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-64 h-96 bg-base-100 shadow-xl border-t-8 border-[#006FC0]">
          <div className="card-body flex flex-col items-center">
            <img className="w-28 h-20" src={cleaningIcon} alt="" />
            <h2 className="card-title">Jasa Kebersihan</h2>
            <p className="text-xs">Jasa kebersihaan dan perawatan gedung dengan nama kinclong fasility service, beberapa layanan kami : Cleaning, Home Care, Office Support, dsb. </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-info">
                Selengkapnya
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-64 h-96 bg-base-100 shadow-xl border-t-8 border-[#006FC0]">
          <div className="card-body flex flex-col items-center">
            <img className="w-28 h-20" src={ParkirIcon} alt="" />
            <h2 className="card-title">Perparkiran</h2>
            <p className="text-xs">Jawara parkir yaitu perusahaan swasta nasional yang bergerak di bidang Suplier dan Jasa. Layanan : Management perparkiran, Design & Landscape lahan parkir, dsb. </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-info">
                Selengkapnya
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-64 h-96 bg-base-100 shadow-xl border-t-8 border-[#006FC0]">
          <div className="card-body flex flex-col items-center">
            <img className="w-28 h-20" src={getolIcon} alt="" />
            <h2 className="card-title">Penyediaan SDM</h2>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Viverra blandit sit ut massa pharetra vitae ornare senectus egestas. Enim in nulla nullam.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-info">
                Selengkapnya
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className='absolute left-20 top-80 -md:right-20 md:top-[150vh]  ' src={Rectangle2} alt="" />
      <img className='absolute left-0 top-60 md:left-0 lg:top-[150vh] ' src={Rectangle1} alt="" />
    </div>
  );
};

export default LayananKami;
