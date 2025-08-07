import React, { useEffect } from "react";
import { Advantages, AiDrivenExcellence, Features, GetStarted, HearFromClient, HeroBanner } from "../../components/products";
import { partners_img } from "../../assets/products";
import { Banknote, Bug, Earth, File, Hourglass, Monitor, Newspaper, Snowflake, Sparkle, TrendingDown, Unplug, Users } from "lucide-react";

const Partners: React.FC = () => {
    useEffect(() => {
        document.title = "Niural Partners | Niural"
    }, [])

    const features = [
        {
            icon: <File />,
            title: "Top-Tier Reporting",
            description: "Detailed reports with easy access to payroll, tax forms, trends, and notifications for authorized clients."
        },
        {
            icon: <Users />,
            title: "Simple Coordination",
            description: "Assign client information to different team members for easy client management."
        },
        {
            icon: <Snowflake />,
            title: "All-in-One Platform",
            description: "Run US payroll, international payments, bill pay, and EOR in one platform."
        },
        {
            icon: <Newspaper />,
            title: "Customizable Invoicing",
            description: "Individualize invoices for each of your clients."
        },
        {
            icon: <Banknote />,
            title: "Work with Your Current Systems",
            description: "Advanced integrations with all the leading accounting software."
        },
    ]

    const key_advantages = [
        {
            icon:<Hourglass />,
            title:"Discounts for Clients",
            description:"Offer your clients a discounted billing rate"
        },
        {
            icon:<TrendingDown />,
            title:"Discounts for Partners",
            description:"Partners get a discounted rate"
        },
        {
            icon:<Earth />,
            title:"Revenue Sharing",
            description:"Bill clients at the advertised rate and receive revenue share"
        },
    ]

    const hear_from_client = [
        {
            dialog: "Since we started using the Niural CPA Dashboard, managing our clients has become so much easier. Everything we need is in one place, making our team more efficient, and payroll processing super easy. It's really changed the way we work, giving us more time to focus on what's important - our clients.",
            client: " Focus Finance"
        }
    ]

    const ai_driven_excellence = [
        {
            icon: <Monitor />,
            slogon: "Granular & Transparent Reporting"
        },
        {
            icon: <Sparkle />,
            slogon: "Fast & Easy Payroll Automation"
        },
        {
            icon: <Bug />,
            slogon: "Bulk Upload + Error Detection"
        },
        {
            icon: <Unplug />,
            slogon: "Integrate with Existing Systems"
        },
    ]
    return (
        <div>
            <HeroBanner
                feature="partners"
                feature_slogon="Niural Helps Partners Do More with Less"
                feature_statement="Our platform offers tailored solutions for partners - CPA and accounting firms, payroll bureaus, PEO and health brokers & fractional CFOs - enabling you to automate payroll, streamline workflows, and foster better collaboration with your clients."
                img={partners_img}
            />

            <Features
                features={features}
            />

            <Advantages
                key_advantages={key_advantages}
            />

            <HearFromClient
                hear_from_client={hear_from_client}
            />

            <AiDrivenExcellence
                ai_driven_excellence={ai_driven_excellence}
            />
            <GetStarted/>
        </div>
    )
}

export default Partners