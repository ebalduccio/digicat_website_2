'use client'

import { NavItems } from '@/constants';
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const FooterLinks = () => {
    return (
        <>
            {NavItems.map((item, index) => {
                return (
                    <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link href={item.href}>
                            <div className='font-rhd text-md hover:bg-sky-400 rounded-sm px-3 py-2 transition duration-300 ease-in-out'>
                                {item.label}
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </>
    )
}

export default FooterLinks