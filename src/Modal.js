import React from 'react';
import Button from './Button';
import './Modal.css';

function Modal({ message, header, open = true }) {
    return (
        open && (
            <div className='modal'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <span className='close'>&times;</span>
                        <h2>{header}</h2>
                    </div>
                    <div className='modal-body'>
                        <p>{message}</p>
                    </div>
                    <div className='modal-footer'>
                        <Button color='success'>Confirm</Button>
                        <Button color='danger'>Cancel</Button>
                    </div>
                </div>
            </div>
        )
    );
}

export default Modal;
