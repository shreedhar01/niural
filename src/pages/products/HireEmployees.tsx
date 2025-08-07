import React, { useEffect, useState } from "react";
import { Advantages, AiDrivenExcellence, Features, GetStarted, HearFromClient, HeroBanner, InfiniteMove } from "../../components/products";
import { product3 } from "../../assets/landing_images/products";
import {
    aetna,
    chase,
    cigna,
    fed_now,
    guideline,
    healthequity,
    kaiser_permanent,
    manulife,
    metlife,
    nationwide,
    rh_by_sw,
    the_hartford,
    the_canada_life,
    united_healthcare,
    visa,
    wells_fargo
} from "../../assets/products/payroll"
import { Bot, BriefcaseBusiness, Bug, Columns4, CreditCard, DoorOpen, Flag, Globe, HandFist, Network, Rocket, Timer, TrendingUp, User, Users } from "lucide-react";

const HireEmployees: React.FC = () => {
    useEffect(() => {
        document.title = "Niural EOR | Niural"
    }, [])

    const [animate, setAnimate] = useState(1);

    const companies = [
        aetna,
        chase,
        cigna,
        fed_now,
        guideline,
        healthequity,
        kaiser_permanent,
        manulife,
        metlife,
        nationwide,
        rh_by_sw,
        the_hartford,
        the_canada_life,
        united_healthcare,
        visa,
        wells_fargo
    ]

    const features = [
        {
            icon: <Network />,
            title: "Outsource the Busy-Work",
            description: "Hire employees in new countries while Niural handles compliance, payroll, tax calculations, and assumes risk."
        },
        {
            icon: <Users />,
            title: "Manage your Team with an All-in-One Platform",
            description: "We provide smooth onboarding, locally compliant contracts, visa sponsorship, and secure hiring with thorough background checks by integrating a cutting-edge tech stack."
        },
        {
            icon: <Timer />,
            title: "Minimize Onboarding Time",
            description: "Onboard new employees within minutes, not months. Niural's EOR platform handles your global hiring from payroll to benefits and more."
        },
        {
            icon: <Bot />,
            title: "Automate Payments & File Taxes Easily",
            description: "Save hours of admin work with our automated invoices and approval system. Approve expenses, manage team permissions, and keep audit-ready records."
        },
        {
            icon: <Flag />,
            title: "Create Country-Specific Contracts",
            description: "Generate locally compliant contracts, and hire risk-free without worrying about tax deadlines, labor laws, misclassification, or data security."
        },
        {
            icon: <CreditCard />,
            title: "Visa Support",
            description: "Niural provides assistance and walks your workforce through the process of getting the necessary visas to work for your company."
        },
    ]

    const key_advantages = [
        {
            icon:<Globe />,
            title: "Hire Anywhere",
            description: "Hire in 150+ countries without local entities"
        },
        {
            icon:<TrendingUp />,
            title: "Reliable Compliance",
            description: "Legal safeguards for your protection"
        },
        {
            icon:<DoorOpen />,
            title: "Efficient Operations",
            description: "Manage your global employees in a single place"
        },
    ]

    const hear_from_client = [
        {
            dialog: "We operate in a highly competitive industry where acquiring and retaining top-tier talent is critical. Niural's EOR services have been instrumental, allowing us to easily hire and onboard talent across multiple countries, including the UK, Netherlands, and the US. Their expert visa services and compliance management have saved us countless hours of administrative work, enabling us to focus on growing our business while ensuring support for our team, no matter where they are.",
            client: "Sarah Brown, Head of People Operations, Mountain Edge Solutions"
        }
    ]

    const delivering_reasult = [
        {
            icon: <Globe />,
            topic: "Hiring Capabilities in 150+ Countries:",
            explain: "Get access to the world without the need for entities."
        },
        {
            icon: <BriefcaseBusiness />,
            topic: "95% of Clients Reduced Legal Fees:",
            explain: "Reliable compliance and contract creation without legal experience."
        },
        {
            icon: <Rocket />,
            topic: "Boosted Employee Satisfaction by 25%:",
            explain: "Clear communication, accurate and flexible payments, and an intuitive platform improve your workforce's relationship."
        },
    ]

    const ai_driven_excellence = [
        {
            icon: <Columns4 />,
            slogon: "Global Compliance Safeguards"
        },
        {
            icon: <User/>,
            slogon: "Contract Creation & Onboarding"
        },
        {
            icon: <Bug />,
            slogon: "Bulk Upload + Error Detection"
        },
        {
            icon: <HandFist />,
            slogon: "Worker Misclassification Protection"
        },
    ]

    return (
        <div>
            <HeroBanner
                feature="EOR"
                feature_slogon="Hire Employees Internationally with Niural as EOR"
                feature_statement="Niural helps you hire employees compliantly across 150+ countries and reduce administrative burdens and management costs without the need to set up your own entities."
                img={product3}
            />
            <InfiniteMove
                companies={companies}
                onMouseEnter={() => setAnimate(0)}
                onMouseLeave={() => setAnimate(1)}
                styleclass={animate ? "" : "animate_paused"}
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
            <GetStarted/>
        </div>
    )
}

export default HireEmployees