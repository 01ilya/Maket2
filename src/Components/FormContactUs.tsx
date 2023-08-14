import React from 'react';

import { Formik } from 'formik';
import Send from './assets/Send'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Success = () => {
  toast.success('Success', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const ErrorEmail = () => {
  toast.error('Email is not correct!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const ErrorName = () => {
  toast.error('Name is not correct!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};


const SignupSchema = yup.object().shape({
  name: yup.string()
    .min(1,)
    .required(ErrorName),
  email: yup.string().email(ErrorEmail),
});

const Basic = () => (
  <div className='px-16 bg-white w-[445px] py-12 Shadow_card_2 sm:hidden'>
    <h3 className='text-black Headline_3_ExtraBold'>Contact Us</h3>

    <Formik
      initialValues={{ name: '', email: '', theme: '', message: '', }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        Success()
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      }) => (

        <form onSubmit={handleSubmit} autoComplete='off' >
          <div className='pt-7 Headline_8_SemiBold text-grey'>Name*</div>
          <input
            type={`name`}
            name={`name`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder='Andrea'
            className='placeholder-black Paragraph_3_SemiBold outline-none border-b-[1px] border-b-black w-full' />

          {errors.name && touched.name ? (<div>{errors.name}</div>) : null}

          <div className='pt-5 Headline_8_SemiBold text-grey'>Email*</div>
          <input
            type={`email`}
            name={`email`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='Email andrea@gmaol.com'
            className='placeholder-black Paragraph_3_SemiBold outline-none border-b-[1px] border-b-black w-full' />

          {errors.email && touched.email ? (<div>{errors.email}</div>) : null}

          <div className='pt-5 Headline_8_SemiBold text-grey' >Theme</div>
          <input
            type={`theme`}
            name={`theme`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.theme}
            placeholder='job'
            className='placeholder-black Paragraph_3_SemiBold outline-none border-b-[1px] border-b-black w-full' />



          <div className='pt-5 Headline_8_SemiBold text-grey'>Message</div>
          <input
            type={`message`}
            name={`message`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            placeholder='Your message'
            className='placeholder-black Paragraph_3_SemiBold outline-none border-b-[1px] border-b-black w-full' />

          <button type={`submit`} className='pt-24 px-40' onClick={handleChange} disabled={!isValid && !dirty}><Send /></button>
          <ToastContainer />
        </form>

      )}
    </Formik>
  </div>
);

export default Basic;