import React from 'react'
import LernMore from './assets/LernMore'

export default function Features2() {
  return (
    <div>
        <div className='flex  gap-28 items-center justify-center pt-20 pb-8'>
     <div>
        <img src="./images/il3.png"/>
     </div>

     <div className=' gap-8  w-[540px] '>
        <h1 className='#'>Radically new data solutions</h1>
        <div className='Paragraph_1_Regular text-grey pt-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
        <div className='flex justify-start pt-9 gap-5 '>
            <button><LernMore/></button>
        </div>

     </div>
     
    </div>

    </div>
  )
}