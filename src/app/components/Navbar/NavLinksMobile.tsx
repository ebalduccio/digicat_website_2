import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react'

const NavLinksMobile = () => {
    return (
        <>
            {NavItems.map((item, index) => {
                return (
                    <Link key={index} href={item.href}>
                        <div className='w-full h-12 flex ml-4 items-center rounded bg-white active:bg-black active:text-white duration-200 hover:bg-black hover:text-white'>
                            <div className='pl-2 font-roboto text-sm'>
                                {item.label}
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    )
}

export default NavLinksMobile