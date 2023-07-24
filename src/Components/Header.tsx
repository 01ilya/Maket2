import React from 'react'
import WatchTheDemo from './assets/WatchTheDemo'

export default function Header() {
  return (
    <div className='flex justtify-center items-center gap-36 shrink-0 px-[405px] py-10'>


      <img src='./images/logoheder.svg'></img>

      <ul className=' flex gap-10'>
        <button className='Headline_7_SemiBold text-grey hover:text-black hover:font-semibold'>Home</button>
        <button className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Solutions</button>
        <button className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Pages</button>
        <button className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Elements</button>
        <button className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Blog</button>
        <button className='Headline_7_Medium text-grey  hover:text-black hover:font-semibold'>Contacts</button>
      </ul>
      <button >
        <WatchTheDemo></WatchTheDemo>
      </button>
    </div>
  )
}
