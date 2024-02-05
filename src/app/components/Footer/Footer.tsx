'use client'

import React from 'react'
import FooterLinks from './FooterLinks'
import Container from '../Container'

const Footer = () => {
    return (
        <footer className='h-[70rem] lg:h-[35rem] bg-zinc-800'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-16 lg:justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-4 pt-10 pl-10'>
                            <h1 className='text-white  text-5xl'>
                                James Kostohryz
                            </h1>
                            <p className='text-white font-roboto text-md max-w-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum, neque excepturi
                                tempora esse nulla quos deserunt maiores. Et consequuntur
                                suscipit dolorem repudiandae ut perspiciatis omnis provident deserunt harum ea.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <FooterLinks />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <h1 className=' text-4xl text-white'>Message</h1>
                        <div className='h-80 w-[27rem] md:w-[20rem] bg-zinc-300 rounded-md'>
                            <div className='grid grid-cols-2 flex-1 pt-9 px-4 gap-x-14 gap-y-7'>
                                <input type="text" className='bg-black opacity-50 rounded-full py-1 pl-2' placeholder='Name:' />
                                <input type="text" className='bg-black opacity-50 rounded-full py-1 pl-2' placeholder='Name:' />
                                <input type="text" className='bg-black opacity-50 rounded-full py-1 pl-2' placeholder='Name:' />
                                <input type="text" className='bg-black opacity-50 rounded-full py-1 pl-2' placeholder='Name:' />
                            </div>
                            <div className='flex items-center justify-center pt-8'>
                                <input className='h-24 w-[23rem] md:w-[18rem] bg-black opacity-50 rounded-sm p-2' placeholder='Your Message...' />
                            </div>
                            <div className='flex flex-row-reverse pr-6 pt-3'>
                                {/* <Button variant={'send'}>
                                    Send Message
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer