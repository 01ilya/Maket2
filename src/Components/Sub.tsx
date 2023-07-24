import React from 'react'

export default function Sub() {
  return (
    <div className='flex bg-primary py-20 px-[405px] justify-center items-centr gap-32 shrink-0'>

      <div>
        <h2 className='text-white'>Subscribe to our newsletter</h2>
        <div className='Paragraph_1_Regular text-white pt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
      </div>

      <div className='flex items-centr justify-center h-11 rounded-md mt-10'>

        <input type="text" className='bg-grey rounded-l-md w-72 placeholder-black Paragraph_3_SemiBold' placeholder='  You email' />
        <button className='flex items-center bg-white rounded-r-md justify-center w-32 h-11 '><h6 className=' text-black'>Send</h6></button>

      </div>

    </div>
  )
}
