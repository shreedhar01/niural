import React, { useEffect, useState } from "react";
import { Features, HeroBanner, InfiniteMove } from "../../components/products";
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
import { Bot, CreditCard, Flag, Network, Timer, Users } from "lucide-react";

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
            icon:<Network/>,
            title:"Outsource the Busy-Work",
            description:"Hire employees in new countries while Niural handles compliance, payroll, tax calculations, and assumes risk."
        },
        {
            icon:<Users/>,
            title:"Manage your Team with an All-in-One Platform",
            description:"We provide smooth onboarding, locally compliant contracts, visa sponsorship, and secure hiring with thorough background checks by integrating a cutting-edge tech stack."
        },
        {
            icon:<Timer/>,
            title:"Minimize Onboarding Time",
            description:"Onboard new employees within minutes, not months. Niural's EOR platform handles your global hiring from payroll to benefits and more."
        },
        {
            icon:<Bot/>,
            title:"Automate Payments & File Taxes Easily",
            description:"Save hours of admin work with our automated invoices and approval system. Approve expenses, manage team permissions, and keep audit-ready records."
        },
        {
            icon:<Flag/>,
            title:"Create Country-Specific Contracts",
            description:"Generate locally compliant contracts, and hire risk-free without worrying about tax deadlines, labor laws, misclassification, or data security."
        },
        {
            icon:<CreditCard/>,
            title:"Visa Support",
            description:"Niural provides assistance and walks your workforce through the process of getting the necessary visas to work for your company."
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
        </div>
    )
}

export default HireEmployees