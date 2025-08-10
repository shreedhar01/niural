import React from "react";

interface IContent {
    title: string,
    description: string
}

interface IFeature {
    image: string,
    title: string,
    content: IContent[]
}

interface IFeatures {
    features: IFeature[]
}

const Features: React.FC<IFeatures> = ({ features }) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-y-8 w-full md:w-[1280px] px-2 md:px-0 py-20 md:py-40">
                <div className="flex items-center justify-center gap-x-4">
                    <p className="md:text-xl text-blue-600 font-medium">FEATURES</p>
                    <div className="border-b border-dashed border-gray-400 w-full"></div>
                </div>
                <div className="flex flex-col gap-y-24">
                    {
                        features.map((v, i) =>
                            <div key={i} className="flex flex-col md:flex-row justify-between gap-y-8 gap-x-16">
                                {i % 2 !== 0 && window.innerWidth > 768 ? <img className="h-[324px]" src={v.image} alt="" /> : <></>}
                                <div className="flex flex-col gap-y-4 md:gap-y-8">
                                    <p className="font-bold md:text-3xl md:font-medium">{v.title}</p>
                                    {
                                        v.content.map(v =>
                                            <div>
                                                <p className="md:text-xl font-medium">{v.title}</p>
                                                <p className="text-gray-500">{v.description}</p>
                                            </div>
                                        )
                                    }
                                </div>
                                {i % 2 === 0 || window.innerWidth < 768 ?  <img className=" h-[260px] md:h-[324px]" src={v.image} alt="" /> : <></>}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Features