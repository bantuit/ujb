import React from 'react'


interface ModalProps {
    children: React.ReactNode
    showModal: boolean
    setShowModal: () => void
    style:string
    title:string

}

const ModalWrapper = ({ children, showModal, setShowModal, style, title }: ModalProps) => {
    return (
        <>
            <button
                className={style}
                type="button"
                onClick={setShowModal}
            >
                {title}
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ModalWrapper