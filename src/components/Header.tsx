import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { ChevronDown, Minus, EllipsisVertical } from 'lucide-react';
import { Button } from "./index";

const Header: React.FC = () => {
    const [hover, setHover] = useState("")
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
        <header className="flex justify-between items-center  md:w-[1280px] gap-2  p-2">
            <div className="flex items-center gap-8">
                <Link to="/">
                    <img className=" h-[24px]" src={logo} alt="brand logo" />
                </Link>
                <EllipsisVertical className=" text- " />
                <ul className="flex gap-2">
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
                                            link={`/${item.toLowerCase()}`}
                                        />
                                    </div>
                                )}
                            </li>
                        ))

                    }
                    <Link to="/pricing">
                        <li className=" hover:text-green-500 cursor-pointer p-2">Pricing</li>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    size="mid"
                    variant="secondary"
                    children="Sign In"
                    onClick={()=>(window.open("https://app.niural.com/auth","_blank","noopener,noreferrer"))}
                />
                <Button
                    size="mid"
                    children="Book a Demo"
                    onClick={() => (window.open("https://meetings.hubspot.com/niural/book-a-demo?uuid=0b70745e-c8ca-4d3d-a995-914c278918df", '_blank', 'noopener,noreferrer'))}
                />
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