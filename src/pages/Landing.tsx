import React, { useEffect } from "react";
import { TitleBanner } from "../components";
import { Sparkles } from 'lucide-react';

const Landing: React.FC = () => {
    useEffect(() => {
        document.title = "Niural - Powering Global HR Management";
    }, []);
    return (
        <div className=" flex flex-col justify-center items-center w-full bg-amber-100">

            {/* hero section */}
            <div className="flex w-full justify-start items-start md:w-[1280px]">
                <div className="card">
                    <div className="bg-white rounded-2xl hover:bg-gray-100">
                        <TitleBanner
                            className="gap-2 border rounded-2xl bg-gradient-to-r from-violet-900 to-purple-400 bg-clip-text text-transparent text-sm"
                            icon={<Sparkles className="text-black" size={16} />}
                            iconPosition="left"
                            children="Future of Intelligent Finance is Here"
                        />
                    </div>
                </div>

                {/* image gallary */}
                <div>

                </div>
            </div>
        </div>
    )
}

export default Landing