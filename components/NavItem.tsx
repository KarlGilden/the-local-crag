import React from 'react'

interface IProps {
    children: React.ReactNode
}

const NavItem = ({children}:IProps) => {
  return (
    <li className='cursor-pointer h-full flex items-center text-white list-none hover:bg-white hover:text-teal-400 p-2'>
        {children}
    </li>
  )
}

export default NavItem