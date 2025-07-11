import React, { useEffect, useState } from "react";
import { Button, TitleBanner } from "../components";
import {
    Sparkles,
    Minus
} from 'lucide-react';

import {
    hero1,
    hero2,
    hero3
} from "../assets/hero/hero"

const Landing: React.FC = () => {
    useEffect(() => {
        document.title = "Niural - Powering Global HR Management";
    }, []);



    const [img, setImg] = useState(hero1)
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [hero1, hero2, hero3];

    useEffect(() => {
        setImg(images[currentIndex]);
    }, [currentIndex]);

    useEffect(() => {
        const performPeriodicAction = () => {
            setCurrentIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % images.length;
                setImg(images[nextIndex]);
                return nextIndex;
            });
        };

        // Set up the interval
        const intervalId = setInterval(performPeriodicAction, 7000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className=" flex flex-col justify-center items-center w-full pt-[200px]">

            {/* hero section */}
            <div className="flex flex-col md:flex-row w-full justify-start items-center md:w-[1280px] ">
                <div className="m-2">
                    <div className="card ">
                        <div className="bg-white p-2 rounded-2xl hover:bg-gray-100 shadow">
                            <TitleBanner
                                className="gap-2 border rounded-2xl bg-gradient-to-r from-violet-900 to-purple-400 bg-clip-text text-transparent text-sm"
                                icon={<Sparkles className="text-black" size={16} />}
                                iconPosition="left"
                                children="Future of Intelligent Finance is Here"
                            />
                        </div>
                    </div>

                    <div className=" p-2 mt-4 mb-5">
                        <p className="text-2xl md:text-5xl font-bold">The First PEO Built with Intelligence and Robust Compliance</p>
                        <p className="text-base md:text-lg  mt-4">Your AI Co-Pilot for managing payroll and benefits, in the US and beyond.</p>
                    </div>

                    <div className="flex gap-4">
                        <Button
                            onClick={() => (window.open("https://app.niural.com/auth/employer/signup", "_blank", "noopener,noreferrer"))}
                            className="rounded shadow"
                            children="Get Started"
                        />
                        <Button
                            variant="secondary"
                            children="Book a Demo"
                            className="rounded"
                            onClick={() => (window.open("https://meetings.hubspot.com/niural/book-a-demo?uuid=0b70745e-c8ca-4d3d-a995-914c278918df", '_blank', 'noopener,noreferrer'))}
                        />
                    </div>
                </div>

                {/* image gallary */}
                <div className="p-2 mt-10 relative" >
                    <div className="image_card">
                        <img width='800' height="400" src={img} alt="hero images" className="rounded-2xl" />
                    </div>
                    <button
                        className={` absolute ${currentIndex === 2 ? "text-white": "text-gray-900"} right-10 bottom-5 cursor-pointer`}
                        onClick={() => setCurrentIndex(2)}
                    >
                        {<Minus size={40} />}
                    </button>
                    <button
                        className={`absolute ${currentIndex === 1 ? "text-white": "text-gray-900"} right-18 bottom-5 cursor-pointer`}
                        onClick={() => setCurrentIndex(1)}
                    >
                        {<Minus size={40} />}
                    </button>
                    <button
                        className={` absolute ${currentIndex === 0 ? "text-white": "text-gray-900"} right-26 bottom-5 cursor-pointer`}
                        onClick={() => setCurrentIndex(0)}
                    >
                        {<Minus size={40} />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing