import React from 'react'
import RightCard from "./RightCard";

const Service = () => {
  return (
    <div className='container md:w-1/2 w-full'>
        <div className="relative justify-center  text-center">
             <h1 className=' text-headingColor font-[800] text-[1.9rem]'>Faisons de votre imagination <br /> une <span className='text-yellow-500'>réalité</span> </h1>
         
        <p className=' leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat in ducimus fugit nihil ullam? Harum hic dicta amet quo similique, ducimus officia quaerat numquam labore atque molestiae sit expedita?</p></div>
       
    <div className="flex flex-col justify-center sm:px-0">
        <div className="w-full py-3 px-2 sm mx-auto px-0">
            <div className="relative text-gray-700 antialised text-sm font-semibold">
                <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
            
            {/* <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                            <div 
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                            >
                                <h3 className='text-primaryColor group-hover:text-white font-700'>heading text</h3>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Maiores atque, provident temporibus ad veniam in! Fugiat, cupiditate eligendi. Tempora quia placeat eveniet?</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-5 h-5 absolute left-1/2 transform -translate-y-4 sm"></div>
                </div>
            </div>

            RIGHTSIDE
            <div className="mt-3 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                            <div 
                            data-aos="fade-left"
                            data-aos-duration="1100"
                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                            >
                                <h3 className='text-primaryColor group-hover:text-white font-700'>heading text</h3>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Maiores atque, provident temporibus ad veniam in! Fugiat, cupiditate eligendi. Tempora quia placeat eveniet?</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-5 h-5 absolute left-1/2 transform -translate-y-4 sm"></div>
                </div>
            </div> */}

            {/* left side */}
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