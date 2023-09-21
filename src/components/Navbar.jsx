import React from 'react'
import {IoMdCart} from 'react-icons/io'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='w-full flex justify-center'>
        <div className='lg:w-3/6 w-11/12 flex items-center justify-between'>
            <a className='underline' href='/'>Home</a>
            <Link className='underline' to='ProductDetails'>Products Details</Link>
            <img className='w-28' src='images/logo192.png' alt='' />
            <a className='underline' href='/'>Contact</a>
            <a className='underline' href='/'>About</a>
            <IoMdCart size={'1.5rem'}/>
        </div>
    </nav>
  )
}

export default Navbar
