import React from 'react'

import LernMore from './assets/LernMore'
import DiscoverMore from './assets/DiscoverMore'

interface DataItems {
   header: string;
   text: string;
   img: string;
}

export default function Features1() {
   const DataFeatures: DataItems[] = [{ header: 'The newest business analytics platform', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', img: './images/il2.png' }, { header: 'Radically new data solutions', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', img: './images/il3.png' }];
   return (
      <div>
         {
            DataFeatures.map(({ header, text, img }) => {
               return (
                  <div className='flex px-10 gap-28 items-center justify-center pt-20 pb-8 sm:flex-col-reverse sm:last:flex-col-reverse last:flex-row-reverse '>
                     <div className=' gap-8  w-[540px] sm:w-auto'>
                        <h1 className='text-black  drop-shadow-3xl sm:w-80 sm:drop-shadow-none'>{header}</h1>
                        <div className='Paragraph_1_Regular text-grey pt-7'>{text}</div>
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
                        <img src={img} />
                     </div>
                  </div>
               )
            })
         }
      </div>
   )
}