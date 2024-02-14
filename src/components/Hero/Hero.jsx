import React from 'react'
import 'aos/dist/aos.css'
import flatchar from '../assets/image/flat1.png'
function Hero(){

  return (
    <section className="pt-0" id='about'>
<div className="container pt-14 flex flex-col md:flex-row-reverse justify-between items-center justify-content-center">
    {/* <div className="lg:w-100 lg:flex-col md:flex items-center justify-between sm:flex-col md:flex-row"> */}
    <img src={flatchar} className='w-80' alt="ggg" />
    <div className=" lg:flex-col lg:align-start md:flex  sm:flex-col justify-center">
      <div className=""/>
       

        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-headingColor font-[800] text-[1.9rem] ">
           Zoenirina Marie Viviane <br/>Web <span className='text-yellow-500'>Devélopper</span>   
           <br />
           <h5
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-delay="200"
          className="text-headingColor font-[600] text-[16px]">
          Je crée des sites et appications fonctionnelles et responsives pour vous.
        </h5>
        </h1>
 <button data-aos="fade-up"
          data-aos-duration="1800"
          data-aos-delay="400"
          className="bg-headingColor w-[100px] text-[12px] font-[600]  text-white  p-2 mt-3 rounded-[8px] hover:bg-smallTextColor hover:font-500 ease-in duration-300">Me contacter</button>
    </div>
   
</div>
    </section>
  )
}

export default Hero