import React from 'react'

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='px-[2rem] py-[2rem] rounded-lg flex items-center justify-center bg-white bg-opacity-50 shadow-lg'>
      {children}
    </div>
  )
}

export default Card