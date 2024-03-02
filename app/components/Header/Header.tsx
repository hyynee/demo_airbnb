'use client'
import React from 'react'
import Container from '../Container/Container'
import Search from '../Search/Search'
import UserMenu from '../UserMenu/UserMenu'
import Logo from './Logo'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='fixed w-full bg-white z-10 shasow-sm'>
      <div className="py-4 
        border-b-[1px]
      ">
        <Container>
          <div className='
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md: gap-0
          '>
            <Logo></Logo>
            <Search></Search>
            <UserMenu></UserMenu>
          </div>
        </Container>
      </div>
    </div>
  )
}