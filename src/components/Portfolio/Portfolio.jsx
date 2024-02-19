import React from 'react'
import {PortfolioData} from "../assets/data/PortfolioData"
import caisse1 from "../assets/image/caisse1.png"
import Modal from "./Modal";
import { useState } from "react";

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false)
    const [activeId, setActiveId] = useState(0)

  return (
    <section id='portfolio'>
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
                <h1 className=" font-[800] text-[1.9rem] text-gray-800">
                    Mes projets <span className='text-orange-500'>récents</span> 
                </h1>
                <div className="flex gap-3">
                    <button className="text-gray-700 border border-solid border- py-2 px-4 rounded-[8px]">
                        Tous
                    </button>
                    <button className="text-gray-700 border border-solid border- py-2 px-4 rounded-[8px]">
                        Web Design
                    </button>
                    <button className="text-gray-700 border border-solid border- py-2 px-4 rounded-[8px]">
                        Desktop
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap mt-12">
                {
                PortfolioData.map((portfolio,index)=>{
                    return( 
                        <div className="group max-w-full sm:w-[48.9%] md:w-[31%] lg:[32%] relative z-1 ">
                        <figure>
                            <img src={caisse1} alt="caisse1"  className='rounded'/>
                            {/* <div className="bg-orange rounded h-100 w-100">{portfolio.title} {portfolio.text} </div> */}
                        </figure>
                        <div className="w-full h-full bg-black bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block rounded">
                           <div className="w-full h-full flex items-center justify-center">
                            <button className="text-white bg-headingColor bg-opacity-97 hover:bg-sallTextColor py-2 px-4 rounded" onClick={()=>{
                                setShowModal(true)
                                setActiveId(portfolio.id)
                                }}>Détail</button>
                           </div>
                            </div>
                        </div>)
                   
                  
                })
                }
            </div>
        </div>
        {showModal && <Modal setShowModal={setShowModal} activeId={activeId}/>}
    </section>
  )
}

export default Portfolio