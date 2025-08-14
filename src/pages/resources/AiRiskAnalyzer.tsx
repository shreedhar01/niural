import React, { useEffect, useRef, useState } from "react";
import {
    button_svg,
    rader_svg,
    rotating_svg
} from "../../assets/resources"
import { Check, CircleCheck, CircleX, CloudUpload, FilePlus, Sparkle } from "lucide-react";
import { Button } from "../../components";

const AiRiskAnalyzer: React.FC = () => {



    const [file, setFile] = useState<File[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }



    const [notify, setNotify] = useState<{ type: string, content: string }>({ type: "", content: "" })
    const [notifyenable, setNotifyEnable] = useState(false)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (!paused) {
            timer = setTimeout(() => {
                setNotifyEnable(false)
            }, 2000);

        }

        return () => clearTimeout(timer)
    }, [notify, paused])



    const [analyze, setAnalyze] = useState(true)


    return (
        <div className="pt-[120px]">

            {/* notify */}
            <div
                className={`fixed bottom-5 right-5 z-10 gap-x-2 bg-white rounded border border-gray-200 md:min-w-50 md:max-w-80     px-2 py-2 ${notifyenable ? "flex" : "hidden"}`}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className={`${notify.type === "error" ? "text-red-500" : "text-green-500"}`}
                    onClick={() => {
                        setNotify({ type: "", content: "" })
                        setNotifyEnable(false)
                    }}
                >
                    {notifyenable && notify.type === "error" ? <CircleX /> : <CircleCheck />}
                </div>
                <p>{notify.content}</p>
            </div>

            <div className={`flex items-center justify-center w-full ${ analyze ? "pb-[650px] md:pb-[500px]":"pb-[500px] md:pb-[250px]"}`}>
                <div className="flex flex-col items-center justify-center w-full md:w-[1280px] ">
                    <div
                        className="relative flex flex-col items-center justify-center w-full md:w-[1280px] px-2 md:px-0 bg-no-repeat bg-cover md:bg-contain bg-center min-h-[300px] md:min-h-[600px] overflow-hidden"
                        style={{ backgroundImage: `url("${rader_svg}")` }}
                    >
                        <div
                            className="box min-w-[300px] md:min-w-[600px] min-h-[300px] md:min-h-[600px] bg-no-repeat bg-contain bg-center"
                            style={{ backgroundImage: `url("${rotating_svg}")` }}
                        >
                        </div>

                        <div className="flex flex-col text-center md:w-45/100">
                            <img className="h-20 md:h-30" src={button_svg} alt="" />
                            <p className="text-lg font-medium">Your AI-Powered Contract Copilot</p>
                            <p className="text-gray-500">Reading long, vague business contracts, proposals, and MOUs is not just boring —it's risky. A missed clause, an unfavorable term. or a compliance violation can cost your business more than just money. That's why Risk Analyzer exists.</p>
                        </div>
                    </div>

                    <div className="absolute top-95 md:top-150 w-full   px-4 md:px-16 cursor-pointer" >

                        <div className="flex flex-col p-4 gap-y-8 justify-center md:justify-center md:items-center border rounded-2xl bg-white border-gray-300">
                            <p className="font-medium md:text-xl">See Risk Analyzer in Action</p>
                            <ul className="flex flex-col md:flex-row  gap-x-4">
                                {[
                                    "A Clean Summary in Seconds",
                                    "Suggestions to improve terms",
                                    "A detailed risk report",
                                    "Favorability Insights"
                                ].map((text, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                                        <div className="text-green-500"><Check size={16} /></div>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <div className={`flex flex-col ${analyze ? "items-center justify-center py-16" : ""}  border rounded-2xl border-violet-500 shadow-2xl md:min-w-50/100 md:max-w-55/100 gap-y-4 `} onClick={handleClick}>
                                {
                                    analyze ?
                                        <>
                                            <input
                                                className="hidden"
                                                ref={fileInputRef}
                                                type="file"
                                                onChange={(e) => {
                                                    if (e.target.files?.length) {
                                                        if (e.target.files[0].size > (5 * 10 ** 6)) {
                                                            setNotify({ type: "error", content: "File size exceeds the maximum limit of 5 MB." })
                                                            setNotifyEnable(true)
                                                            return
                                                        }
                                                        setFile(Array.from(e.target.files))
                                                        console.log(e.target.files[0]);

                                                    }
                                                }}
                                            />
                                            <div>
                                                <CloudUpload />
                                            </div>
                                            <p className="text-gray-500">Choose a file or drag & drop it here.</p>
                                            <div className="flex items-center justify-center gap-x-2 border border-gray-300 rounded py-2 px-4">
                                                <div className="text-gray-500">
                                                    <FilePlus className="h-5 md:h-10" />
                                                </div>
                                                <p className="text-gray-500">Upload File</p>
                                            </div>
                                        </>
                                        : <>
                                            <div className="flex flex-col w-full md:flex-row p-4 gap-4">
                                                <div className="flex flex-col md:min-w-47/100 bg-gradient-to-tr from-pink-300 to-violet-400 rounded p-4 gap-y-4">
                                                    <p className="bg-white rounded p-2">{file[0].name}</p>
                                                    <p>{notify.content}</p>
                                                </div>
                                                <div className="flex flex-col gap-y-4">
                                                    <p className="text-gray-500">To receive your results, please remain on this page. Alternatively, we will send the results directly to your inbox once they are ready.</p>
                                                    <div className="flex flex-col gap-y-2">
                                                        <p className="text-gray-500">Drop us your email</p>
                                                        <div className="flex justify-between gap-2">
                                                            <input className="h-10 border rounded px-2" type="text" placeholder="Enter your email" />
                                                            <Button
                                                                size="mid"
                                                                children="Submit"
                                                                className="rounded"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                }

                            </div>
                            <div className={`${file.length > 0 && analyze ? "flex" : "hidden"} flex-col rounded border border-gray-300 shadow-2xl md:min-w-50/100 md:max-w-55/100 py-4 px-4`}>
                                <div>
                                    <p>{file[0]?.name}</p>
                                    <p>{file[0]?.size / 1000} kb</p>
                                </div>
                            </div>

                            {
                                analyze &&
                                <div
                                    className={`${file[0] ? "flex" : "hidden"} bg-violet-500 rounded gap-x-2 p-2`}
                                    onClick={() => {
                                        setTimeout(() => {
                                            setAnalyze(false)
                                            setNotify({ type: "success", content: "Your document is queued for processing." })
                                        }, 1000);
                                    }}
                                >
                                    <div className="text-white">
                                        <Sparkle />
                                    </div>
                                    <p className="text-white">Analyze Now</p>
                                </div>
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiRiskAnalyzer