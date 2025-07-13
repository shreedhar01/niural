import React, { useEffect, useState } from "react";
import { Button, Loading, TitleBanner } from "../components";
import {
    Sparkles,
    Minus,
    Box
} from 'lucide-react';

//hero
import {
    hero1,
    hero2,
    hero3
} from "../assets/landing_images/hero"


//trusted company
import {
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7
} from "../assets/landing_images/trusted_company"


//products
import {
    product1,
    product2,
    product3,
    product4,
    product5
} from "../assets/landing_images/products"

const Landing: React.FC = () => {
    useEffect(() => {
        document.title = "Niural - Powering Global HR Management";
    }, []);


    //here section
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


    //trusted customer section
    const [isScrollPaused, setIsScrollPaused] = useState(false)
    const trusted_customer_logo = [customer1, customer2, customer3, customer4, customer5, customer6, customer7]

    //our products
    const products = ["US Payroll", "US PEO", "EOR", "Contractor Management", "Niural Pay"]
    const productsImage = [product1, product2, product3, product4, product5]
    const [loadingNumber, setLoadingNumber] = useState<number>(0)
    const [lodeItem, setLodeItem] = useState<number>(0)

    useEffect(() => {
        const changeIndex = setInterval(() => {
            setLodeItem(pre => {
                if (pre < products.length - 1) return pre + 1;
                return 0
            })
            setLoadingNumber(0)
        }, 4000)

        const loder = setInterval(() => {
            setLoadingNumber(pre => {
                if (pre < 100) return pre + 1;
                // clearInterval(loadingNumber) 
                return 100
            })
        }, 40)

        return () => {
            clearInterval(loder)
            clearInterval(changeIndex)
        }

    }, [])

    return (
        <div className=" flex flex-col justify-center items-center w-full pt-[200px]">

            {/* hero section */}
            <div className="flex flex-col md:flex-row w-full justify-start items-center md:w-[1280px] mb-8 ">
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
                        className={` absolute ${currentIndex === 2 ? "text-white" : "text-gray-900"} right-10 bottom-5 cursor-pointer`}
                        onClick={() => setCurrentIndex(2)}
                    >
                        {<Minus size={40} />}
                    </button>
                    <button
                        className={`absolute ${currentIndex === 1 ? "text-white" : "text-gray-900"} right-18 bottom-5 cursor-pointer`}
                        onClick={() => setCurrentIndex(1)}
                    >
                        {<Minus size={40} />}
                    </button>
                    <button
                        className={` absolute ${currentIndex === 0 ? "text-white" : "text-gray-900"} right-26 bottom-5 cursor-pointer`}
                        onClick={() => setCurrentIndex(0)}
                    >
                        {<Minus size={40} />}
                    </button>
                </div>
            </div>

            {/* trusted Company */}
            <div className="md:grid md:grid-cols-5 w-full justify-start items-center md:w-[1280px] md:mb-8">
                <div className="col-span-1 ml-2 md:ml-0 gap-4 mb-4">
                    <p className="text-base md:text-lg  mt-4">Trusted by Hundreds of Companies, from Innovative Startups to Global Enterprises</p>
                </div>

                {/* sliding images */}
                <div
                    className="col-span-4 m-2 md:m-0 overflow-hidden flex items-center justify-center horizontal-mask"
                    onMouseEnter={() => setIsScrollPaused(true)}
                    onMouseLeave={() => setIsScrollPaused(false)}
                >
                    <div className={`flex  items-center hover:  gap-25 animate-infinite-scroll ${isScrollPaused ? "animate_paused" : ""}`}>
                        {
                            [...trusted_customer_logo, ...trusted_customer_logo, ...trusted_customer_logo].map((item, index) =>
                                <img key={index} className="h-[40px] flex-shrink-0" src={item} alt="" />)
                        }
                    </div>
                </div>
            </div>

            {/* our products */}
            <div className="flex flex-col w-full justify-center items-center md:w-[1280px] mt-24 ">
                <TitleBanner
                    icon={<Box className="text-green-500" size={16} />}
                    iconPosition="left"
                    className="shadow rounded gap-2 "
                    children="Our Products"
                />
                <div className="mt-4 md:w-[1000px]">
                    <p className="text-2xl md:text-4xl text-center font-medium">The Ingenuity of Startups, Reliability of Enterprise, and Precision of World-Class Engineering</p>
                </div>

                <div className="flex items-center justify-center gap-2 rounded-3xl shadow border-green-600 p-2 m-8 md:flex-wrap lg:flex-nowrap overflow-x-auto md:overflow-x-visible ">
                    {
                        products.map((item, index) =>
                            index === lodeItem ?
                                <Loading
                                    loading={loadingNumber}
                                    children={item}
                                    onClick={() => setLodeItem(index)}
                                />
                                :
                                <Loading
                                    children={item}
                                    onClick={() => setLodeItem(index)}
                                />
                        )
                    }
                </div>
            </div>
            <div className="flex justify-center items-end bg-gradient-to-t from-green-100 to-white  w-full relative min-h-[240px] gap-2 md:min-h-[592px] overflow-hidden ">
                <div className="flex flex-col w-full justify-center items-center md:w-[1280px] mt-4 mx-4 absolute top-5 ">
                    <img className="rounded-2xl " src={productsImage[lodeItem]} alt="" />
                </div>
                {
                    window.innerWidth > 768 ?
                <Button
                    onClick={() => (window.open("https://app.niural.com/auth/employer/signup", "_blank", "noopener,noreferrer"))}
                    className="rounded shadow absolute bottom-5"
                    children="Get Started"
                /> : ""
                }
            </div>
        </div>
    )
}

export default Landing