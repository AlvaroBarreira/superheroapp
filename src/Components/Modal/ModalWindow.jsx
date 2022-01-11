import React, { useContext } from 'react'
import './ModalWindow.css';
import Modal from 'react-bootstrap/Modal';
import { HeroeContext } from '../../Contexts/HeroesContext';

function ModalWindow() {

   const {setModal, modal, modalData} = useContext(HeroeContext)

    const handleClose = () => setModal(false);

    return (
        <>
        <Modal  
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centeredclassName="modal" 
          show={modal} 
          onHide={handleClose}
        >
          <Modal.Header closeButton className="header">
            
          </Modal.Header>
          <Modal.Body className="body">
            <div className="img-container">
            <img className="modal-image" src={modalData.image} alt="modal-hero"/>
            </div>
            
            <div className="text-container">
            <Modal.Title className="title-name">{modalData.name}</Modal.Title>
            <p className="text">Alignment: {modalData.alignment}</p>
            <p className="text">Alter Egos: {modalData.alterEgos}</p>
            <p className="text">Full Name: {modalData.fullName}</p>
            <p className="text">Occupation: {modalData.ocupation}</p>
            <p className="text">Hair color: {modalData.hair}</p>
            <p className="text">Eye color: {modalData.eye}</p>
            <p className="text">Weight: {modalData.weight}</p>
            <p className="text">Height: {modalData.height}</p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default ModalWindow
