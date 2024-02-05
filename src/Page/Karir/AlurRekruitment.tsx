import { useEffect, useState } from 'react';
import alurRekruitment from '../../assets/alurSeleksi.png'
import alurRekruitmentMd from '../../assets/alurSeleksiMd.png'
import alurRekruitmentSm from '../../assets/alurSeleksiSm.png'

const AlurRekruitment = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let selectedImage;
  if (screenWidth <= 414) {
    selectedImage = alurRekruitmentSm;
  } else if (screenWidth <= 884) {
    selectedImage = alurRekruitmentMd;
  } else {
    selectedImage = alurRekruitment;
  }

  return (
    <div className='h-fit flex flex-col justify-start items-center pt-10 z-20 bg-[#F3F1F1] '>
      <h1 className='text-4xl font-extrabold z-20'>Alur Rekruitment</h1>
      <div className='w-full h-fit grid grid-col-1 md:flex md:flex-row md:items-center'>
        <img src={selectedImage} alt="" className='w-full z-20' />
      </div>
    </div>
  )
}

export default AlurRekruitment