import React, { useState, useEffect } from 'react';
import './Comingsoon.css';
import { Row, Col } from 'react-bootstrap';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  };
  return (
    <div>
      <form className='newsletter' onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Col>
            {status === 'sending' && (
              <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === 'success' && (
              <div
                style={{ color: 'green' }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            <input
              type='email'
              name='email'
              placeholder='your@email.com'
              className='ComingSoonInput'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Col>
          <Col className=''>
            <button
              type='submit'
              className='ComingSoonEmail'
              id='newsletter'
              formValue={[email]}
              // onClick={(e) => handleSubmit(e)}
            >
              Notify Me!
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CustomForm;
