import React from "react";
import { Features, HeroThing, OurSolution, ProblemImpact, Usecases } from "../../components/solution";
import { BriefcaseBusiness, CircleGauge, Globe, Megaphone, Sparkle } from "lucide-react";
import {
    automation,
    compliance,
    save
} from "../../assets/solutions"

const HR: React.FC = () => {
    const hero_thing = [
        {
            title: "HR",
            hero: "Enhance HR Operations with AI-Powered Hiring & Compliance",
            description: "Efficiently hire and onboard your global workforce, stay compliant, and improve worker performance and happiness — all from a platform purpose-built for HR professionals."
        }
    ]

    const problem = "Complex labor laws and payroll regulations consume significant time and HR resources. Balancing local hiring practices, international tax codes, and ever-changing compliance standards often leads to administrative bottlenecks, legal risks, and delayed hiring decisions."

    const impact = [
        "Over 60% of HR teams face compliance-related challenges that prevent them from acquiring their desired talent.",
        "Costly audits, legal penalties, and manual rework undermine efficiency and morale, keeping HR from strategic initiatives like talent development and engagement."
    ]

    const our_solution = "Niural's AI-driven platform helps HR professionals advance recruitment, compliance, and talent management. By automating the navigation of regional labor laws, tax policies, and benefits, Niural lets you focus on building an engaged, high-performing workforce. From onboarding to benefits to performance management, our platform is designed to support your HR team at every stage."

    const easy_workflow = [
        {
            icon: <Globe />,
            title: "Onboard Employees Worldwide",
            description: "Quickly add team members across borders with minimal manual input."
        },
        {
            icon: <Sparkle />,
            title: "AI-Powered Compliance",
            description: "Advanced AI SuperAgents monitor and adhere to the latest local regulations and labor requirements."
        },
        {
            icon: <CircleGauge />,
            title: "Effective Performance Management",
            description: "Streamline employee evaluations, feedback cycles, and goal-setting for sustained productivity."
        },
    ]

    const features = [
        {
            image: automation,
            title: "Automation",
            content: [
                {
                    title: "Smart Calculations",
                    description: "Automatically handle taxes, pensions, insurance, and benefits, minimizing manual errors and freeing HR to focus on strategic initiatives."
                },
                {
                    title: "Scheduled Disbursements",
                    description: "Automate pay cycles for timely, consistent compensation — boosting employee satisfaction and supporting HR objectives."
                }
            ]
        },
        {
            image: compliance,
            title: "Compliance",
            content: [
                {
                    title: "Real-Time Regulatory Updates",
                    description: "Our AI SuperAgents engine continuously tracks and applies labor law changes, keeping your HR team compliant."
                },
                {
                    title: "Audit-Ready Reporting",
                    description: "Generate detailed, compliant reports for internal stakeholders, auditors, or regulators at any time."
                }
            ]
        },
        {
            image: save,
            title: "Cost-Effectiveness",
            content: [
                {
                    title: "Transparent Exchange Rates",
                    description: "Get access to accurate, competitive currency conversions to minimize costs for cross-border payroll, keeping your finance team happy."
                },
                {
                    title: "Unified Management",
                    description: "Centralize employee data across multiple countries in one dashboard, reducing administrative workload and costs."
                }
            ]
        },

    ]

    const usecases = [
        {
            icon: <Globe />,
            title: "Global Tech Companies",
            description: "Quickly integrate international hires without manual and long onboarding processes, freeing HR to focus on culture and retention."
        },
        {
            icon: <Megaphone />,
            title: "Marketing & Advertising Agencies",
            description: "Effortlessly recruit, onboard, and manage diverse teams across multiple regions, ensuring compliance with complex regulatory frameworks."
        },
        {
            icon: <BriefcaseBusiness />,
            title: "Professional Services Firms",
            description: "Easily handle worker payments and manage misclassification risks, reinforcing trust and credibility."
        },
    ]

    return (
        <div className="pt-[120px] ">

            <HeroThing hero_thing={hero_thing} />

            <ProblemImpact
                problem={problem}
                impact={impact}
            />

            <OurSolution
                our_solution={our_solution}
                easy_workflow={easy_workflow}
            />

            <Features
                features={features}
            />

            <Usecases
                usecases={usecases}
            />

        </div>
    )
}

export default HR