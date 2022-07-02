import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-teal-400 w-screen h-[72px] px-[5%] flex items-center'>
        <Link href="/">
            <li className='cursor-pointer h-full flex items-center text-white list-none hover:bg-white hover:text-teal-400 p-2'>Home</li>
        </Link>
        <Link href="/crags">
            <li className='cursor-pointer h-full flex items-center text-white list-none hover:bg-white hover:text-teal-400 p-2'>Crags</li>
        </Link>
        <Link href="/about">
            <li className='cursor-pointer h-full flex items-center text-white list-none hover:bg-white hover:text-teal-400 p-2'>About</li>
        </Link>
    </nav>
  )
}

export default Navbar