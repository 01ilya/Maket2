import React from 'react'
import LernMore from './assets/LernMore'
import DiscoverMore from './assets/DiscoverMore'

export default function Features2() {
   return (
      <div>
         <div className='flex  gap-28 items-center justify-center pt-20 pb-8 sm:flex-col'>
            <div>
               <img src="./images/il3.png" />
            </div>

            <div className=' gap-8  w-[540px]  sm:w-80 '>
               <h1 className='shadow-text sm:w-80 sm:drop-shadow-none'>Radically new data solutions</h1>
               <div className='Paragraph_1_Regular text-grey pt-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
               <div className='flex justify-start pt-9 gap-5 '>
                  <button className='sm:hidden'>
                     <LernMore />
                  </button>
                  <button className='sm:w-full sd:hidden'>
                     <DiscoverMore />
                  </button>
               </div>

            </div>

         </div>

      </div>
   )
}