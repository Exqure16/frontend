import React from 'react';
import CreditCard from '../PaymentMethod/CreditCard';
import { Modal, Container } from 'react-bootstrap';

const AddPayment = ({ handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Container>
        <Modal.Header closeButton className='border-0 '>
          <Modal.Title className=''>Add card details</Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>
          <CreditCard onClose={handleClose} />
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default AddPayment;
