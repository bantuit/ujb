import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
    id: string
    title: string
}


const ModalHeader = ({id, title}:ModalProps) => {
    return (
        <>
            <div className='w-full flex justify-end'>
                <label htmlFor={id} className=""><IoCloseSharp className='text-2xl cursor-pointer' /></label>
            </div>
            <h3 className="font-bold text-sm   w-full text-center">{title}</h3>
            
        </>
    )
}

export default ModalHeader