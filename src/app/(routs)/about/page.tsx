import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className='font-sans text-[40px] font-bold text-red-900 p-5 m-10  bg-green-500 rounded-2xl'>PERSONAL STATEMENT :-</h1>
        <div className='font-mono text-[20px] font-bold p-10 m-10  bg-blue-500 border-1 leading-tight rounded-2xl'>
        <p >I believed that the brings out the best people and <br></br>
          I am confident to succeed in such a dynamic business, environment.<br></br>
          Today success is how we work together as a team <br></br>
          And I looking forward to be a part of such team</p>
          <h1 className='font-sans text-[20px] font-bold text-red-900'>Personal Information :-</h1>
        <p >Nationality : Pakistani<br></br>
            Religion : Islam<br></br>
            Date Of Birth : 1980</p>
      </div>
    </div>
  )
}

export default About
