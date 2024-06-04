import React from 'react'


const Card = ({title, content} : AboutProps) => {
  return (
    <div className='w-72 h-72 rounded-md shadow-md bg-white group hover:bg-homeblue'>
        <div className='h-16 text-center pt-4'>
            <h1 className='text-2xl group'>{title}</h1>
        </div>
        <div className='h-3 bg-homeblue group-hover:bg-white'></div>
        <div className='text-center pt-20 flex items-center justify-center'>
            <span className='max-w-xs text-xl'>{content}</span>
        </div>
    </div>
  )
}

export default Card