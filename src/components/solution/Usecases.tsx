import React from "react";

interface IUsecase {
    icon: React.ReactNode,
    title: string,
    description: string
}

interface IUsecases {
    usecases: IUsecase[]
}

const Usecases: React.FC<IUsecases> = ({ usecases }) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="w-full md:w-[1280px] px-2 md:px-0 pb-20">
                <div className="flex items-center justify-center gap-x-4">
                    <p className="text-blue-500 text-xl font-medium whitespace-nowrap">USE CASES</p>
                    <div className="border-b border-dashed w-full border-gray-300"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 pt-8">
                    {
                        usecases.map((v, i) =>
                            <div key={i} className="flex flex-col gap-y-2 md:gap-y-4 border border-gray-200 shadow md:shadow-xl rounded-2xl p-4 md:max-w-35/100">
                                <div className="text-green-500 bg-green-100 rounded-full w-fit p-2">{v.icon}</div>
                                <p className="md:text-xl font-medium">{v.title}</p>
                                <p className="text-gray-500">{v.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Usecases