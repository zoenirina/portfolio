import React from 'react'
import {PortfolioData} from "../assets/data/PortfolioData"
import caisse1 from "../assets/image/caisse1.png"

const Modal = ({activeId,setShowModal}) => {
    const portfolio  = PortfolioData.find(portfolio => portfolio.id === activeId)
  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
        <div className='max-w-[600px] bg-white absolute left-1/2 top-1/2 z-20  rounded transform -translate-x-1/2 -translate-y-1/2 p-5'>
            <div>
                <figure>
                    <img src={caisse1} alt="" className='rounded'/>
                </figure>
                <div className="mt-5">
                    <h5>{portfolio.title}</h5>
                    
                    <p className='mt-3'>{portfolio.description}</p></div>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
                <h4 className='text-headingColor text-[18px] text-[700]'>
                    Technologies:
                </h4>
                {
                    portfolio.techno.map((item,index)=>
                        <span key={index}
                        className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px]'>{item}</span>
                    )
                }
               
            </div>
             <a href={portfolio.link} className='bg-teal-400 mt-4 text-white py-1 px-2 rounded-[5px]'>voir un demo</a>
            </div>
            <button onClick={()=>setShowModal(false)} className='w-[1.7rem] h-[1.7rem] bg-[white] absolute top-[1.6rem] right-[1.6rem] text-[24px] flex items-center rounded justify-center cursor-pointer'>&times;</button>
        </div>
    </div>
  )
}

export default Modal