import React from "react";

interface IEasyWorkflow{
    icon:React.ReactNode,
    title:string,
    description:string
}

interface IOurSolution{
    our_solution:string,
    easy_workflow:IEasyWorkflow[]
}

const OurSolution: React.FC<IOurSolution> = ({our_solution,easy_workflow}) => {
    return (
        <div className="flex items-center justify-center w-full bg-gray-100">
            <div className="flex flex-col gap-y-8 md:w-[1280px] pb-16 pt-20 md:pt-40 px-2 ">
                <div className="flex flex-col gap-y-4">
                    <p className="text-xl md:text-3xl font-medium">How Our Solutions Work</p>
                    <p className="text-gray-700 md:max-w-80/100">{our_solution}</p>
                </div>

                <div className="flex flex-col gap-y-4">
                    <p className="text-xl font-medium">Easy Workflow</p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-y-8">
                        {
                            easy_workflow.map(i =>
                                <SimpleCard
                                    icon={i.icon}
                                    title={i.title}
                                    description={i.description}
                                />
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurSolution


interface ISimpleCard {
    icon: React.ReactNode,
    title: string,
    description: string
}

const SimpleCard: React.FC<ISimpleCard> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col gap-y-4 px-4 py-8 bg-white rounded-md md:max-w-30/100 shadow">
            <div className="flex items-center gap-x-2">
                <div className="text-green-500">
                    {icon}
                </div>
                <p className="font-medium md:text-xl">{title}</p>
            </div>
            <p className="text-gray-500">{description}</p>
        </div>
    )
}