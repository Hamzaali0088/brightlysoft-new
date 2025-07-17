import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export default function Heading({ title, className }) {
  return (
    <div>
        <h1 className={`text-3xl md:text-4xl uppercase ${montserrat.className} font-extrabold text-primary w-full text-start  ${className}`}>{title}</h1>
    </div>
  )
}
