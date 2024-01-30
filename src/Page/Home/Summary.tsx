import logo from '../../assets/logo-svg.svg';

const Summary = () => {
  return (
    <div className="h-fit w-full flex justify-center items-center py-16">
      <div className="w-full min-h-fit h-full lg:h-full flex flex-col md:flex-row  flex-wrap gap-5 justify-center items-center  ">
        <img className="h-1/3 w-1/6 " src={logo} alt="" />
        <div className="flex flex-col px-10 md:py-3 w-full md:w-1/2 space-y-2">
          <div className="font-extrabold text-4xl">PT. URUSAN JAGA BANDA</div>
          <p className="text-xl font-semibold ">Jalan Sunter Kemayoran No. 45A Sunter Jaya, Tanjung Priok,</p>
          <p className="text-xl font-semibold ">Jakarta Utara 14350</p>
          <p className="text-xl font-semibold ">Phone : +621 22652417 Email : urusanjagabanda20@gmail.com, </p>
          <p className="text-xl font-semibold ">Web: http://ujb.co.id</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
