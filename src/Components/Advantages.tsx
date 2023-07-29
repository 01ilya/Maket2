import React from 'react'

export default function Advantages() {
  const Array = [{ img: './images/icon1.svg', text1: 'Machine learning', text2: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' }, { img: './images/icon2.svg', text1: 'Embed analytics', text2: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' }, { img: './images/icon3.svg', text1: 'Access control', text2: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' }];
  return (
    <div className='flex flex-col items-center justify-center gap-12 py-24 px-[404px] bg-background sm:px-0'>
      <div className='flex flex-col items-center gap-12'>
        <h1 className='text-black w-[500px]  text-center sm:w-auto'>Why our clients chosse Ensome?</h1>
        <div className=' Paragraph_1_Regular text-grey text-center w-[540px] sm:w-auto'>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
      </div>
      <div className='flex justify-center items-center gap-8 sm:w-full sm:overflow-x-scroll sm:justify-start sm:px-8 '>
        {Array.map(({ text1, text2, img }: any) => {
          return (
            <div className='flex w-auto px-9 py-12 flex-col items-start gap-8 bg-white rounded-md '>
              <img src={img}></img>
              <div className='sm:flex sm:flex-col  sm:justify-center sm:items-start sm:w-64 sm:gap-8'>
                <h4 className='text-black Headline_4_ExtraBold'>{text1}</h4>
                <div className='Paragraph_2_Regular text-grey'>{text2}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
