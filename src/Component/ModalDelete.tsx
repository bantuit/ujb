import ModalWrapper from './ModalWrapper'
import circleDelete from '../assets/circleDelete.svg'
import deleteImg from '../assets/deleteImg.svg'
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
    id: string
    posisi: string
    deleteData: () => void
}


const  ModalDelete = ({ id, posisi, deleteData }: ModalProps) => {
    console.log(posisi)
    return (
        <ModalWrapper id={id}>
            <div className='w-full flex justify-end'>
                <label htmlFor={id} className=""><IoCloseSharp className='text-2xl cursor-pointer' /></label>
            </div>
            <div className='w-full h-96 flex flex-col flex-center items-center space-y-2'>
                <div className='w-full flex justify-center'>
                    <img src={circleDelete} alt="trash" className='w-1/2 relative' />
                    <img src={deleteImg} alt="trash" className='w-1/4 top-20 absolute' />

                </div>
                <p className='font-extrabold'>Anda Yakin Ingin Menghapus?</p>
                <p className='text-center text-sm'>Jika anda menghapus list lowongan kerja dengan nama lengkap putra. Maka anda akan kehilangan nama lengkap putra .</p>
                <div className='space-x-3'>
                    <label htmlFor={id} className="btn btn-sm btn-outline text-gray-500 font-thin px-5 border-gray-500 ">Batal</label>
                    <button className="btn btn-sm btn-error text-white font-thin px-5" onClick={deleteData}>Delete</button>
                </div>
            </div>
        </ModalWrapper>
    )
}

export default ModalDelete