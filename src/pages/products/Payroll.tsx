import React, { useEffect, useState } from "react";
import { Features, HeroBanner, InfiniteMove } from "../../components/products";
import { product1 } from "../../assets/landing_images/products";
import { Banknote, Coins, HandCoins, Heart, Percent, ReceiptText, Timer } from "lucide-react"
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

const Payroll: React.FC = () => {
    useEffect(() => {
        document.title = "Payroll | Niural"
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
            icon: <Heart />,
            title: "Comprehensive Benefits",
            description: "Manage health plans, retirement options, and employee perks in a single platform."
        },
        {
            icon: <Coins />,
            title: "Multiple Payroll Options",
            description: "Support different payroll methods to match the needs of your team and business - bonus payroll, off-cycle payroll, reporting payroll, and more."
        },
        {
            icon: <Banknote />,
            title: "Wage Garnishments",
            description: "Automatically handle wage garnishments, ensuring accurate deductions and compliance."
        },
        {
            icon: <HandCoins />,
            title: "Workers Compensation",
            description: "Calculate coverage automatically for your entire team."
        },
        {
            icon: <Percent />,
            title: "Special Tax Exemptions",
            description: "Easily manage tax-exempt statuses for eligible employees."
        },
        {
            icon: <Timer />,
            title: "Timesheet & Time Off",
            description: "Track and include employee hours and time-off requests into payroll processing."
        },
        {
            icon: <ReceiptText />,
            title: "Expense & Allowance",
            description: "Integrate employee expenses and allowances for a smoother payroll experience."
        }
    ]
    return (
        <div>
            <HeroBanner
                feature="Payroll"
                feature_slogon="Payroll Reimagined"
                feature_statement="Niural Payroll simplifies payroll for all kinds of businesses. We ensure compliance, automate tax calculations, and support flexible payment methods to ensure a smooth experience for you and your team with our proprietary tax engine."
                img={product1}
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

export default Payroll