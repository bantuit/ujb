import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
    title: string
    closeModal: () => void
}


const ModalHeader = ({ title, closeModal }: ModalProps) => {
    return (
        <>
            <div className='w-full flex justify-end p-3'>
                <label onClick={closeModal} className=""><IoCloseSharp className='text-2xl cursor-pointer' /></label>
            </div>
            <h3 className="font-bold text-sm   w-full text-center">{title}</h3>

        </>
    )
}

export default ModalHeader