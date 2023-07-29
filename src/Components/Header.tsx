import React from 'react'
import WatchTheDemo from './assets/WatchTheDemo'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  return (
    <div className='flex justtify-center items-center gap-36 shrink-0 px-[405px] py-10 sm:flex sm:px-0'>


      <img src='./images/logoheder.svg' className='sm:pl-4'></img>

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
      <div className='flex justify-end pr-4 sd:hidden'>
        <AiOutlineMenu size={24} color="#185CFF" />
      </div>
      {/* <div className='bg-primary fixed left-0 top-0 w-[660px] h-full'>
        <ul className='fixed'>
          <li className='Headline_7_SemiBold text-grey hover:text-black hover:font-semibold'>Home</li>
          <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Solutions</li>
          <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Pages</li>
          <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Elements</li>
          <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Blog</li>
          <li className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Contacts</li>
        </ul>
      </div> */}

    </div>
  )
}
