import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import {
    ChevronDown,
    Minus,
    EllipsisVertical,
    Menu,
    ChevronLeft,
    X
} from 'lucide-react';
import { Button } from "./index";

const Header: React.FC = () => {
    const [which, setWhich] = useState("")
    const [hover, setHover] = useState("")
    const [float, setFloat] = useState(false)
    const navigate = useNavigate()

    const headerLists = ["Products", "Solutions", "Resources", "Company"]
    const servicesLists = [
        {
            section: "Products",
            services: ["Payroll", "Peo", "Hire Employees", "Hire Contractors", "Contractor Management", "Pay", "wallet", "Hris", "Partners"]
        },
        {
            section: "Solutions",
            services: ["Payrolls", "HR", "Operations"]
        },
        {
            section: "Resources",
            services: ["AI Risk Analyzer", "Case Studies", "Glossary", "Knowledge Base", "Blogs", "Niural Documentation"]
        },
        {
            section: "Company",
            services: ["Careers", "Contact Us", "Legal", "Partner Program", "Press & Media"]
        }
    ]

    return (
        <header className="flex justify-center items-center w-full">
            <div className="flex justify-between items-center w-full  md:w-[1280px] gap-2  p-2 relative">
                <div className="flex items-center gap-8">
                    <Link to="/niural">
                        <img className=" h-[24px]" src={logo} alt="brand logo" />
                    </Link>
                    <EllipsisVertical className=" hidden md:block " />
                    <ul className="hidden md:flex  gap-2">
                        {
                            headerLists.map(item => (

                                <li
                                    key={item}
                                    className="flex gap-1 cursor-pointer hover:bg-gray-100 relative p-2 rounded"
                                    onMouseEnter={() => setHover(item)}
                                    onMouseLeave={() => setHover("")}
                                >
                                    {item} {item === hover ? <Minus /> : <ChevronDown />}
                                    {hover === item && (
                                        <div className="absolute top-10 left-1 rounded p-2 shadow-2xl min-w-80 z-50 bg-gray-50 border-gray-200"
                                        >
                                            <BelowCard
                                                items={servicesLists.find(sec => sec.section === item)?.services || []}
                                                link={`/niural/${item.toLowerCase()}`}
                                            />
                                        </div>
                                    )}
                                </li>
                            ))

                        }
                        <Link to="/niural/pricing">
                            <li className=" hover:text-green-500 cursor-pointer p-2">Pricing</li>
                        </Link>
                    </ul>
                </div>

                {/* smaller device menu left side */}
                <div className="md:hidden">
                    <Button
                        variant="secondary"
                        icon={<Menu />}
                        iconPosition="left"
                        onClick={() => setFloat(!float)}
                    />
                    {
                        float &&
                        <div className="flex flex-col bg-white py-6 top-2 left-2 right-2  absolute rounded-2xl shadow-2xl border-gray-200">
                            <div className="flex justify-between items-center">
                                {
                                    which ? <Button
                                        variant="secondary"
                                        children="Go Back"
                                        className="rounded-3xl"
                                        icon={<ChevronLeft />}
                                        iconPosition="left"
                                        size="mid"
                                        onClick={() => setWhich("")}
                                    /> : <p className="px-4">Niural</p>
                                }
                                <Button
                                    variant="secondary"
                                    icon={<X />}
                                    iconPosition="left"
                                    size="mid"
                                    onClick={() => setFloat(!float)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <p className=" mx-4 text-gray-400">{which ? which : "Menu"}</p>
                                {
                                    !which ? headerLists.map(item => (
                                        <Button
                                            icon={<ChevronDown />}
                                            variant="secondary"
                                            iconPosition="right"
                                            className="border-b"
                                            onClick={() => setWhich(item)}
                                            children={item}
                                        />
                                    )) : servicesLists.find(item => item.section === which)?.services.map(item => (
                                        <Button
                                            children={item}
                                            variant="secondary"
                                            size="mid"
                                            onClick={() => navigate(`/niural/${which.toLowerCase()}/${item.toLowerCase().replaceAll(" ", "_")}`)}
                                        />
                                    ))
                                }
                            </div>

                            <div className="flex flex-col pt-4">
                                <Button
                                    size="mid"
                                    variant="secondary"
                                    children="Sign In"
                                    className="rounded"
                                    onClick={() => (window.open("https://app.niural.com/auth", "_blank", "noopener,noreferrer"))}
                                />
                                <Button
                                    size="mid"
                                    children="Book a Demo"
                                    className="rounded text-center"
                                    onClick={() => (window.open("https://meetings.hubspot.com/niural/book-a-demo?uuid=0b70745e-c8ca-4d3d-a995-914c278918df", '_blank', 'noopener,noreferrer'))}
                                />
                            </div>
                        </div>
                    }
                </div>

                {/* bigger display demo and login button */}
                <div className="hidden md:flex items-center gap-2">
                    <Button
                        size="mid"
                        variant="secondary"
                        children="Sign In"
                        className="rounded"
                        onClick={() => (window.open("https://app.niural.com/auth", "_blank", "noopener,noreferrer"))}
                    />
                    <Button
                        size="mid"
                        children="Book a Demo"
                        className="rounded"
                        onClick={() => (window.open("https://meetings.hubspot.com/niural/book-a-demo?uuid=0b70745e-c8ca-4d3d-a995-914c278918df", '_blank', 'noopener,noreferrer'))}
                    />
                </div>

            </div>
        </header>
    )
}

export default Header

interface IBelowCard {
    items: string[],
    imag?: string,
    link: string
}

const BelowCard: React.FC<IBelowCard> = ({ items, imag, link }) => {
    return (
        <div>
            <div>
                {items.map((item, index) => (
                    <Link to={`${link}/${item.replaceAll(" ", "_").toLowerCase()}`}>
                        <p className="flex flex-col m-2 hover:text-green-500 cursor-pointer" key={index}>{item}</p>
                    </Link>
                )
                )}
            </div>
            {imag ? <img src={imag} alt="" /> : null}
        </div>
    )
}