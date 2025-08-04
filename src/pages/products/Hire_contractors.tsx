import React, { useEffect } from "react";
import { Features, HeroBanner } from "../../components/products";
import { hire_contractor_img } from "../../assets/products"
import { Banknote, Handshake, Network, Newspaper, ReceiptText, Signature, Timer } from "lucide-react";

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
        </div>
    )
}

export default Hire_contractor