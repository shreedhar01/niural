import React from "react";
import { HeroThing, OurSolution, ProblemImpact } from "../../components/solution";
import { CircleGauge, Globe, Sparkle } from "lucide-react";

const Operations : React.FC = ()=>{
    const hero_thing = [
        {
            title: "Operations",
            hero: "Optimize Global Operations with AI-Powered Payroll & Compliance",
            description: "Simplify cross-border operations, stay compliant, and get more done — designed for Operations Managers and their teams."
        }
    ]

    const problem = "For Operations Managers, managing a distributed workforce means juggling multiple states or countries, shifting regulations, currencies, and taxes. The resulting burden leads to costly errors, delays, and inefficiencies — stalling strategic initiatives."

    const impact = [
        "Over 60% of distributed teams encounter compliance-related payroll issues each quarter, reducing operational efficiency.",
        "Time-consuming audits, financial penalties, and manual corrections divert attention away from core business goals."
    ]

    const our_solution = "Niural’s AI-powered platform handles the complexity of distributed payroll operations. Input employee details, select regions, and ensure regulatory compliance for global payroll and payments. With reliable automation and less busywork, your operations team can focus on building and growing."

    const easy_workflow = [
        {
            icon: <Globe/>,
            title: "Onboard Globally",
            description: "Add employees across regions in minutes, centralizing global payroll operations into one dashboard."
        },
        {
            icon: <Sparkle/>,
            title: "AI-Driven Compliance",
            description: "Our engine instantly applies local laws, taxes, and benefit rules, ensuring compliant hiring and accurate payouts every time."
        },
        {
            icon: <CircleGauge />,
            title: "Effortless Payments",
            description: "Approve payroll and release funds in multiple currencies on schedule, with minimal manual intervention."
        },
    ]
    return (
        <div className="pt-[120px] ">

            <HeroThing hero_thing={hero_thing} />

            <ProblemImpact
                problem={problem}
                impact={impact}
            />

            <OurSolution
                our_solution={our_solution}
                easy_workflow={easy_workflow}
            />
        </div>
    )
}

export default Operations