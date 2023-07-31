import React from 'react'
import Subscribe from './assets/Subscribe'

export default function Sub() {
  return (
    <div className='flex bg-primary py-20 px-[405px] justify-center items-centr gap-32 shrink-0 sm:px-8 sm:flex-col sm:gap-8'>

      <div>
        <h2 className='text-white  sm:text-center'>Subscribe to our newsletter</h2>
        <div className='Paragraph_1_Regular text-white pt-6 sm:hidden'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
      </div>

      <div className='flex items-centr justify-center h-11 rounded-md mt-10 sm:flex-col sm:gap-8 '>

        <input type="text" className='bg-grey sm:py-3 rounded-l-md sm:rounded-md sm:w-full w-72 placeholder-black Paragraph_3_SemiBold sm:Paragraph_3_SemiBold sm:bg-primary sm:outline-white sm:outline-2 sm:outline sm:placeholder-white' placeholder='  You email' />
        <button className='flex items-center bg-white rounded-r-md justify-center w-32 h-11 sm:hidden '><h6 className='Headline_6_ExtraBold text-black'>Send</h6></button>
        <button className='sd:hidden'><Subscribe /></button>
      </div>

    </div>
  )
}
