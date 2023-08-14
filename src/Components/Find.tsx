import React from 'react'

import LernMore from './assets/LernMore'
import WatchTheDemoWhite from './assets/WatchTheDemoWhite'
import FindSlider from './FindSlider'

export default function Find() {
   return (
      <div>
         <div className='flex px-10  gap-8 items-center justify-center  sm:flex-col-reverse sm:justify-center sm:items-centr sm:gap-8 '>
            <div className=' gap-8  w-[540px] sm:w-auto '>
               <h1 className='sm:w-80 '>Find true power in your data with Ensome</h1>
               <div className='md:Paragraph_1_Regular sm:Paragraph_3_Regular text-grey pt-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
               <div className='flex justify-start pt-9 gap-5 sm:w-auto sm:flex-col sm:items-centr'>
                  <button><LernMore /></button>
                  <button><WatchTheDemoWhite /></button>
               </div>
            </div>
            <img src="./images/il01.png" />
         </div>
         <FindSlider />
      </div>
   )
}
