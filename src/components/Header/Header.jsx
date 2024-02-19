import React from 'react'
import back1 from "../assets/image/hamburgerwhite.png";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center text-[13px] bg-gradient-to-r from-[#23304c] to-[#021233]">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[2px]">
                    <span className='w-[30px] h-[30px] bg-teal-700 text-primaryColor text-[18px] font-[500] rounded-full flex items-center justify-center animate-bounce'>P</span>
                    <h2 className="text-xl font-[700] text-textGreenLight">ortfolio</h2>
                    {/* <div className="leading-[20px] text-smallTextColor">
                      <h2 className="text-xl font-[700]">Hi</h2>
                    <p className=" text-[14px] font-[500]">there</p>
                    </div>   */}
                </div>

              <div className="menu">
                <ul className='flex items-center gap-10 text-[13px] text-gray-100 font-[600]'>
                  <li><a  href="#about" className='md:block hidden'>Profil</a></li>
                  <li><a href="#service" className='md:block hidden'>Service</a></li>
                  <li><a href="#portfolio" className='md:block hidden'>Portfolio</a></li>
                  <li><a href="#contact" className='md:block hidden'>Contact</a></li>
                </ul>
              </div> 

              <div className="flex items-center gap-4">
                <button className="md:flex hidden flex items-center gap-2 text-gray-100 font-[500] border border-solid border-gray-100
               py-1 px-3 rounded-[8px] max-h-[30px] hover:bg-smallTextColor hover:text-white hover:font-500 ease-in duration-300">Me contacter</button>
            </div>
              <span className="text-md sm:hidden cursor-pointer"><img className='w-5 w-5' src={back1} alt="hamburger" /></span>
              </div>
        </div>
    </header>
  )
}

export default Header