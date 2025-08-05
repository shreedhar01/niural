import React, { useEffect } from "react";
import { Advantages, Features, HeroBanner } from "../../components/products";
import { hris_img } from "../../assets/products";
import { Check, Gauge, Scale, Settings, Timer, TrendingUp, UserPlus, Volume1 } from "lucide-react";

const Hris: React.FC = () => {
    useEffect(() => {
        document.title = "Niural HRIS | Niural"
    })

    const features = [
        {
            icon: <Timer />,
            title: "Expense Management",
            description: "Accelerate your reimbursement process with simplified or automated approvals."
        },
        {
            icon: <Volume1 />,
            title: "AI-Powered Hiring Tools",
            description: "Recruit top global talent at a reasonable cost with the Niural Talent Identification tool."
        },
        {
            icon: <UserPlus />,
            title: "Quick Onboarding",
            description: "Onboard any employee or contractor in under a minute with AI guidance."
        },
        {
            icon: <Settings />,
            title: "Customizable Onboarding Workflows",
            description: "Create your automated intro to your business with offer letters, training resources, employee handbooks, and other necessary documents."
        },
        {
            icon: <Check />,
            title: "Complete Compliance",
            description: "Upload tax forms, conduct background checks, and collect necessary compliance documents all in a single platform."
        },
        {
            icon: <Gauge />,
            title: "Performance Management",
            description: "Get the most out of your workforce with a suite of HR analytical tools."
        }
    ]

    const key_advantages = [
        {
            icon:<Check />,
            title:"Consolidated Workforce Management",
            description:"Unified platform for HR and payment needs"
        },
        {
            icon:<TrendingUp />,
            title:"Free of Charge",
            description:"Existing users access Niural HRIS at no cost"
        },
        {
            icon:<Scale />,
            title:"1-Minute Onboarding",
            description:"Just a few clicks is all it takes to get started"
        },
    ]
    return (
        <div>
            <HeroBanner
                feature="hris"
                feature_slogon="Unified Tools for Team Management"
                feature_statement="From timesheets to expenses, Niural HRIS is your central hub for managing employee data and workflows."
                img={hris_img}
            />

            <Features
                features={features}
            />

            <Advantages
                key_advantages={key_advantages}
            />
        </div>
    )
}

export default Hris