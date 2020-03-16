import React from 'react';

const Modal = ({showModal, children, hideModal}) => {



    return (
        showModal && <div className="modal is-active">
            <div className="modal-background" onClick={hideModal}/>
            <div className="modal-content">
                {children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={hideModal}/>
        </div>
    )
}

export default Modal
