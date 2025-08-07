import React from "react";
import { HeroThing, OurSolution, ProblemImpact } from "../../components/solution";
import { CircleGauge, Globe, Sparkle } from "lucide-react";

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
            icon: <Sparkle/>,
            title: "AI-Powered Compliance",
            description: "Advanced AI SuperAgents monitor and adhere to the latest local regulations and labor requirements."
        },
        {
            icon: <CircleGauge/>,
            title: "Effective Performance Management",
            description: "Streamline employee evaluations, feedback cycles, and goal-setting for sustained productivity."
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

        </div>
    )
}

export default HR