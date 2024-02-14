import React from 'react'
import { useEffect,useState } from "react";

const RightCard = ({position}) => {
    const [justify, setjustify] = useState("")
    const [padding, setpadding] = useState("")
    const [dataAos, setdataAos] = useState("")
    
  useEffect(() => {
   init()
  })
  const init=()=>{
         setjustify((position === "left")?"justify-start":"justify-end")
         setpadding((position === "left")?"sm:pr-8":"sm:pl-8")
         setdataAos((position === "left")?"fade-right":"fade-left")
   }
  
    return (
    <div className="mt-3 sm:mt-1 sm:mb-1">
                <div className="flex items-center flex-col sm:flex-row">
                    <div className={"flex w-full mx-auto items-center "+justify}>
                        <div className={"w-full sm:w-1/2 " +padding}>
                            <div 
                            data-aos={dataAos}
                            data-aos-duration="1300"
                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                            >
                                <h3 className='text-primaryColor group-hover:text-white font-700'>heading text</h3>
                                <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Maiores atque, provident temporibus ad veniam in! Fugiat, cupiditate eligendi. Tempora quia placeat eveniet?</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="rounded-full bg-primaryColor border-white border-4 w-5 h-5 absolute left-1/2 transform -translate-y-4 sm"></div> */}
                </div>
            </div>
  )
}

export default RightCard