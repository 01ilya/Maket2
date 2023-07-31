import React from 'react'

export default function Company() {
  const infoCompany = [{ text1: '1830+', text2: 'Project executed', }, { text1: '220', text2: 'Project executed' }, { text1: '390', text2: 'Data management' }, { text1: '834+', text2: 'Satisfied customers' }];
  return (
    <div className='flex py-5 px-[405px] justify-center items-center shrink-0 bg-primary sm:px-0'>
      <div className='flex py-7 justify-center items-center sm:flex-col'>
        {infoCompany.map(({ text1, text2, }: any) => {
          return (
            <div className='flex px-12  flex-col items-center w-64 border-l-grey sd:border-l-[1px] first:border-0 sm:border-t-[1px] sm:border-opacity-40'>
              <div className='company'>{text1}</div>
              <div className='Paragraph_2_Bold text-white sm:pb-8'>{text2}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
