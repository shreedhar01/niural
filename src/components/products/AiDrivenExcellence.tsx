import { Flower } from "lucide-react";
import React, { useEffect, useState } from "react";

interface IAiDriven{
    icon:React.ReactNode,
    slogon:string
}

interface IAiDrivenExcellence{
    ai_driven_excellence:IAiDriven[]
}

const AiDrivenExcellence:React.FC<IAiDrivenExcellence> = ({ai_driven_excellence})=> {
    const [wind, setWind] = useState(true);
    useEffect(()=>{
        setWind( window.innerWidth > 768 ? true : false)
    },[])
    return (
        <div className="flex justify-center items-center w-full py-32 px-2 md:px-0">
                <div className="flex flex-col items-center justify-center gap-y-8 md:w-[1280px] bg-gray-100 rounded-xl p-8">
                    <p className="text-xl">AI-Driven Excellence</p>
                    <div className="w-full">
                        <div className="flex flex-col md:flex-row justify-between  w-full">
                            {
                                ai_driven_excellence.slice(0, 2).map((v, i) =>
                                    <div key={i} className={`${wind ?"corner-accents" : ""} ${i === 0 && wind ? "bottom_right" : "bottom_left"} flex items-center gap-x-4 bg-white p-4 md:w-45/100 outline-1 outline-dashed outline-gray-300`}>
                                        <div className="text-purple-600 bg-gray-100 rounded-xl p-4">
                                            {v.icon}
                                        </div>
                                        <p className="text-xl">{v.slogon}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex items-center justify-center w-full ">
                            <div className={`${ wind ? "corner-accents all_corners" : ""} flex items-center justify-center w-full md:w-10/100 bg-white p-4 gap-x-4 outline-1 outline-dashed outline-gray-300`}>
                                <div className="text-purple-600 bg-gray-100 rounded-xl p-4">
                                    <Flower />
                                </div>
                                <p className="text-xl">sAI</p>
                            </div>
                        </div>
                        {
                            ai_driven_excellence.length - 2 === 2 ?
                                <div className="flex flex-col md:flex-row justify-between  w-full">
                                    {
                                        ai_driven_excellence.slice(2).map((v, i) =>
                                            <div key={i} className={`${wind ? "corner-accents": ""} ${i === 0 ? "top_right" : "top_left"} flex items-center gap-x-4 bg-white p-4 w-full md:w-45/100 outline-1 outline-dashed outline-gray-300`}>
                                                <div className="text-purple-600 bg-gray-100 rounded-xl p-4">
                                                    {v.icon}
                                                </div>
                                                <p className="text-xl">{v.slogon}</p>
                                            </div>
                                        )
                                    }
                                </div>
                                :
                                <div className={`flex flex-col md:flex-row w-full ${ai_driven_excellence.length -2 === 1 ? "justify-center":"justify-between"} bg-white outline-1 outline-dashed outline-gray-300`}>
                                    {
                                        ai_driven_excellence.slice(2).map((v, i) =>
                                            <div key={i} className={` flex items-center gap-x-4 bg-white p-4 outline-1 outline-dashed outline-gray-300 md:outline-0`}>
                                                <div className="text-purple-600 bg-gray-100 rounded-xl p-4">
                                                    {v.icon}
                                                </div>
                                                <p className="text-xl">{v.slogon}</p>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
    )
}

export default AiDrivenExcellence