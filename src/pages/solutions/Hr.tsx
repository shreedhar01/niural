import React from "react";
import { HeroThing } from "../../components/solution";

const HR : React.FC = ()=>{
    const hero_thing = [
        {
            title: "HR",
            hero: "Enhance HR Operations with AI-Powered Hiring & Compliance",
            description: "Efficiently hire and onboard your global workforce, stay compliant, and improve worker performance and happiness — all from a platform purpose-built for HR professionals."
        }
    ]
    return (
        <div className="pt-[120px] ">

            <HeroThing hero_thing={hero_thing} />

        </div>
    )
}

export default HR