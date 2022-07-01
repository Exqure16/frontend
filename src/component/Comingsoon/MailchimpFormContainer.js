import React from 'react';
import MailChimp from 'react-mailchimp-form';
import './Comingsoon.css';

const MailchimpFormContainer = ({ props }) => {
  return (
    <MailChimp
      className='newsletter'
      action='https://gmail.us12.list-manage.com/subscribe/post?u=874b2555389d9846b510b1fc4&amp;id=c58fcf8079'
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Your Email',
          type: 'text',
          required: true,
          validate: true,
          className: 'ComingSoonInput',
        },
      ]}
    />
  );
};
export default MailchimpFormContainer;
