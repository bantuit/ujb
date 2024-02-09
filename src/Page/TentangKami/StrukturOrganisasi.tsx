import { useEffect, useState } from 'react';
import organisasi from '../../assets/organisasi.png'
import organisasiSm from '../../assets/organisasiSm.png'


const StrukturOrganisasi = () => {
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
    selectedImage = organisasiSm;
  } else if(screenWidth <= 767){
    selectedImage = organisasi;
  } else {
    selectedImage = organisasi;
  }

  return (
    <div className='h-fit flex flex-col justify-start items-center pt-10 z-20'>
      <h1 className='text-4xl font-extrabold z-20'>Alur Rekruitment</h1>
      <div className='w-full h-fit grid grid-col-1 justify-center md:flex md:flex-row md:items-center z-20'>
        <img src={selectedImage} alt="" className='w-auto h-[900px] md:h-[700px] z-20' />
      </div>
    </div>
  )
}

export default StrukturOrganisasi