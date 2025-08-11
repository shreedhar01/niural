import React from "react";

interface IBenefit {
    icon: React.ReactNode,
    title: string,
    description: string
}

interface IBenefits {
    benefits: IBenefit[]
}

const Benefits: React.FC<IBenefits> = ({ benefits }) => {
    return (
        <div className="flex items-center justify-center w-full bg-gray-100">
            <div className="w-full md:w-[1280px] px-2 md:px-0 py-16">
                <p className="font-medium text-lg md:text-3xl">Benefits</p>
                <div className="flex flex-col md:flex-row gap-y-8 gap-x-4 pt-8">
                    {
                        benefits.map((v, i) =>
                            <div key={i} className="flex flex-col border border-gray-200 p-4 rounded-xl shadow-lg gap-y-24 bg-white md:max-w-33/100 md:min-w-32/100">
                                <div className="flex flex-col gap-y-4">
                                    <div className="border border-gray-300 p-2 text-green-500 w-fit rounded-full">
                                        {v.icon}
                                    </div>
                                    <p className="text-lg md:text-2xl font-medium ">{v.title}</p>
                                </div>
                                <p className="text-gray-500">{v.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Benefits