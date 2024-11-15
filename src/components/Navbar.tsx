import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
          <div className='text-lg text-black font-bold text-left md:flex'>Abdul Hakeem Khan</div>
            <ul className='grid grid-cols-8 gap-10 lg:gap-16 hidden md:flex'>
                <li className='text-sm font-sans font-bold hover:text-green-500'><a href='/'>Home</a></li>
                <li className='text-sm font-sans font-bold hover:text-green-500'><a href='/about'>About</a></li>
                <li className='text-sm font-sans font-bold hover:text-green-500'><a href='/projects'>Projects</a></li>
                <li className='text-sm font-sans font-bold hover:text-green-500'><a href='/skills'>Skills</a></li>
                <li className='text-sm font-sans font-bold hover:text-green-500'><a href='/contact'>Contact</a></li>
            </ul>
          </div>
    </div>
  )
}

export default Navbar
