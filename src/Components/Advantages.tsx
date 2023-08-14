import React from 'react'
import Slider from 'react-slick';
import AdvantagesCarusel from './AdvantagesCarusel';

export default function Advantages() {
  return (
    <div className='flex flex-col items-center justify-center gap-12 py-24 px-[404px] bg-background sm:px-0 sm:block'>

      <div className='flex flex-col items-center gap-12'>
        <h1 className='text-black w-[500px]  text-center sm:w-auto'>Why our clients chosse Ensome?</h1>
        <div className=' Paragraph_1_Regular text-grey text-center w-[540px] sm:w-auto'>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
      </div>
      <div>
        <AdvantagesCarusel></AdvantagesCarusel>
      </div>
    </div>
  )
}
