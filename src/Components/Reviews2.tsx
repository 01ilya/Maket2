import React from 'react'

export default function Reviews2() {
  return (

    <div>
      <div className=' flex px-[405px] pt-24 sm:px-8 sm:flex-col'>


        <div className='w-[445px] h-32 sm:w-full sm:text-center'>
          <h1 className='Headline_1_ExtraBold'>Trusted by the best in the business</h1>
        </div>


        <div className='  flex items-start gap-2 pt-10 pl-96 sm:pl-44 sm:pt-0'>
          <button className='bg-tertiary w-28 h-14 rounded-xl sm:w-12 sm:h-10' ><img src='./images/left.svg' className='px-10 sm:px-2' /></button>
          <button className='bg-tertiary  w-28 h-14 rounded-xl sm:w-12 sm:h-10'><img src='./images/right.svg' className='px-10 sm:px-2' /></button>
        </div>

      </div>
      <div className=' flex  justify-center items-center px-[404px] py-28 gap-10 sm:px-8 sm:overflow-x-scroll sm:justify-start sm:w-full'>

        <div className='flex pt-20 px-9 pb-9 flex-col items-start rounded-md Shadow_card_3'>
          <div className='-mt-32'><img src='./images/person1.svg'></img></div>
          <div className='pt-8'>
            <div className='Paragraph_2_Regular text-grey pb-8 sm:w-64'>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” </div>
            <div className='Headline_6_Bold text-black'>Alex Bern</div>
            <div className='Paragraph_3_Regular text-grey'>CEO by PixelPerfect</div>
          </div>
        </div>


        <div className='flex pt-20 px-9 pb-9  flex-col items-start rounded-md Shadow_card_3'>
          <div className='-mt-32'><img src='./images/person2.svg'></img></div>
          <div className='pt-8'>
            <div className='Paragraph_2_Regular text-grey pb-8 sm:w-64'>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” </div>
            <div className='Headline_6_Bold text-black'>Alex Bern</div>
            <div className='Paragraph_3_Regular text-grey'>CEO by PixelPerfect</div>
          </div>
        </div>


      </div>
    </div>
  )
}
