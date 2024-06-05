import React from 'react'

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='w-[37.50rem] h-[36.81rem] flex items-center justify-center bg-white shadow-lg rounded-b-full lg:rounded-r-full lg:rounded-b-full lg:rounded-bl-none lg:rounded-tr-full lg:rounded-br-full'>
        {children}
    </div>
  )
}

export default Card