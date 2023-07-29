import React from 'react'
import Send from './assets/Send'

export default function ContactUs() {
  return (
    <div className='shrink-0 bg-background px-[405px] gap-32 py-32 flex items-center'>

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


      <div className='px-16 bg-white w-[445px] py-12 Shadow_card_2'>
        <h3 className='text-black Headline_3_ExtraBold'>Contact Us</h3>
        <div className='pt-7 Headline_8_SemiBold text-grey'>Name</div>
        <input type="text" placeholder='Andrea' className='placeholder-black Paragraph_3_SemiBold' />
        <div className='h-[1px] bg-black w-80'></div>
        <div className='pt-5 Headline_8_SemiBold text-grey'>Email</div>
        <input type="text" placeholder='Email andrea@gmaol.com' className='placeholder-black Paragraph_3_SemiBold' />
        <div className='h-[1px] bg-black w-80'></div>
        <div className='pt-5 Headline_8_SemiBold text-grey' >Theme</div>
        <input type="text" placeholder='job' className='placeholder-black Paragraph_3_SemiBold' />
        <div className='h-[1px] bg-black w-80'></div>
        <div className='pt-5 Headline_8_SemiBold text-grey'>Message</div>
        <input type="text" placeholder='Your message' className='placeholder-black Paragraph_3_SemiBold' />
        <div className='h-[1px] bg-black w-80'></div>

        <div className='pt-24 px-40'><Send></Send></div>
      </div>

    </div>
  )
}
