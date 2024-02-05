import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react'

function NavLinks() {
  return (
    <>
      {NavItems.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            <div className='font-rhd text-sm'>
              {item.label}
            </div>
          </Link>
        );
      })}
    </>
  )
}

export default NavLinks