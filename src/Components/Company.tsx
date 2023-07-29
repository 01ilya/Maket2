import React from 'react'

export default function Company() {
  const infoCompany = [{ text1: '1830+', text2: 'Project executed', }, { text1: '220', text2: 'Project executed' }, { text1: '390', text2: 'Data management' }, { text1: '834+', text2: 'Satisfied customers' }];
  return (
    <div className='flex py-5 px-[405px] justify-center items-center shrink-0 bg-primary'>
      <div className='flex py-7 justify-center items-center '>
        {infoCompany.map(({ text1, text2, }: any) => {
          return (
            <div className='flex px-12  flex-col items-center w-64 border-l-grey border-l-[1px] first:border-0'>
              <div className='company'>{text1}</div>
              <div className='Paragraph_2_Bold text-white'>{text2}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
