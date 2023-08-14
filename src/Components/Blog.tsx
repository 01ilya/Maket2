import React from 'react'

import LernMore from './assets/LernMore'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSlider from './BlogSlider';



export default function Blog() {
  return (
    <div className='flex py-24 px-[405px] flex-col justify-center items-center gap-12 bg-tertiary sm:px-5 sm:block'>
      <div>
        <h1>Glad to help your success</h1>
      </div>
      <BlogSlider />
      <button className='sm:w-full sm:pt-10'>
        <LernMore></LernMore>
      </button>
    </div>
  )
}
