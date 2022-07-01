import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Comingsoon.css';

const CustomForm = ({ showNotification, configureNotification }) => {
  const [state, setState] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setState({ email: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.email) {
      fetch(`/api/memberadd?emai=${this.state.email}`)
        .then((res) =>
          res.json().then((data) => ({ status: res.status, body: data }))
        )
        .then((obj) => {
          configureNotification(obj);
          showNotification();
        })
        .catch((err) => console.log(err));

      setState({ email: '' });
    }
    // email &&
    //   email.indexOf('@') > -1 &&
    //   onValidated({
    //     EMAIL: email.value,
    // });
  };
  return (
    <div>
      <form className='newsletter' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Your email'
          className='ComingSoonInput'
          value={state.email}
          onChange={handleChange}
        />
        <input
          type='submit'
          value={'Get Verified'}
          className='ComingSoonEmail'
          id='newsletter'
        />
      </form>
    </div>
  );
};

CustomForm.propTypes = {
  configureNotification: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
};

export default CustomForm;
