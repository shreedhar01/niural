import React from "react";
import { Features, HeroThing, OurSolution, ProblemImpact } from "../../components/solution";
import { Calculator, Database, WalletCards } from "lucide-react";
import {
    automation,
    compliance,
    save
} from "../../assets/solutions"

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

    const features = [
        {
            image: automation,
            title: "Automation",
            content: [
                {
                    title: "Smart Calculations",
                    description: "Auto-deduction of taxes, pensions, and benefits per region."
                },
                {
                    title: "Scheduled Disbursements",
                    description: "Never miss a payday with built-in reminders and automated transfers."
                }
            ]
        },
        {
            image: compliance,
            title: "Compliance",
            content: [
                {
                    title: "Real-Time Regulatory Updates",
                    description: "Our AI engine tracks changes in labor laws and tax regulations globally."
                },
                {
                    title: "Audit-Ready Reporting",
                    description: "Keep things clean and organized with audit-ready reports and compliance document management."
                }
            ]
        },
        {
            image: save,
            title: "Save Money & Time",
            content: [
                {
                    title: "Transparent Exchange Rates",
                    description: "Reduce fees with industry-leading international currency conversions."
                },
                {
                    title: "Ease of Management",
                    description: "Manage payroll for multiple countries, jurisdictions, or subsidiaries from a single dashboard, cutting administrative costs and saving mental headspace."
                }
            ]
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

            <Features
                features={features}
            />
        </div>
    )
}

export default Payrolls

