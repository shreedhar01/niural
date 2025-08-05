import React, { useEffect } from "react";
import { Advantages, Features, HeroBanner } from "../../components/products";
import { product5 } from "../../assets/landing_images/products";
import { Fingerprint, Mail, Newspaper, PiggyBank, Radar, TrendingUp, UserPlus } from "lucide-react";

const Pay: React.FC = () => {
    useEffect(() => {
        document.title = "Niural Pay | Niural"
    })

    const features = [
        {
            icon: <Newspaper />,
            title: "Accounts Payable",
            description: "Manage and pay all your vendors in one place. Upload invoices individually or in bulk, with Niural’s AI agent auto-populating the details for quick approval."
        },
        {
            icon: <UserPlus />,
            title: "Accounts Receivable",
            description: "Generate customizable invoices. Automate billing, collections, and communication to support accurate, timely payments."
        },
        {
            icon: <Fingerprint />,
            title: "Tax & Custom Fields",
            description: "Integrate state taxes, service fees, and other custom fields directly into invoices, providing compliance and flexibility."
        },
        {
            icon: <Mail />,
            title: "Detailed Reporting",
            description: "Track trends, view payment history, monitor unpaid invoices, and manage credit limits with powerful and granular reporting tools."
        },
        {
            icon: <Mail />,
            title: "Bulk Upload",
            description: "Create thousands of vendors, customers, or invoices from existing lists with just a few clicks."
        },
    ]

    const key_advantages = [
        {
            icon:<PiggyBank />,
            title:"All Payments in One Place",
            description:"Handle revenue coming in and expenses going out with granularity"
        },
        {
            icon:<TrendingUp />,
            title:"More Control with More Choices",
            description:"Tailor invoices, customize approval flows, and conduct payments in 100+ currencies"
        },
        {
            icon:<Radar />,
            title:"Automate Complex Processes",
            description:"Automate tasks and integrate with your ERP for clean audits"
        },
    ]
    return (
        <div>
            <HeroBanner
                feature="pay"
                feature_slogon="Master Your Cash Flow"
                feature_statement="Niural Pay supports both accounts payable and accounts receivable, making it a powerful solution for businesses worldwide."
                img={product5}
            />

            {/* some area for image maybe */}

            <Features
                features={features}
            />

            <Advantages
                key_advantages={key_advantages}
            />
        </div>
    )
}

export default Pay