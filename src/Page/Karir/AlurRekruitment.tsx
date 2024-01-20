import React from 'react'
import bar from '../../assets/bar.svg'

const AlurRekruitment = () => {
  return (
    <div className='h-screen flex flex-col justify-start pt-10 items-center gap-10'>
      <h1 className='text-4xl font-extrabold'>Alur Rekruitment</h1>
      <div className='bg-red-400 w-full h-full grid grid-col-1 md:flex md:flex-row md:items-center  '>
        <img className='w-48 md:w-24' src={bar} alt="" />
        <img className='w-48 md:w-24 md:relative md:right-20 md:top-16' src={bar} alt="" />
        <div className='md:relative bg-blue-400 h-fit'>
          <img className='w-48 md:w-24 md:relative md:right-32 md:top-32 ' src={bar} alt="" />
          <img className='w-48 md:w-24 md:relative md:right-8  md:top-16' src={bar} alt="" />
          <img className='w-48 md:w-24 md:relative md:left-20  ' src={bar} alt="" />
        </div>
        <img className='w-48 md:w-24 md:relative md:left-10 md:top-16' src={bar} alt="" />
        <div className='md:relative bg-blue-400 h-fit'>
          <img className='w-48 md:w-24 md:relative md:right-2 md:top-20' src={bar} alt="" />
          <img className='w-48 md:w-24 md:relative md:left-44  md:top-16' src={bar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AlurRekruitment