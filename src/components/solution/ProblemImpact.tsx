import React from "react";

interface IProblemImpact {
    problem: string,
    impact: string[]
}

const ProblemImpact: React.FC<IProblemImpact> = ({ problem, impact }) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-y-16 md:flex-row gap-x-8 md:w-[1280px] p-2 md:p-0 pb-16 md:pb-16">
                <div className="flex flex-col gap-y-4 md:w-60/100">
                    <p className="text-xl md:text-2xl font-medium">Problem</p>
                    <p className="text-gray-500">{problem}</p>
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="text-xl md:text-2xl font-medium">Impact</p>
                    {
                        impact.map((v, i) =>
                            <p
                                key={i}
                                className={`${impact.length != i + 1 ? "border-b border-gray-300 pb-2" : ""}`}
                            >
                                <span className="text-green-500">
                                    {v.slice(0, Math.ceil(v.length * 0.4))}
                                </span>
                                <span>
                                    {v.slice(Math.ceil(v.length * 0.4))}
                                </span>
                            </p>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default ProblemImpact