import React from 'react'

const StatMiniCard = ({icon , number , label}) => {
  return (
    <div className='bg-[#d2d0d0] text-[#262626] rounded-2xl p-4 flex flex-col item-center gap-3 justify-center text-center'>
       <i className={`${icon} text-2xl  opacity-70`}></i>
       <h2 className='text-4xl font-bold   mb-2'>{number}</h2>
       <p className='text-sm opacity-70 '>{label}</p>
    </div>
  )
}

export default StatMiniCard
