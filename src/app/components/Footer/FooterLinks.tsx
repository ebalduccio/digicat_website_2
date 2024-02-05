import { FooterContact, FooterQuickLinks, FooterResources } from '@/constants';
import Link from 'next/link'
import React from 'react'

const FooterLinks = () => {
    return (
        <>
            <div className='pt-10 pl-10 text-white flex gap-20'>
                <ul className='text-2xl min-h-auto'> Quick Links
                    <li className='text-base pt-2'>
                        {FooterQuickLinks.map((item, index) => {
                            return (
                                <Link key={index} href={item.href}>
                                    <div className='px-4 py-2 hover:bg-zinc-500 w-38 duration-300 rounded'>
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </li>
                </ul>
                <ul className='text-2xl'> Resources
                    <li className='text-base pt-2'>
                        {FooterResources.map((item, index) => {
                            return (
                                <Link key={index} href={item.href}>
                                    <div className='px-4 py-2 hover:bg-zinc-500 w-38 duration-300 rounded'>
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </li>
                </ul>
                <ul className='text-2xl'> Contact
                    <li className='text-base pt-2'>
                        {FooterContact.map((item, index) => {
                            return (
                                <Link key={index} href={item.href}>
                                    <div className='px-4 py-2 hover:bg-zinc-500 w-38 duration-300 rounded'>
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default FooterLinks