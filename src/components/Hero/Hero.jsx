import React from 'react'
import 'aos/dist/aos.css'
import flatchar from '../assets/image/photovivi2.png'
import facebook from '../assets/image/facebookout1.png'
import instagram from '../assets/image/instagramout1.png'
import twitter from '../assets/image/twitterout1.png'
import linkedin from '../assets/image/linkedinout2.png'
import divide from '../assets/image/divide2.png'
function Hero(){

  return (
    <section className="pt-0 pb-0 bg-gradient-to-r from-[#23304c] to-[#021233]"  id='about'>
<div className="container pt-14 flex flex-col md:flex-row-reverse justify-between items-center justify-content-center">
    {/* <div className="lg:w-100 lg:flex-col md:flex items-center justify-between sm:flex-col md:flex-row"> */}
    <img src={flatchar} className='w-[200px] sm:w-60' alt="ggg" />
    <div className=" lg:flex-col lg:align-start md:flex  sm:flex-col justify-center ">
      <div className=""/>
       

        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-gray-100 font-[800] text-[1.9rem] ">
       <span className=' font-[600] '> Salut, moi c'est</span>    <br /> Z. Marie Viviane <br/> <span className=' font-[600] '> Je suis un </span><span className='text-orange-600'>Développeur</span>   
           <br />
           <h5
          data-aos="fade-right"
          data-aos-duration="1800"
          data-aos-delay="200"
          className="text-gray-100 font-[500] text-[16px]">
          Je crée des sites et appications fonctionnelles et responsives pour vous.
        </h5>
        </h1>
 <button data-aos="fade-up"
          data-aos-duration="1800"
          data-aos-delay="400"
          className="bg-[#0afea4e2] w-[100px] text-[12px] font-[600]  text-white  p-2 mt-3 rounded-[8px] hover:bg-smallTextColor hover:font-500 ease-in duration-300">Me contacter</button>
   <div className="flex flew-row gap-8 mt-10 relative text-center items-center">
    <hr className='w-[40px] border bg-white '/>
    <a href="#facebook.com"><img src={linkedin} className='w-[30px]' alt="ggg" /></a>
    <a href="#facebook.com"><img src={facebook} className='w-[30px]' alt="ggg" /></a>
    <a href="#facebook.com"><img src={instagram} className='w-[30px]' alt="ggg" /></a>
    <a href="#facebook.com"><img src={twitter} className='w-[30px]' alt="ggg" /></a>
   </div>
    </div>
</div>
{/* <img src={divide} className='w-full flex mb-0 shadow-white' alt="divideb" /> */}
<img src={divide} alt="ddd"  className='mt-9'/>
    </section>
  )
}

export default Hero