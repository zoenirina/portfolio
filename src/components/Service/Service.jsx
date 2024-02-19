import React from 'react'
import RightCard from "./RightCard";

const Service = () => {
  return (
    <div className='container ' id='service'>
        <div className="relative justify-center  text-center">
             <h1 className=' text-headingColor font-[800] text-[1.9rem]'>Faisons de votre imagination <br /> une <span className='text-yellow-500'>réalité</span> </h1>
         
        <p className=' leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat in ducimus fugit nihil ullam? Harum hic dicta amet quo similique, ducimus officia quaerat numquam labore atque molestiae sit expedita?</p></div>
       
    <div className="flex flex-col justify-center sm:px-0">
        <div className="w-full py-3 px-2 sm mx-auto px-0">
            <div className="relative text-gray-700 antialised text-sm font-semibold">
                <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
            
            <RightCard position={"left"}/>
            <RightCard position={"right"}/>
            <RightCard position={"left"}/>
            <RightCard position={"right"}/>
            </div>
                    </div>
                </div>
                
    </div>
    
  )
}

export default Service