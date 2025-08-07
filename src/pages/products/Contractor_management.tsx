import React, { useEffect } from "react";
import { Advantages, AiDrivenExcellence, Features, GetStarted, HearFromClient, HeroBanner } from "../../components/products";
import { product4 } from "../../assets/landing_images/products";
import {
    ArrowUpRight,
    Banknote,
    BriefcaseBusiness,
    ChartLine,
    Columns3Cog,
    File,
    Globe, HandCoins,
    Hourglass,
    Rocket,
    RocketIcon,
    ShieldCheck,
    UserCheck,
    UserPlus,
    Zap
} from "lucide-react";

const Contractor_management: React.FC = () => {
    useEffect(() => {
        document.title = "Niural Contract Management"
    }, [])

    const features = [
        {
            icon: <HandCoins />,
            title: "Pay on Demand Contract",
            description: "Generate flexible contracts without specifying the currency type, payment amount, cycle, or due dates upfront."
        },
        {
            icon: <UserPlus />,
            title: "1099 Contractor",
            description: "Hire independent workers in the US that are paid on a payroll schedule."
        },
        {
            icon: <File />,
            title: "Fixed Contract",
            description: "For contractors who have fixed pay every pay schedule."
        },
        {
            icon: <Hourglass />,
            title: "Hourly Contract",
            description: "For contractors who get paid as they finish their work or as they submit their hours."
        },
        {
            icon: <ArrowUpRight />,
            title: "Milestone Contract",
            description: "For contractors who are paid a series of lump sums upon completing deliverables."
        },
    ]

    const key_advantages = [
        {
            icon: <UserCheck />,
            title: "Compliant Contract Creation",
            description: "Fill in a few details about the worker and Niural handles the rest"
        },
        {
            icon: <ShieldCheck />,
            title: "Niural Armor",
            description: "Protect your business from misclassification liability and risk"
        },
        {
            icon: <Columns3Cog />,
            title: "Flexible Operations",
            description: "Choose the contract type that best fits your team’s needs"
        },
    ]

    const hear_from_client = [
        {
            dialog: "Niural’s contract flexibility allows us to manage a diverse workforce easily. From freelancers to long-term consultants across different regions, their flexibility ensures we can hire any type of contractor needed for our evolving needs while staying confidently compliant and efficient at every step.",
            client: "Jennifer Santos, CHRO, Jade Zebra"
        }
    ]

    const delivering_reasult = [
        {
            icon: <Globe />,
            topic: "Hire in 150+ Countries:",
            explain: "Access contractors anywhere using your own entities or Niural’s."
        },
        {
            icon: <BriefcaseBusiness />,
            topic: "95% of Clients Reduced Legal Fees:",
            explain: "Create compliant contracts without spending on legal guidance."
        },
        {
            icon: <Rocket />,
            topic: "Improved Contractor Relationships by 30%:",
            explain: "Flexible payment and contract capabilities allow you to create the most desired working relationship between your business and contractors."
        },
    ]

    const ai_driven_excellence = [
        {
            icon: <ChartLine />,
            slogon: "Maintain Clean Audit Trails"
        },
        {
            icon: <RocketIcon />,
            slogon: "Bulk Upload for Mass Hiring"
        },
        {
            icon: <Zap />,
            slogon: "Compliant Contract Creation"
        },
        {
            icon: <Banknote />,
            slogon: "Easy, Accurate Payments"
        },
    ]

    return (
        <div>
            <HeroBanner
                feature="Contractor Management"
                feature_slogon="Hire Any Type of Contractor Worldwide"
                feature_statement="Niural helps you compliantly hire a variety of contractor types, allowing you to expand with the flexibility to meet diverse workforce needs."
                img={product4}
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

export default Contractor_management