import React from 'react'
import 'aos/dist/aos.css'
function Hero(){

  return (
    <section className="pt-0 bg-primaryColor" id='about'>
<div className="container pt-14">
    <div className=" md:flex items-center justify-between sm:flex-col md:flex-row">
      <div className="w-full md:basis-1/2"/>
        <h5
          data-aos="fade-up"
          data-aos-duration="1800"
          className="text-headingColor font-[600] text-[16px] bg-smallTextColor">
          Bienvenue!
        </h5>

        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-headingColor font-[800] text-[1.8rem] ">
          I'm Zoenirina Marie Viviane <br/>Web Devélopper
        </h1>

    </div>
</div>
    </section>
  )
}

export default Hero