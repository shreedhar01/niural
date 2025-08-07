import React, { useEffect, useState } from "react";
import { Advantages, AiDrivenExcellence, Features, HearFromClient, HeroBanner, InfiniteMove } from "../../components/products";
import { product2 } from "../../assets/landing_images/products";
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
import { Atom, Heart, Sparkles, HandFist, Hourglass, TrendingUp, Wind, Timer, Rocket, Earth, Wrench, Unplug, Headset } from "lucide-react";

const Peo: React.FC = () => {
    useEffect(() => {
        document.title = "Niural PEO | Niural"
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
            title: "The Best Benefits",
            description: "Customize benefits packages with large group health and benefits plans typically reserved for enterprise. Offer your team competitive healthcare, retirement options, and perks at a fraction of the usual cost."
        },
        {
            icon: <Sparkles />,
            title: "Automatic Compliance",
            description: "Niural manages compliance as a joint employer, handling workers’ comp, state registrations, W-2 and 1099 filings, and labor law mandates across jurisdictions."
        },
        {
            icon: <Atom />,
            title: "Modern Technology",
            description: "Most PEO runs on software built in the 80s. Niural has ultra-modern rails made with scalability in mind, and enterprise grade infrastructure."
        },
        {
            icon: <HandFist />,
            title: "All-in-One Platform",
            description: "Run payroll, international payments, expense management, EOR services, and more in a unified system with easy reporting and audit tools."
        },
    ]

    const key_advantages = [
        {
            icon:<Hourglass />,
            title: "Simplify Operations & Save Time",
            description: "Automate benefits, compliance, and payroll"
        },
        {
            icon:<TrendingUp />,
            title: "Attract & Retain Top Talent",
            description: "The best benefits draw the best workers"
        },
        {
            icon:<Wind />,
            title: "Scale with Confidence",
            description: "Built to scale and allow easy transition on or off PEO"
        },
    ]

    const hear_from_client = [
        {
            dialog: "We’ve been using Niural PEO at Cascade, and it’s been a fantastic experience. Onboarding was quick and painless. We also got better healthcare plans for less than we were paying before and no longer have to deal with state tax registrations. Highly recommend.",
            client: "Ethan Carter, Cascade Enterprises"
        }
    ]

    const delivering_reasult = [
        {
            icon: <Timer />,
            topic: "Save 20+ Hours Per Month:",
            explain: "Automate compliance, benefits, and payroll processes."
        },
        {
            icon: <Rocket />,
            topic: "Benefits Savings of 40%:",
            explain: "Access top-tier benefits at a fraction of the price."
        },
        {
            icon: <Earth />,
            topic: "Operate Globally:",
            explain: "Offer compliant and consistent benefit packages in different jurisdictions around the world."
        },
    ]

    const ai_driven_excellence = [
        {
            icon: <Sparkles />,
            slogon: "AI-Driven Compliance Solutions"
        },
        {
            icon: <Wrench/>,
            slogon: "Detailed Reporting & Audit Tools"
        },
        {
            icon: < Unplug/>,
            slogon: "Payroll & Benefits Integrations"
        },
        {
            icon: <Headset />,
            slogon: "Risk Mitigation & Dedicated Support"
        },
    ]

    return (
        <div>
            <HeroBanner
                feature="PEO"
                feature_slogon="Get Enterprise-Level Benefits, Regardless of Size"
                feature_statement="Niural PEO gives businesses of all sizes access to enterprise-level benefits, simplifying HR, compliance, and employee management. From healthcare to retirement, Niural ensures your global workforce is cared for."
                img={product2}
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
        </div>
    )
}

export default Peo