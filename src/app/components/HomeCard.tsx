import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link';

import React from 'react'

type CardProps = {
    title: string;
    content: string;
    icon: any;
    icon2?: any;
    className?: string;
}

const HomeCard: React.FC<CardProps> = ({ title, content, icon, icon2, className }) => {
    return (
        <div className={cn("bg-white w-[22rem] h-[33rem] rounded-[1.8rem] shadow-md", className)}>
            <div className="flex flex-col items-center justify-center gap-10 my-6 px-10">
                <div className='flex'>
                    <Image
                        src={icon}
                        alt="icon"
                        width={80}
                        height={80}
                    />
                    {
                        icon2 && (
                            <Image
                                src={icon2}
                                alt=""
                                width={80}
                                height={80}
                            />
                        )
                    }
                </div>
                <h1 className="text-3xl text-center font-rhd">{title}</h1>
                <p>{content}</p>
                <Link href={'/'}>
                    <button className="w-40 h-11 bg-sky-400 hover:bg-sky-700 duration-300 flex items-center justify-center rounded-[64px]">
                        <p className="text-white font-semibold tracking-wide">SAIBA MAIS</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomeCard