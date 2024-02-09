import ModalWrapper from './ModalWrapper'
// import circleDelete from '../assets/circleDelete.svg'
import deleteImg from '../assets/deleteImg.svg'
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
    id: string
    modalDelete:boolean
    deleteData: (id: string) => void
    openModal: () => void
    closeModal: () => void
}


const ModalDelete = ({ id, deleteData, openModal, closeModal, modalDelete }: ModalProps) => {
    // const [showModal, setShowModal] = React.useState(false);

    return (
        <ModalWrapper title='delete' showModal={modalDelete} setShowModal={openModal} style='btn btn-outline btn-sm rounded-sm btn-info border border-red-400'>
            <div className='w-fit h-fit p-5 flex flex-col flex-center items-center space-y-4'>
                <div className='w-full flex justify-end p-3'>
                    <label onClick={closeModal} className=""><IoCloseSharp className='text-2xl cursor-pointer' /></label>
                </div>
                <div className='w-full flex justify-center'>
                    {/* <img src={circleDelete} alt="trash" className='w-1/3 relative' /> */}
                    <img src={deleteImg} alt="trash" className='w-1/4 top-20 ' />

                </div>
                <p className='font-semibold text-sm'>Anda Yakin Ingin Menghapus?</p>
                <p className='text-center w-96 text-xs'>Jika anda menghapus list lowongan kerja sebagain . Maka anda akan kehilangan Lowongan .</p>
                <div className='space-x-3'>
                    <label onClick={closeModal} className="btn btn-sm btn-outline text-gray-500 font-thin px-5 border-gray-500 ">Batal</label>
                    <button className="btn btn-sm btn-error text-white font-thin px-5" onClick={() => deleteData(id)}>Delete</button>
                </div>
            </div>
        </ModalWrapper>




        // <ModalWrapper id={id}>
        //     <div className='w-full flex justify-end'>
        //         <label htmlFor={id} className=""><IoCloseSharp className='text-2xl cursor-pointer' /></label>
        //     </div>
        //     <div className='w-full h-96 flex flex-col flex-center items-center space-y-2'>
        //         <div className='w-full flex justify-center'>
        //             <img src={circleDelete} alt="trash" className='w-1/2 relative' />
        //             <img src={deleteImg} alt="trash" className='w-1/4 top-20 absolute' />

        //         </div>
        //         <p className='font-extrabold'>Anda Yakin Ingin Menghapus?</p>
        //         <p className='text-center text-sm'>Jika anda menghapus list lowongan kerja dengan nama lengkap putra. Maka anda akan kehilangan nama lengkap putra .</p>
        //         <div className='space-x-3'>
        //             <label htmlFor={id} className="btn btn-sm btn-outline text-gray-500 font-thin px-5 border-gray-500 ">Batal</label>
        //             <button className="btn btn-sm btn-error text-white font-thin px-5" onClick={deleteData}>Delete</button>
        //         </div>
        //     </div>
        // </ModalWrapper>
    )
}

export default ModalDelete