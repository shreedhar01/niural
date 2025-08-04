import React from "react";
import {Button} from "../index"

interface IHero{
    feature:String,
    feature_slogon:String,
    feature_statement:String,
    img:string
}

const Hero: React.FC<IHero> = ({feature,feature_slogon,feature_statement,img}) => {
    return (
        <div className="flex items-center justify-center w-full pt-[200px] md:h-[560px] bg-gradient-to-t from-green-200 from-0%  md:via-white via-25% to-white to-100%">
            <div className="flex flex-col  md:w-[1280px] md:grid grid-cols-2 relative overflow-hidden h-full px-2 gap-y-8 md:gap-y-0 md:gap-x-8">
                {/* text section */}
                <div className="flex flex-col gap-y-6">
                    <p className="text-green-600 text-xl">NIURAL {feature.toUpperCase()}</p>
                    <p className="font-medium text-5xl">{feature_slogon}</p>
                    <p>{feature_statement}</p>
                    <div className="flex gap-x-8">
                        <Button
                            size="mid"
                            children="Get Started"
                            onClick={()=> window.open("https://app.niural.com/auth/employer/signup","_","noopener,noreferrer")}
                            className="rounded"
                        />

                        <Button
                            variant="secondary"
                            size="mid"
                            children="Get a Demo"
                            onClick={()=> window.open("https://meetings.hubspot.com/niural/book-a-demo?uuid=866bf143-9c4f-4474-890b-f7beba1a44fe","_","noopener,noreferrer")}
                            className="rounded border border-gray-300"
                        />
                    </div>
                </div>

                {/* img section */}
                <div>
                    <img className="md:absolute rounded md:rounded-2xl border border-gray-400" src={img} alt="payroll" />
                </div>
            </div>
        </div>
    )
}

export default Hero