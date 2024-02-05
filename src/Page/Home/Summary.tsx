import logo from '../../assets/logo-svg.svg';
import { IoIosArrowRoundForward } from "react-icons/io";


const Summary = () => {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center py-5 md:py-16">
      <div className="w-full min-h-fit h-full lg:h-full flex flex-col lg:flex-row flex-wrap lg:gap-5 justify-center items-center  ">
        <img className="w-1/2 h-1/5 md:h-1/3 md:w-1/3 " src={logo} alt="" />
        <div className="flex flex-col px-5 md:px-10 md:py-3 w-full md:w-[80vw] md:items-start lg:w-[60vw] space-y-2">
          <div className="font-bold text-3xl md:text-4xl">PT. URUSAN JAGA BANDA</div>
          <p className="text-md lg:text-xl font-semibold ">Jalan Sunter Kemayoran No. 45A Sunter Jaya, Tanjung Priok,</p>
          <p className="text-md lg:text-xl font-semibold ">Jakarta Utara 14350</p>
          <p className="text-md lg:text-xl font-semibold ">Phone : +621 22652417 Email : urusanjagabanda20@gmail.com, </p>
          <p className="text-md lg:text-xl font-semibold ">Web: http://ujb.co.id</p>
          <button className="btn border-none btn-active btn-info text-white w-44" style={{ background: 'linear-gradient(to bottom, #2FE1C4, #2FE1C459)' }}>Bergabung <IoIosArrowRoundForward /></button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
