import React from 'react';
import Modal from 'react-modal';
import AddUser from './AddUser';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');
const AddUserModal = ({ modalIsOpen, closeModal }) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddUser closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default AddUserModal;