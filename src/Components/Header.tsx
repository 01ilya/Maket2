import React from 'react'
import WatchTheDemo from './assets/WatchTheDemo'

export default function Header() {
  return (
    <div className='flex justtify-center items-center gap-36 shrink-0 px-[405px] py-10'>
      
      <div>
        <img src='./images/logoheder.svg'></img>
      </div>
    <ul className=' flex gap-10'>
      <li className='Headline_7_SemiBold text-black'>Home</li>
      <li className='Headline_7_Medium text-grey'>Solutions</li>
      <li className='Headline_7_Medium text-grey'>Pages</li>
      <li className='Headline_7_Medium text-grey'>Elements</li>
      <li className='Headline_7_Medium text-grey'>Blog</li>
      <li className='Headline_7_Medium text-grey'>Contacts</li>
    </ul>
    <button>
      <WatchTheDemo></WatchTheDemo>
      </button>
    </div>
  )
}
