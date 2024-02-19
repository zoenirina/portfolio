import React from 'react'
import photo from "../assets/image/ppp.png";
// import back1 from "../assets/image/backg.png";


const Profile = () => {


  return (
    <div className='w-full bg-[#f5fcfc] '>
        <div className="w-30 h-30 bg-white absolute l-2 t-10 rounded-full"></div>
    <div className="container sm:w-4/5  bg-yellow w-full sm:flex-row flex-col  flex">
<img src= {photo}alt="photohh" className='w-1/3 md:w-"3/5'/>
    <div className='text-smallTextColor font-[400]  relative md:pt-20 pt-1 '>
      {/* <img src={back1} className='absolute l-3 w-20 h-20 z-5 ' alt="" /> */}
      <h1 className='font-[800] text-[1.9rem] text-gray-800 mb-5'>Qui <span className='text-orange-500'>suis-je?</span> </h1>
      <p className='mt-2 text-gray-700 font-[600]'>Mon nom est <span className='text-[#0afea4e2]'> ZOENIRINA Marie Viviane.</span> Actuellement en troisième année de licence, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium alias, labore voluptates doloremque dicta nisi ut odit atque sit est velit iste pariatur at architecto itaque corporis quam iusto? Voluptatibus!</p>  
      </div> 
    </div>
<div className="animate-ping absolute rounded-full border-[3px] border-yellow-400 l-3 t-3 w-5 h-5"></div>


    </div>
  )
}

export default Profile