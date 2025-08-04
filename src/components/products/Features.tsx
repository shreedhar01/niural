import React from "react";

interface IFeature {
    icon:React.ReactNode,
    title:string,
    description:string
}

interface IFeatures{
    features:IFeature[]
}

const Features: React.FC<IFeatures> = ({features}) => {
    return (
        <div className="flex justify-center items-center w-full p-2 md:p-0 my-8 md:my-16">
            <div className="md:w-[1280px]">
                <div className="flex justify-center items-center gap-x-4 mb-8">
                    <p className="text-green-400 font-medium">FEATURES</p>
                    <div className="border-b border-dashed border-gray-400 w-full my-4"></div>
                </div>

                <div className="flex flex-col md:grid grid-cols-3 gap-x-16 gap-y-16">
                    {
                        features.map(m =>
                            <div className="flex gap-x-4 gap-y-8">
                                {m.icon}
                                <div>
                                    <p className="text-xl font-mono">{m.title}</p>
                                    <p className="text-gray-500">{m.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Features