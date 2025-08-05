import React from "react";

interface IFromClient {
    dialog: string,
    client: string
}

interface IDeliveringResult {
    icon: React.ReactNode,
    topic: string,
    explain: string
}

interface IHearFromClient {
    hear_from_client: IFromClient[],
    delivering_reasult?: IDeliveringResult[]
}

const HearFromClient: React.FC<IHearFromClient> = ({ hear_from_client, delivering_reasult }) => {
    return (
        <div className="flex items-center justify-center w-full p-2 md:p-0">
            <div className="flex flex-col gap-y-16 md:grid grid-cols-15 md:w-[1280px] py-16">
                <div className={`flex flex-col gap-y-8 ${delivering_reasult ? "col-span-7" : "col-span-15"}`}>
                    <p className="font-medium text-green-400">Hear from our Clients</p>
                    <p className="text-xl md:text-2xl font-medium">"{hear_from_client[0].dialog}"</p>
                    <p className="text-gray-500">- {hear_from_client[0].client}</p>
                </div>
                {delivering_reasult ?
                    <>
                        <div className=" hidden md:flex items-center justify-center col-span-1">
                            <div className="h-full border-l border-dashed border-green-400"></div>
                        </div>
                        <div className="flex flex-col gap-y-8 col-span-7 ">
                            <p className="font-medium text-green-400">Delivering Results</p>
                            {
                                delivering_reasult.map((v, i) =>
                                    <div key={i} className="flex gap-x-2">
                                        <div className="text-green-400">
                                            {v.icon}
                                        </div>
                                        <p className="md:text-xl"><span className="font-medium">{v.topic}</span> <span>{v.explain}</span></p>
                                    </div>
                                )
                            }
                        </div>
                    </>
                    : ""
                }
            </div>
        </div>
    )
}

export default HearFromClient