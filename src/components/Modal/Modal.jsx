import { Component } from "react";
import { createPortal } from 'react-dom';
import {Overlay, ModalEl} from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick =(e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }
    
    render () {
        return createPortal (
            <Overlay  onClick={this.handleBackdropClick}>
                <ModalEl>{this.props.children}</ModalEl>
            </Overlay>,
            modalRoot,
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};