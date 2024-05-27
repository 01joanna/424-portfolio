import React from 'react';

const Modal = ({ show, onClose, title, content }) => {
    if (!show) return null;

    const handleClose = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50" onClick={handleClose}>
            <div className="bg-white w-2/5 h-full p-8 overflow-auto relative">
                <button onClick={onClose} className="text-black absolute top-2 right-2 text-3xl">
                    &times;
                </button>
                <h2 className="text-2xl mb-4">{title}</h2>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Modal;
