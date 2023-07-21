import React from 'react'
import LernMore from './assets/LernMore'
import WatchTheDemoWhite from './assets/WatchTheDemoWhite'

export default function Find() {
  return (
    <div className='#'>
    <div className='flex px-10 gap-[30px] items-center justify-center'>
     <div className=' gap-8  w-[540px]'>
        <h1 className='#'>Find true power in your data with Ensome</h1>
        <div className='Paragraph_1_Regular text-grey pt-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        <div className='flex justify-start pt-9 gap-5 '>
            <button><LernMore/></button>
            <button><WatchTheDemoWhite/></button>
        </div>

     </div>
     <div>
        <img src="./images/il01.png"/>
     </div>
    </div>
     
     
     <div className='flex gap-2 justify-center'>
        <img src="./images/hed1.svg" />
        <img src="./images/hed2.svg" />
        <img src="./images/hed3.svg" />
        <img src="./images/hed4.svg" />
        <img src="./images/hed5.svg" />
        <img src="./images/hed6.svg" />
     </div>

    
    </div>
  )
}
