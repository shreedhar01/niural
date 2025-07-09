import React from "react";
import { TitleBanner } from "../components";
import { Sparkles } from 'lucide-react';

const Landing: React.FC = () => {
    return (
        <div className="w-full bg-amber-100 z-20">
            {/* hero section */}
            <div className="flex items-start">
                <div>
                    <TitleBanner
                    className="gap-2 border rounded-2xl outline-animate-spin"
                    icon={<Sparkles size={16}/>}
                        iconPosition="left"
                        children="Future of Intelligent Finance is Here"
                    />
                </div>
            </div>
        </div>
    )
}

export default Landing