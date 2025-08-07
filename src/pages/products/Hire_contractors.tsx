import React, { useEffect } from "react";
import { Advantages, AiDrivenExcellence, Features, GetStarted, HearFromClient, HeroBanner } from "../../components/products";
import { hire_contractor_img } from "../../assets/products"
import { Banknote, BriefcaseBusiness, DoorOpen, Earth, Globe, HandFist, Handshake, Network, Newspaper, ReceiptText, Rocket, Signature, Snowflake, Timer, Upload, UserCheck } from "lucide-react";

const Hire_contractor: React.FC = () => {
    useEffect(() => {
        document.title = "Niural AOR | Niural"
    }, [])

    const features = [
        {
            icon: <Network />,
            title: "Hire International Contractors Compliantly",
            description: "Minimize legal risks. Properly hire global contractors while protecting your business from misclassification penalties."
        },
        {
            icon: <Handshake />,
            title: "Contractor Management",
            description: "Onboard, manage, and pay contractors in the same platform with transparency and adherence to local labor laws"
        },
        {
            icon: <Banknote />,
            title: "Easy Payments",
            description: "With Niural, pay everyone in their local currencies (100+) with a click. 7+ payment methods including real time payments in applicable jurisdictions and stablecoin payments."
        },
        {
            icon: <Timer />,
            title: "Timesheets & Time Off",
            description: "Track work hours and manage leave requests while the platform automatically works them into accurate payroll."
        },
        {
            icon: <Newspaper />,
            title: "Automate Invoices & File Taxes",
            description: "Save hours of admin work with automated invoices and approval. Niural helps you keep your records ready for any audits and tax season."
        },
        {
            icon: <ReceiptText />,
            title: "Expense & Allowance",
            description: "Review and reimburse expenses and allowances with clarity and control in just a few clicks."
        },
        {
            icon: <Signature />,
            title: "Sign Agreements Tailored to Your Country; Be GDPR Compliant",
            description: "Hire contractors with your entities or ours. Create and sign locally compliant contracts, and Data Processing Agreements to stay compliant with GDPR."
        },
    ]

    const key_advantages = [
        {
            icon:<Globe />,
            title:"Hire Worldwide",
            description:"Hire top global talent with or without local entities"
        },
        {
            icon:<Snowflake />,
            title:"Risk Protection",
            description:"AOR provides liability safeguards for your protection"
        },
        {
            icon:<DoorOpen/>,
            title:"Efficient Operations",
            description:"Manage and pay all your contractors in a single place"
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
            icon: <Globe />,
            topic: "Hiring Capabilities in 150+ Countries:",
            explain: "Access contractors around the globe."
        },
        {
            icon: <BriefcaseBusiness />,
            topic: "95% of Clients Reduced Legal Fees:",
            explain: "Reliable compliance and contract creation without legal experience."
        },
        {
            icon: <Rocket />,
            topic: "Improved Contractor Satisfaction by 25%:",
            explain: "Clear communication and an intuitive platform improve contractor relationships."
        },
    ]

    const ai_driven_excellence = [
        {
            icon: <Earth />,
            slogon: "Global Compliance Safeguards"
        },
        {
            icon: <UserCheck />,
            slogon: "Contract Creation and Onboarding"
        },
        {
            icon: <Upload/>,
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
                feature="AOR"
                feature_slogon="Hire & Manage Global Contractors with Niural AOR"
                feature_statement="Niural helps you compliantly hire and pay contractors across the globe in a single platform, allowing you to expand your workforce worldwide."
                img={hire_contractor_img}
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

export default Hire_contractor