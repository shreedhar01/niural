import React from "react";
import { HeroThing } from "../../components/solution";

const Operations : React.FC = ()=>{
    const hero_thing = [
        {
            title: "Operations",
            hero: "Optimize Global Operations with AI-Powered Payroll & Compliance",
            description: "Simplify cross-border operations, stay compliant, and get more done — designed for Operations Managers and their teams."
        }
    ]
    return (
        <div className="pt-[120px] ">

            <HeroThing hero_thing={hero_thing} />

        </div>
    )
}

export default Operations