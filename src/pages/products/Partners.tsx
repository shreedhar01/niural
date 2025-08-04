import React, { useEffect } from "react";
import { Features, HeroBanner } from "../../components/products";
import { partners_img } from "../../assets/products";
import { Banknote, File, Newspaper, Snowflake, Users } from "lucide-react";

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
        </div>
    )
}

export default Partners