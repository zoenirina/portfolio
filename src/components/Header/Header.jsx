import React from 'react'

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center text-[13px]">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[2px]">
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>P</span>
                    <h2 className="text-xl font-[700]">ortfolio</h2>
                    {/* <div className="leading-[20px] text-smallTextColor">
                      <h2 className="text-xl font-[700]">Hi</h2>
                    <p className=" text-[14px] font-[500]">there</p>
                    </div>   */}
                </div>

              <div className="menu">
                <ul className='flex items-center gap-10 text-[13px] text-smallTextColor font-[600]'>
                  <li><a  href="#about" className='md:block hidden'>Profil</a></li>
                  <li><a href="#about" className='md:block hidden'>Service</a></li>
                  <li><a href="#about" className='md:block hidden'>Portfolio</a></li>
                  <li><a href="#about" className='md:block hidden'>Contact</a></li>
                </ul>
              </div> 

              <div className="flex items-center gap-4">
                <button className="md:flex hidden flex items-center gap-2 text-smallTextColor font-[500] border border-solid border-smallTextColor
               py-1 px-3 rounded-[8px] max-h-[30px] hover:bg-smallTextColor hover:text-white hover:font-500 ease-in duration-300">Me contacter</button>
            </div>
              <span className="text-md text-smallTextColor sm:hidden cursor-pointer">menu</span>
              </div>
        </div>
    </header>
  )
}

export default Header