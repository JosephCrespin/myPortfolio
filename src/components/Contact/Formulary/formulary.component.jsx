import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './formulary.styles.scss';

const formSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Formulary = () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xknkoonr',
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, 'Thanks for contacting!');
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={handleOnSubmit}
      validationSchema={formSchema}
    >
      {({ isSubmitting }) => (
        <Form className='formulary' noValidate>
          <div className='formulary__fieldWrapper'>
            <div>
              <label htmlFor='name'>Name:</label>
              <Field id='name' type='text' name='name' />
            </div>
            <ErrorMessage name='name' className='errorMsg' component='p' />
          </div>
          <div className='formulary__fieldWrapper'>
            <div>
              <label htmlFor='email'>Email:</label>
              <Field id='email' type='email' name='email' />
            </div>
            <ErrorMessage name='email' className='errorMsg' component='p' />
          </div>
          <div className='formulary__fieldWrapper'>
            <label htmlFor='message'>Message:</label>
            <Field id='message' name='message' component='textarea' />
            <ErrorMessage name='message' className='errorMsg' component='p' />
          </div>
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
          {serverState && (
            <p className={!serverState.ok ? 'errorMsg' : ''}>
              {serverState.msg}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Formulary;
