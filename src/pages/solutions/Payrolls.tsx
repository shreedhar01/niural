import React from "react";
import { HeroThing } from "../../components/solution";

const Payrolls: React.FC = () => {
    const hero_thing = [
        {
            title: "Payroll",
            hero: "Take the Pain Out of Payroll with AI-Powered Compliance",
            description: "In seconds, run payroll across borders, ensure legal compliance, and reduce overhead — all from one intuitive platform."
        }
    ]
    return (
        <div className="pt-[120px] ">

            <HeroThing hero_thing={hero_thing} />

            <div>

            </div>

        </div>
    )
}

export default Payrolls