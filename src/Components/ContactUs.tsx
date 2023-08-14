import React from 'react'


import Basic from './FormContactUs'



export default function ContactUs() {
  return (
    <div className='shrink-0 bg-background px-[405px] gap-32 py-32 flex items-center sm:px-4'>
      <div>
        <div>
          <h2 className='text-black'>Left questions? Contacts us now for a free consultation and free trial!</h2>
          <div className='Paragraph_2_Regular text-grey pt-7'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</div>
        </div>
        <div className='pt-10'>
          <div className='Paragraph_2_Regular text-grey'>Email address</div>
          <div className='Paragraph_2_Bold text-black'>ensome@info.co.us</div>
          <div className='Paragraph_2_Regular text-grey pt-4'>Phone number</div>
          <div className='Paragraph_2_Bold text-black'>+1601-201-5580</div>
          <div className='Paragraph_2_Regular text-grey pt-4'>Address</div>
          <div className='Paragraph_2_Bold text-black'>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</div>
        </div>
      </div>

      <Basic />
    </div >
  )
}
