import React from 'react';
import { Container } from 'react-bootstrap';
import './Comingsoon.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm';

const MailchimpFormContainer = (props) => {
  const posturl = `https://gmail.us13.list-manage.com/subscribe/post?u=c5d9a93b3fa374fb078c5f179&id=cd968e9778`;
  return (
    <div>
      <Container>
        <MailchimpSubscribe
          url={posturl}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </Container>
    </div>
  );
};

export default MailchimpFormContainer;
