import React, { useEffect, useState } from "react";
import { get_started } from "../../assets/products";
import Button from "../Button";
import { ChevronRight } from "lucide-react";

const GetStarted: React.FC = () => {
    const [wind, setWind] = useState(true);
    useEffect(() => {
        setWind(window.innerWidth > 768 ? true : false)
    }, [])
    return (
        <div
            className="flex items-center justify-center w-full bg-cover bg-no-repeat h-[280px] md:h-[400px]"
            style={{ backgroundImage: `url(${get_started})` }}
        >
            <div className="flex flex-col justify-center w-full md:w-[1280px] h-full gap-y-4 p-2 md:p-0">
                <p className="text-white text-xl md:text-4xl font-medium md:font-bold">Ready to get Started?</p>
                <div className="flex gap-x-8">
                    <Button
                        size={wind ? "big" : "mid"}
                        children="Get Started"
                        className="rounded border border-green-400"
                        onClick={() => window.open("https://app.niural.com/auth/employer/signup", "_", "")}
                    />
                    <Button
                        size={wind ? "big" : "mid"}
                        variant="secondary"
                        children="Get Started"
                        className="gap-x-4 rounded border border-gray-300"
                        icon={<ChevronRight size={20} />}
                        iconPosition="right"
                        onClick={() => window.open("https://meetings.hubspot.com/niural/book-a-demo?uuid=cdf0d67c-2fb7-4fcd-9223-861caddefc16", "_", "")}
                    />
                </div>
            </div>
        </div>
    )
}

export default GetStarted