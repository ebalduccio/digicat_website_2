import { TextProps } from '@/interfaces'
import React from 'react'

const BlueText = ({ content }: TextProps) => {
    return (
        <span className="text-sky-400">{content}</span>
    )
}

export default BlueText