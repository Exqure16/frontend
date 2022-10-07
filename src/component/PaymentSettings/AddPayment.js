import React from 'react';
import CreditCard from './CreditCard';
import { Modal, Container } from 'react-bootstrap';

const AddPayment = ({
  handleClose,
  show,
  card_number,
  card_holder_name,
  cvv,
  expiry_date,
  setNumber,
  setName,
  setCvc,
  setExpiry,
  handleCard,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Container>
        <Modal.Header closeButton className='border-0 '>
          <Modal.Title className=''>Add card details</Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>
          <CreditCard
            onClose={handleClose}
            card_number={card_number}
            card_holder_name={card_holder_name}
            cvv={cvv}
            expiry_date={expiry_date}
            setNumber={setNumber}
            setName={setName}
            setCvc={setCvc}
            setExpiry={setExpiry}
            handleCard={handleCard}
          />
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default AddPayment;
