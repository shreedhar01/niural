import React from "react";
import { HeroThing, OurSolution, ProblemImpact } from "../../components/solution";
import { Calculator, Database, WalletCards } from "lucide-react";

const Payrolls: React.FC = () => {
    const hero_thing = [
        {
            title: "Payroll",
            hero: "Take the Pain Out of Payroll with AI-Powered Compliance",
            description: "In seconds, run payroll across borders, ensure legal compliance, and reduce overhead — all from one intuitive platform."
        }
    ]

    const problem = "Running payroll for a global workforce is time-consuming and error-prone. Employers must navigate multiple local regulations, currency conversions, tax laws, and shifting compliance rules. This complexity often leads to costly mistakes, delays in payments, and employee dissatisfaction."

    const impact = [
        "Over 60% of international businesses report compliance-related payroll errors every quarter.",
        "Frequent audits and penalties can erode profits and distract from core business priorities.",
        "Fragmented systems lead to loss of data and mistakes when transferring information between platforms."
    ]

    const our_solution = "Our platform leverages Niural AI SuperAgents that interpret and apply local labor laws, tax standards, and benefits requirements in real time. Simply input employee details, select regions, and our system automatically calculates accurate pay, ensures compliance, and processes payments on schedule, whether in the US or globally."

    const easy_workflow = [
        {
            icon: <Database />,
            title: "Input Employee Data",
            description: "Onboard employees from anywhere in the world in just a few clicks."
        },
        {
            icon: <Calculator />,
            title: "Automated Compliance",
            description: "Our AI continuously monitors and updates local regulations, ensuring payroll calculations are always up to date."
        },
        {
            icon: <WalletCards />,
            title: "Seamless Payments",
            description: "Pay employees around the world in local currencies with transparent, industry-leading exchange rates."
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

export default Payrolls