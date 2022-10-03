import React from 'react';
import CreditCard from './CreditCard';
import { Modal, Container } from 'react-bootstrap';

const AddPayment = ({ handleClose, show, addCard }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Container>
        <Modal.Header closeButton className='border-0 '>
          <Modal.Title className=''>Add card details</Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>
          <CreditCard onClose={handleClose} addCard={addCard} />
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default AddPayment;
