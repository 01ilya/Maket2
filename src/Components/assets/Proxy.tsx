import React from 'react'

export default function Proxy() {
  const Array = [{ text: 'Proxy' }, { text: 'VPN' }]
  return (
    <div className='flex gap-8 pt-3'>
      {Array.map(({ text, }: any) => {
        return (
          <button className='flex px-3 py-1 items-center gap-2 rounded-md  outline-2 outline outline-background hover:bg-primary hover:text-white proxy text-primary  '>
            {text}
          </button>
        )
      })}
    </div>
  )
}
