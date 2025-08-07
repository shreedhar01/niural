import React, { useEffect } from "react";
import { Advantages, AiDrivenExcellence, Features, HearFromClient, HeroBanner } from "../../components/products";
import { hris_img } from "../../assets/products";
import { Check, Gauge, Hourglass, Medal, Monitor, ReceiptText, Rocket, Scale, Settings, Sparkle, Timer, TimerIcon, TrendingUp, UserPlus, Volume1 } from "lucide-react";

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

    const hear_from_client = [
        {
            dialog: "Niural is not just a vendor to us but has become an extension of our team. We have multiple subsidiaries, complex payment needs, and lots of compliance requirements based on our growth. Niural was the only tech company that could handle all of it easily.",
            client: "David Kuhn, General Counsel, Karate.com"
        }
    ]

    const delivering_reasult = [
        {
            icon: <Rocket />,
            topic: "Boosted Team Productivity by 30%:",
            explain: "HR insights led to more efficient teams."
        },
        {
            icon: <TimerIcon />,
            topic: "Reduced Onboarding Time 95%:",
            explain: "Get started in minutes, not days."
        },
        {
            icon: <Medal />,
            topic: "Improved Hiring Efficiency by 25%:",
            explain: "Reduce both the time and the cost of new hires."
        },
    ]

    const ai_driven_excellence = [
        {
            icon: <Monitor />,
            slogon: "AI Workers that Automate Payroll & Hiring"
        },
        {
            icon: <Hourglass />,
            slogon: "Predictive Analytics for Hiring & Performance"
        },
        {
            icon: <Sparkle />,
            slogon: "Document Creation & Workflow Automation"
        },
        {
            icon: <ReceiptText />,
            slogon: "Continuous Labor Law Compliance"
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

            <HearFromClient
                hear_from_client={hear_from_client}
                delivering_reasult={delivering_reasult}
            />

            <AiDrivenExcellence
                ai_driven_excellence={ai_driven_excellence}
            />
        </div>
    )
}

export default Hris