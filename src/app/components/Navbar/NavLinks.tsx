import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react'

function NavLinks() {
  return (
    <>
      {NavItems.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            <div className='font-rhd text-sm hover:bg-sky-400 rounded-sm px-3 py-2 hover:text-white transition duration-300 ease-in-out'>
              {item.label}
            </div>
          </Link>
        );
      })}
    </>
  )
}

export default NavLinks