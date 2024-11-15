import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/my_pic.png)] bg-left lg:bg-[50px] bg-cover'
    style={{backgroundSize:"35%"}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(vh-100-60px)]'>
        <div className='hidden lg:block'></div>
            <div className='text-[80px] text-black sm:text-[100px] pt-20 font-bold leading-tight flex justify-center items-center'>
                <div>
                    <p>I'm</p>
                    <p>Abdul</p>
                    <p>Hakeem</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero
