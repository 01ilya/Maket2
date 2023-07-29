import React from 'react'
import LernMore from './assets/LernMore'
import DiscoverMore from './assets/DiscoverMore'

export default function Features1() {
   return (
      <div>
         <div className='flex px-10 gap-28 items-center justify-center pt-20 pb-8 sm:flex-col-reverse'>
            <div className=' gap-8  w-[540px] sm:w-auto'>
               <h1 className='text-black  drop-shadow-3xl sm:w-80 sm:drop-shadow-none'>The newest business analytics platform</h1>
               <div className='Paragraph_1_Regular text-grey pt-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
               <div className='flex justify-start pt-9 gap-5'>
                  <button className='sm:hidden'>
                     <LernMore />
                  </button>
                  <button className='sm:w-full sd:hidden'>
                     <DiscoverMore />
                  </button>
               </div>

            </div>
            <div className='sm:w-80 sm:h-64'>
               <img src="./images/il2.png" />
            </div>
         </div>

      </div>
   )
}
