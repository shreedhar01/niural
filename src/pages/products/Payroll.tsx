import React, { useEffect, useState } from "react";
import { Advantages, Features, HearFromClient, HeroBanner, InfiniteMove } from "../../components/products";
import { product1 } from "../../assets/landing_images/products";
import {
    Banknote,
    Coins,
    Earth,
    Globe,
    HandCoins,
    Heart,
    Hourglass,
    Percent,
    ReceiptText,
    Rocket,
    Timer,
    TrendingDown
} from "lucide-react"
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

    const key_advantages = [
        {
            icon: <Hourglass />,
            title: "Save Time",
            description: "Automate payroll processing"
        },
        {
            icon: <TrendingDown />,
            title: "Reduce Errors",
            description: "Eliminate manual tax mistakes"
        },
        {
            icon: <Globe />,
            title: "Handle Complexity",
            description: "Tackle sophisticated requirements"
        }
    ]

    const hear_from_client = [
        {
            dialog: "Moving to Niural Payroll changed everything for us. It saved hours of work every month and made payroll quick and easy.",
            client: "Nish, Founder, Nepal Tea Collective"
        }
    ]

    const delivering_reasult = [
        {
            icon: <Timer />,
            topic: "Save 10+ Hours Per Pay Period:",
            explain: "Eliminate manual tasks with reliable automation."
        },
        {
            icon: <Rocket />,
            topic: "90% Fewer Payroll Errors:",
            explain: "Achieve near-perfect accuracy and on-time payments."
        },
        {
            icon: <Earth />,
            topic: "Built for Scale:",
            explain: "Handle multi-jurisdiction compliance and unique employee needs, from visas to special deductions—far beyond what other solutions offer."
        },
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

            <Advantages
                key_advantages={key_advantages}
            />

            <HearFromClient
                hear_from_client={hear_from_client}
                delivering_reasult={delivering_reasult}
            />
        </div>
    )
}

export default Payroll