import React, { useEffect, useState } from "react";
import { Button, Loading, TitleBanner } from "../components";
import {
    Sparkles,
    Minus,
    Box,
    Heart,
    Rocket,
    Cpu,
    GitFork,
    ListChecks,
    SendHorizontal,
    ChevronRight,
    ChevronLeft,
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


//benefits
import {
    benefit1,
    benefit2,
    benefit3,
    benefit4,
    benefit5,
    benefit6
} from "../assets/landing_images/benefits"
import { Card } from "../components/landing_components";


//niural's ai
import {
    central,
    clara,
    emma,
    lisa,
    perry,
    ray,
    walt
} from "../assets/landing_images/niural's_ai"
import { useNavigate } from "react-router-dom";


const Landing: React.FC = () => {
    const navigate = useNavigate()

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


    //benefits
    const benefits = [
        {
            heading: "Automated Payroll & Compliance",
            info: "Eliminate manual errors and automatically comply with regulatory changes.",
            image: benefit1,
            size: "small"
        },
        {
            heading: "Hire Your Workforce Anywhere",
            info: "Expand your team globally without the administrative burden.",
            image: benefit2,
            size: "big"
        },
        {
            heading: "Performance Driven Success",
            info: "Track and analyze team performance toward business goals to maximize results.",
            image: benefit3,
            size: "big"
        },
        {
            heading: "Enhanced Cash Management",
            info: "Gain better control over cash flow with automated AR & AP processes.",
            image: benefit4,
            size: "small"
        },
        {
            heading: "Multipurpose Wallet",
            info: "Optimize your cash flow with customizable, multi-currency wallets.",
            image: benefit5,
            size: "small"
        },
        {
            heading: "ACentralized HRIS for Growing Teams",
            info: "Automate HR admin tasks to keep your focus on people, performance, and growth.",
            image: benefit6,
            size: "big"
        },
    ] as const


    //niural's ai
    const [niuralAi, setNiuralAI] = useState("Clara")
    const niuralsAi = [
        {
            name: "Clara",
            img: clara,
            subTitle: "Generation",
            info: "You’ve added new hires in your system but haven’t created contracts yet. Shall I draft them for you?"
        },
        {
            name: "Emma",
            img: emma,
            subTitle: "Assistance",
            info: "Do you want to know your schedules for today?"
        },
        {
            name: "Lisa",
            img: lisa,
            subTitle: "Generation",
            info: "Did you know there’s a new tax regulation in the UK that could affect your payroll? Would you like me to explain the changes?"
        },
        {
            name: "Perry",
            img: perry,
            subTitle: "Suggestions & Q/A",
            info: "It's December 5th, it's time to run payroll. Do you want me to run it?"
        },
        {
            name: "Ray",
            img: ray,
            subTitle: "Analytical",
            info: "Would you like me to analyze your payroll costs and suggest areas for optimization?"
        },
        {
            name: "Walt",
            img: walt,
            subTitle: "Automation",
            info: "You're manually approving payroll entries. Would you like me to set up an automated workflow to save you time?"
        },
    ]


    //testimonials
    const [startIndex, setStartIndex] = useState(0)
    const testimonials = [
        {
            say: "We decided to use Niural because the team was extremely responsive, and it matched all of our needs in a contracting platform. We were considering other platforms as well (Deel, Remote) but ultimately went with Niural since we felt more confident in (1) their ability to support a crypto workflow and (2) their white glove customer service approach.",
            name: "Richard Wu",
            org: "Co-Founder & CTO, Tensor"
        },
        {
            say: "Moving to Niural's payroll system changed everything for us at Nepal Tea Collective. It saved us hours of work every month and made payroll quick and easy. What really stood out was how quickly Niural's team responded whenever we needed help. This has allowed us to focus more on our passion for bringing the finest teas of the world to our audience, knowing that payroll is handled by the experts.",
            name: "Pratik Rijal",
            org: "COO, Nepal Tea Collective"
        },
        {
            say: "Niural is not just a vendor to us but has become an extension of our team. Initially, we started with contractor payments, and now we use the full suite of services globally. We have multiple subsidiaries, complex payment needs, and lots of compliance requirements based on our growth. Niural was the only tech company that could handle all of it easily.",
            name: "David Kuhn",
            org: "General Counsel, Karate.com"
        },
        {
            say: "Before Niural, our payments and compliance process for fund payments was slow, and managing payments took a very long time. With Niural Pay, we have streamlined both receivables and payables, and are able to handle a lot more clients than we could previously. The Niural Pay product has been a game changer for us.",
            name: "Kwame Lewis",
            org: "Co-Founder, LewisLevy Consulting"
        }
    ]
    const testimonial = [
        (startIndex + testimonials.length - 1) % testimonials.length,
        startIndex,
        (startIndex + 1) % testimonials.length
    ]


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
                    <div className={`flex  items-center  gap-25 animate-infinite-scroll ${isScrollPaused ? "animate_paused" : ""}`}>
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

            {/* benefits */}
            <div className="flex flex-col w-full justify-start md:w-[1280px] mt-24 ">
                <div className="flex flex-col items-start  justify-start m-2">
                    <TitleBanner
                        className="gap-2 shadow rounded"
                        icon={<Heart className="text-green-500" size={16} />}
                        iconPosition="left"
                        children="Benefits"
                    />

                    <p
                        className="flex items-center text-2xl md:text-5xl font-medium gap-4 mt-2 md:mt-4"
                    >
                        Businesses'
                        <span
                            className="flex bg-gray-200 items-center gap-4 p-2 rounded-2xl"
                        >
                            {<Rocket className="text-blue-500" size={40} />}NewRule
                        </span>
                        is Niural
                    </p>
                    <p
                        className=" md:w-2/3 md:text-xl mt-2 md:mt-4"
                    >
                        Niural modernizes an outdated industry by bringing all you need to hire, manage, and pay global workforces in one intelligent, cohesive solution.
                    </p>

                </div>
                <div className="flex flex-wrap m-4 md:m-0 md:space-y-10">
                    {
                        benefits.map(item =>
                            <Card
                                size={item.size}
                                heading={item.heading}
                                info={item.info}
                                image={item.image}
                                className="rounded-2xl"
                            />
                        )
                    }

                </div>
            </div>

            {/* niural's ai */}
            <div className="flex flex-col w-full justify-start md:w-[1280px] md:mt-60 my-2">
                <div className="flex-start flex-col items-start m-2">
                    <TitleBanner
                        className="gap-2 shadow rounded"
                        icon={<Sparkles className="text-purple-900" size={16} />}
                        iconPosition="left"
                        children="Niural sAI"
                    />

                    <p
                        className="hidden md:flex flex-wrap items-center text-2xl md:text-5xl font-medium gap-4 mt-2 md:mt-4 "
                    >
                        Unlock
                        <span
                            className="flex bg-gray-200 items-center gap-4 p-2 rounded-2xl"
                        >
                            {<Cpu className="text-green-400" size={40} />}Intelligence
                        </span>,
                        <span
                            className="flex bg-gray-200 items-center gap-4 p-2 rounded-2xl"
                        >
                            {<GitFork className="text-green-400" size={40} />}Automation
                        </span>, &
                        <span
                            className="flex bg-gray-200 items-center gap-4 p-2 rounded-2xl"
                        >
                            {<ListChecks className="text-green-400" size={40} />}Productivity
                        </span>,
                        with Niural AI
                    </p>

                    {/* small device p */}
                    <p className="md:hidden items-center text-2xl  font-medium gap-4 mt-2">
                        Unlock Operational Efficiency, Security & Automation with the Niural AI
                    </p>
                    <p
                        className=" md:w-2/3 md:text-xl mt-2 md:mt-4"
                    >
                        Niural's AI SuperAgents bring precision and automation to every task.
                    </p>

                </div>


                <div className="flex-start items-center flex-col md:flex-row"  >
                    <div className="w-full md:w-1/2 flex-start flex-col space-y-4 mx-2">
                        <div className="flex-start items-start flex-col border border-gray-300 shadow rounded-xl p-2 md:max-w-2/3 min-h-[120px] md:min-h-[140px]">
                            <div className="flex-center space-x-2 transition-all duration-300 ease-in-out">
                                <img className=" h-8" src={niuralsAi.find(item => item.name === niuralAi)?.img} alt="" />
                                <p className="text-xl">{niuralAi}</p>
                                <p>-</p>
                                <p>{niuralsAi.find(item => item.name === niuralAi)?.subTitle}</p>
                            </div>
                            <p className="ml-10">{niuralsAi.find(item => item.name === niuralAi)?.info}</p>
                        </div>

                        <Button
                            onClick={() => (window.open("https://app.niural.com/auth/employer/signup", "_blank", "noopener,noreferrer"))}
                            variant="secondary"
                            icon={<SendHorizontal className="bg-gray-200" />}
                            iconPosition="right"
                            children={`Ask${niuralAi}`}
                            className="md:w-2/3 rounded-xl border border-gray-300 "
                        />
                    </div>

                    {/* roatating imag */}
                    <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
                        <div className="relative w-[400px] md:w-[600px] h-[400px] md:h-[600px] rotate-x-[50deg] rotate-z-[45deg] ">
                            {/* Central image */}
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-full "
                                style={{
                                    backgroundImage: `url("${central}")`,
                                }}
                            />

                            <div
                                className="absolute inset-0 animate-spins   rounded-full"

                            >
                                {niuralsAi.map((ai, index) => {
                                    const angle = (index * 60);

                                    // Define different radii for different screen sizes
                                    const getResponsiveRadius = () => {
                                        if (window.innerWidth >= 768) {
                                            return { container: 300, inner: 150, safe: 200 }; // Desktop
                                        } else {
                                            return { container: 200, inner: 100, safe: 140 }; // Mobile
                                        }
                                    };

                                    const { safe: safeRadius } = getResponsiveRadius();
                                    const x = Math.cos(angle * Math.PI / 180) * safeRadius;
                                    const y = Math.sin(angle * Math.PI / 180) * safeRadius;

                                    return (
                                        <div
                                            key={index}
                                            className="absolute flex items-center gap-1 sm:gap-2 md:gap-4 animate_counter bg-white border border-gray-300 shadow p-1 sm:p-1.5 md:p-2 rounded hover:bg-green-200"
                                            style={{
                                                left: `calc(50% + ${x}px - 50px)`,
                                                top: `calc(50% + ${y}px - 16px)`,
                                            }}
                                            onMouseEnter={() => setNiuralAI(ai.name)}
                                        >
                                            <img className="w-4 sm:w-6 md:w-8 flex-shrink-0" src={ai.img} alt="" />
                                            <p className="font-medium text-xs sm:text-sm md:text-base truncate max-w-[60px] sm:max-w-[80px] md:max-w-none">
                                                {ai.name}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimonials */}
            <div className="flex-center flex-col w-full bg-gray-200">
                <div className="flex-start flex-col w-full md:w-[1280px] md:mt-20 my-2 ">
                    <div className="flex flex-col items-start  justify-start m-2">
                        <TitleBanner
                            className="gap-2 shadow rounded"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                    className="text-green-500"
                                >
                                    <path
                                        d="M235.32,180l-36.24-36.25L162.62,23.46A21.76,21.76,0,0,0,128,12.93,21.76,21.76,0,0,0,93.38,23.46L56.92,143.76,20.68,180a16,16,0,0,0,0,22.62l32.69,32.69a16,16,0,0,0,22.63,0L124.28,187a40.68,40.68,0,0,0,3.72-4.29,40.68,40.68,0,0,0,3.72,4.29L180,235.32a16,16,0,0,0,22.63,0l32.69-32.69A16,16,0,0,0,235.32,180ZM120,158.75a23.85,23.85,0,0,1-7,17L88.68,200,56,167.32l13.65-13.66a8,8,0,0,0,2-3.34l37-122.22A5.78,5.78,0,0,1,120,29.78Zm47.44,41.38L143,175.72a23.85,23.85,0,0,1-7-17v-129a5.78,5.78,0,0,1,11.31-1.68l37,122.22a8,8,0,0,0,2,3.34l14.49,14.49Z"
                                    >
                                    </path>
                                </svg>
                            }
                            iconPosition="left"
                            children="Testimonials"
                        />

                        <p
                            className="flex items-center text-2xl md:text-5xl font-medium gap-4 mt-2 md:mt-4 md:w-2/3"
                        >
                            Hear from Those Who Have Made the Switch
                        </p>
                        <p
                            className=" md:w-2/3 md:text-xl mt-2 md:mt-4"
                        >
                            Discover the Niural difference - find out why Niural was the right move for them.
                        </p>
                        <div className="flex justify-between items-center w-full">
                            <Button
                                icon={<ChevronRight size={16} />}
                                iconPosition="right"
                                children="View Case Studies"
                                className="rounded-xl gap-2 mt-2 md:mt-4"
                                onClick={() => navigate("resources/case_studies")}
                            />

                            <div className="flex items-center justify-center gap-2 ">
                                <Button
                                    variant="secondary"
                                    icon={<ChevronLeft />}
                                    iconPosition="left"
                                    className="rounded-full cursor-pointer"
                                    onClick={() => setStartIndex(pre => (pre - 1 + testimonials.length) % testimonials.length)}
                                />
                                <Button
                                    variant="secondary"
                                    icon={<ChevronRight />}
                                    iconPosition="left"
                                    className="rounded-full cursor-pointer"
                                    onClick={() => setStartIndex(pre => (pre + 1) % testimonials.length)}
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-between mt-8 gap-8 overflow-hidden px-4 horizontal-mask transition-all duration-300 ease-in-out md:mb-20">
                    {window.innerWidth > 768 ? testimonial.map((item, index) =>
                        <div className={`flex flex-col  min-w-3/10 max-w-3/10  border md:min-h-80 border-gray-300 rounded-xl p-4 ${index === 1 ? "bg-white shadow-xl" : "bg-gray-100"}`}>
                            <p className="font-medium">"{testimonials[item].say}"</p>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col mt-4">
                                    <p>{testimonials[item].name}</p>
                                    <p>{testimonials[item].org}</p>
                                </div>
                            </div>
                        </div>
                    ) : <div className={`flex flex-col    border min-h-80 border-gray-300 rounded-xl p-4 $ bg-white shadow-xl`}>
                        <p className="font-medium">"{testimonials[startIndex].say}"</p>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col mt-4">
                                <p>{testimonials[startIndex].name}</p>
                                <p>{testimonials[startIndex].org}</p>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Landing