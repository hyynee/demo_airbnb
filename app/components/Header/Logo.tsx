'use client'
import React from 'react'
import Image from '@/node_modules/next/image'
import { useRouter } from '@/node_modules/next/navigation'

type Props = {}

export default function Logo(){
    const router= useRouter();
  return (
    <Image alt='logo'
        className='hidden md:block cursor-pointer' height={100} width={100} src='/images/logo.png'
    >

    </Image>
  ) 
}