import React from 'react'

export default function Reviews() {
  return (
    <div className=' flex px-[405px] pt-24'>


      <div className='w-[445px] h-32'>
        <h1 className='Headline_1_ExtraBold'>Trusted by the best in the business</h1>
      </div>


      <div className='  flex items-start gap-4 pt-10 pl-96'>
        <button className='bg-tertiary w-28 h-14 rounded-md' ><img src='./images/left.svg' className='px-10' /></button>
        <button className='bg-tertiary  w-28 h-14 rounded-md'><img src='./images/right.svg' className='px-10' /></button>
      </div>

    </div>
  )
}
