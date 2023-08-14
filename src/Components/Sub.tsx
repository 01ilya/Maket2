import React from 'react'

import Subscribe from './assets/Subscribe'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
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


export default function Sub() {

  const submit = (event: any) => {
    event.preventDefault()
    var Data = event.target.emailForm.value

    console.log(Data)
  };


  return (
    <div className='flex bg-primary py-20 px-[405px] justify-center items-centr gap-32 shrink-0 sm:px-8 sm:flex-col sm:gap-8'>
      <div>
        <h2 className='text-white  sm:text-center'>Subscribe to our newsletter</h2>
        <div className='Paragraph_1_Regular text-white pt-6 sm:hidden'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
      </div>
      <form onSubmit={submit} autoComplete='off' target='_self'>
        <div className='flex items-centr justify-center h-11 rounded-md mt-10 sm:flex-col sm:gap-8 '>
          <input id='emailForm' required={true} type="email" className='bg-grey sm:py-3 rounded-l-md sm:rounded-md sm:w-full w-72 placeholder-black Paragraph_3_SemiBold sm:Paragraph_3_SemiBold sm:bg-primary px-2  sm:outline-white sm:outline-2 sm:outline sm:placeholder-white outline-none' placeholder='You email' />
          <button type="submit" onClick={notify} className='flex items-center bg-white rounded-r-md justify-center w-32 h-11 sm:hidden '><h6 className='Headline_6_ExtraBold text-black'>Send</h6></button>
          <ToastContainer />
          <button type='submit' className='sd:hidden'><Subscribe /></button>
        </div>
      </ form>
    </div >
  )
}
