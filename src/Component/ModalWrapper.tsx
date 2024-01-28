import React from 'react'


interface ModalProps {
    id:string;
    children: React.ReactNode
}

const ModalWrapper = ({id, children }: ModalProps) => {
    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                {children}
                </div>
            </div>
        </div>
    )
}

export default ModalWrapper