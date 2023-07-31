import React, { useState } from 'react'
import WatchTheDemo from './assets/WatchTheDemo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justtify-center items-center gap-36 shrink-0 px-[405px] py-10 sm:flex sm:px-0'>


      <img src='./images/logoheder.svg' className='sm:hidden'></img>

      <ul className=' flex gap-10 justtify-between sm:hidden'>
        <li className='Headline_7_SemiBold text-grey hover:text-black hover:font-semibold'>Home</li>
        <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Solutions</li>
        <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Pages</li>
        <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Elements</li>
        <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Blog</li>
        <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Contacts</li>
      </ul>
      <button className='sm:hidden'>
        <WatchTheDemo></WatchTheDemo>
      </button>
      <div className='flex justify-between items-center w-full pr-5 sd:hidden  ' onClick={handleNav}>

        {!nav ? <img src='./images/logohederwhite.svg' className='sm:pl-4 z-50 w-[157px]' /> : <img src='./images/logoheder.svg' className='sm:pl-4' />}
        {!nav ? <AiOutlineClose size={24} className="z-50" color='#FFFF' /> : <AiOutlineMenu size={24} color='#185CFF' />}

      </div>
      <div className={!nav ? 'bg-primary fixed top-0 w-full h-full pt-28' : 'hidden'}>
        <ul className='flex flex-col gap-3 px-6'>
          <li className='Headline_7_Medium text-white border-b-2 border-helper flex justify-between'>Home <img src="./images/down-white.svg" /></li>
          <li className='Headline_7_Medium text-white  border-b-2 border-helper flex justify-between'>Solutions <img src="./images/down-white.svg" /></li>
          <li className='Headline_7_Medium text-white  border-b-2 border-helper flex justify-between'>Pages <img src="./images/down-white.svg" /></li>
          <li className='Headline_7_Medium text-white  border-b-2 border-helper flex justify-between'>Elements <img src="./images/down-white.svg" /></li>
          <li className='Headline_7_Medium text-white  border-b-2 border-helper flex justify-between'>Blog <img src="./images/down-white.svg" /></li>
          <li className='Headline_7_Medium text-white  border-b-2 border-helper flex justify-between'>Contacts <img src="./images/down-white.svg" /></li>
        </ul>
        <div className='flex pt-16 px-6 gap-11'>
          <div className='Headline_6_Bold text-white '>Follow us</div>
          <div className='flex gap-2'>
            <img src="./images/facebook-white.svg" />
            <img src="./images/twitter-white.svg" />
            <img src="./images/linkedin-white.svg" />
            <img src="./images/youtube-white.svg" />
            <img src="./images/dribbble-white.svg" />
            <img src="./images/behance-white.svg" />
          </div>
        </div>
      </div>

    </div>
  )
}
