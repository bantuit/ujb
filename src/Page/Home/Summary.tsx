import logo from '../../assets/logo-svg.svg';
import { IoIosArrowRoundForward } from "react-icons/io";


const Summary = () => {
  return (
    <div className=" h-[90vh] w-full flex justify-center items-center py-5 md:py-16">
      <div className="w-full min-h-fit h-full lg:h-full flex flex-col lg:flex-row flex-wrap lg:gap-5  justify-between items-center  ">
        <img className="w-1/2 h-1/5 md:h-1/2 md:w-1/4 drop-shadow-2xl" src={logo} alt="" />
        <div className="flex flex-col px-5 md:px-5 md:py-3 w-full md:w-[80vw] md:items-start justify-start lg:w-[70vw] space-y-2 text-white">
          <div className="font-bold text-3xl md:text-5xl">PT. URUSAN JAGA BANDA</div>
          <p className="text-md lg:text-2xl font-semibold ">Jalan Sunter Kemayoran No. 45A Sunter Jaya, Tanjung Priok,</p>
          <p className="text-md lg:text-2xl font-semibold ">Jakarta Utara 14350</p>
          <p className="text-md lg:text-2xl font-semibold ">Phone : +621 22652417 Email : urusanjagabanda20@gmail.com, </p>
          <p className="text-md lg:text-2xl font-semibold ">Web: http://ujb.co.id</p>
          <a href='#email' className="btn border-none btn-active btn-info text-white w-44" style={{ background: 'linear-gradient(to bottom, #2FE1C4, #2FE1C459)' }}>Bergabung <IoIosArrowRoundForward /></a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
