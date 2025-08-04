import React, { useEffect } from "react";
import { Features, HeroBanner } from "../../components/products";
import { product4 } from "../../assets/landing_images/products";
import { ArrowUpRight, File, HandCoins, Hourglass, UserPlus } from "lucide-react";

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
        </div>
    )
}

export default Contractor_management