import { useEffect } from "react";
import { createPortal } from 'react-dom';
import {Overlay, ModalEl} from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modal ({onClose, children}) {

useEffect (() => {
    const handleKeydown = (e) => {
        if (e.code === 'Escape') {
            onClose();
        }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => {
        window.removeEventListener('keydown', handleKeydown)
    }
}, [onClose]);

    const handleBackdropClick =(e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }
    
        return createPortal (
            <Overlay  onClick={handleBackdropClick}>
                <ModalEl>{children}</ModalEl>
            </Overlay>,
            modalRoot,
        )   
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};