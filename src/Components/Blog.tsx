import React from 'react'
import LernMore from './assets/LernMore'
import Proxy from './assets/Proxy'
import VPN from './assets/VPN'


export default function Blog() {
  const Array = [{ text1: '22 June 2020', text2: 'Sed ut perspiciatis unde omnis at vero blanditils', text3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...' }, { text1: '22 June 2020', text2: 'Sed ut perspiciatis unde omnis at vero blanditils', text3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...' }, { text1: '22 June 2020', text2: 'Sed ut perspiciatis unde omnis at vero blanditils', text3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...' }];

  return (
    <div className='flex py-24 px-[405px] flex-col justify-center items-center gap-12 bg-tertiary'>
      <div>
        <h1>Glad to help your success</h1>
      </div>
      <div className='flex items-start gap-8 pb-12'>
        {Array.map(({ text1, text2, text3 }: any) => {
          return (
            <div className='flex pt-8 px-9 pb-12 flex-col items-start gap-5 bg-white'>
              <div className='text-grey'>{text1}</div>
              <div>
                <h4>{text2}</h4>
                <div className='text-grey pt-5'>{text3} </div>
                <div className='flex gap-8 pt-3'>
                  <Proxy />
                  <VPN />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <button>
        <LernMore></LernMore>
      </button>
    </div>
  )
}
