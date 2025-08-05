import React from "react";

interface IAdvantage {
    icon: React.ReactNode,
    title: string,
    description: string
}

interface IAdvantages {
    key_advantages: IAdvantage[]
}

const Advantages: React.FC<IAdvantages> = ({ key_advantages }) => {
    return (
        <div className="flex items-center justify-center w-full bg-gray-100 p-2 md:p-0">
            <div className="flex flex-col gap-y-8 w-full md:w-[1280px] py-16">
                <p className="md:text-2xl font-medium">Key Advantages</p>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-4 ">
                    {
                        key_advantages.map((i, k) =>
                            <div key={k} className="flex flex-col items-center justify-center gap-y-4 bg-white rounded-xl  py-8 md:px-16 shadow-xl">
                                <div className="text-green-400 flex items-center justify-center bg-gray-100 p-4 rounded-2xl">
                                    {i.icon}
                                </div>
                                <p className=" font-medium text-center">{i.title}</p>
                                <p className="text-gray-400 text-center">{i.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Advantages