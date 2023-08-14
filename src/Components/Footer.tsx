import React from 'react'

export default function Footer() {
  return (
    <div className='bg-background px-[405px] py-12 sm:px-8' >
      <div className='grid grid-cols-2 pb-12 border-b-2 border-b-helper sm:border-hidden' >
        <div><img src="./images/logoheder.svg" /></div>
        <div className='flex gap-32 sm:hidden'>
          <div>
            <ul>
              <li><h6>About</h6></li>
              <li className='Paragraph_3_Regular text-black pt-2'>Home</li>
              <li className='Paragraph_3_Regular text-black pt-2'>About Us</li>
              <li className='Paragraph_3_Regular text-black pt-2'>Services</li>
              <li className='Paragraph_3_Regular text-black pt-2'>Solutions</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><h6>Information</h6></li>
              <li className='Paragraph_3_Regular text-black pt-2'>Contacts</li>
              <li className='Paragraph_3_Regular text-black pt-2'>Our team</li>
              <li className='Paragraph_3_Regular text-black pt-2'>Blog</li>
              <li className='Paragraph_3_Regular text-black pt-2'>FAQ</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><h6>Service</h6></li>
              <li className='Paragraph_3_Regular text-black pt-2'>Pages</li>
              <li className='Paragraph_3_Regular text-black pt-2'>Elements</li>
              <li className='Paragraph_3_Regular text-black pt-2'>Site map</li>
              <li className='Paragraph_3_Regular text-black pt-2'>FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=' flex justify-between  pt-12 sm:hidden border-b-2 border-b-helper '>
        <div className='flex gap-28 justify-between pb-12'>
          <div>
            <h6 className='text-black Headline_6_ExtraBold'>Contacts</h6>
            <div className='Paragraph_3_Regular text-black pt-4'>+1 601-201-5580</div>
            <div className='flex items-centr pt-2'>
              <div className='Headline_7_SemiBold  text-black'>ensome@info.co.us</div>
              <img src='./images/right.svg' className='w-4 h-6'></img>
            </div>
          </div>
          <div>
            <div className='Paragraph_3_Regular text-black pt-10 '>1642 Washington Avenue, Jackson, MS, 39201</div>
            <div className='flex items-centr pt-2'>
              <div className='Headline_7_SemiBold  text-black'>Driving derections</div>
              <img src='./images/right.svg' className='w-4 h-6'></img>
            </div>
          </div>
        </div>
        <div>
          <div className='text-black'>
            <h6 className='Headline_6_ExtraBold'>Social</h6>
          </div>
          <div className='flex gap-2 pt-4'>
            <img src="./images/facebook.svg" />
            <img src="./images/twitter.svg" />
            <img src="./images/linkedin.svg" />
            <img src="./images/youtube.svg" />
            <img src="./images/dribbble.svg" />
            <img src="./images/behance.svg" />
          </div>
        </div>
      </div>

      <div className='flex py-10 sm:hidden '>
        <div className='flex'>
          <div>Privacy policy</div>
          <img src='./images/right.svg' className='w-4 h-6'></img>
        </div>
        <div className='flex pl-36'>
          <div>Terms of us</div>
          <img src='./images/right.svg' className='w-4 h-6'></img>
        </div>
        <div className='pl-96'>
          <div className='pl-22'>© 2022 Ensome. All Rights Reserved.</div>
        </div>
      </div>

      {/* Phone screen footer */}
      <div className='sd:hidden' >
        <div className='flex flex-col items-start gap-8'>
          <div className='Headline_6_Bold border-b-2 border-grey flex justify-between w-full'>Quick link<img src='./images/down.svg' /></div>
          <div className='Headline_6_Bold border-b-2 border-grey  flex justify-between  w-full'>Service<img src='./images/down.svg' /></div>
          <div className='Headline_6_Bold border-b-2 border-grey  flex justify-between  w-full'>Cantact info<img src='./images/down.svg' /></div>
        </div>
      </div>
      <div className='sd:hidden flex pt-8 gap-8'>
        <div className='Headline_6_Bold'>Follow us</div>
        <div className='flex gap-2'>
          <img src="./images/facebook.svg" />
          <img src="./images/twitter.svg" />
          <img src="./images/linkedin.svg" />
          <img src="./images/youtube.svg" />
          <img src="./images/dribbble.svg" />
          <img src="./images/behance.svg" />
        </div>
      </div>
      <div className='pt-6 sd:hidden'>
        <div className='flex gap-8'>
          <div className='text-footer'>Privacy policy</div>
          <div className='text-footer'>Terms of us</div>
        </div>
        <div className='w-full h-[1px] bg-grey my-2'></div>
        <div className='text-footer text-grey'>Ensome© 2022 All Rights Reserved</div>
      </div>


    </div >
  )
}
