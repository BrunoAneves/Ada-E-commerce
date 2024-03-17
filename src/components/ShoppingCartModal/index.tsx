
import React from "react";
import Modal from "react-modal";
import ShoppingCart from "../ShoppingCart";
import B from './styles.module.css'
import S from './styles.module.css'


Modal.setAppElement("#root");

interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
}

const customStyles = {
    overlay: {

        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {

        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(0,0,0,0.7',
        maxWidth: '600px',
        maxHeight: '80vh',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1',
    },

};


const ShoppingCartModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {



    return (

        <Modal

            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Shopping Cart"
            style={customStyles}
            className={S.modalContent}
        >
            <button className={B.buttonCart} onClick={onRequestClose}>X</button>
            <ShoppingCart />

        </Modal>
    );
};

export default ShoppingCartModal;
