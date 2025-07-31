import React from "react";
import { Link } from "react-router-dom";

import {
    logo,
    soc_type,
    footer_text
} from "../assets";

import {
    Linkedin,
    Twitter
} from "lucide-react"


const Footer: React.FC = () => {
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
        <footer >
            <div className="flex flex-col justify-center items-center w-ful border border-gray-200 pt-20 ">
                <div className=" flex flex-col md:grid grid-cols-6 md:w-[1280px] gap-2  p-2">
                    <div className="flex flex-col items-start  col-span-2 gap-y-2 mb-8">
                        <Link to="/niural">
                            <img className="h-[24px]" src={logo} alt="logo" />
                        </Link>
                        <p>The First PEO Built with Intelligence and Robust Compliance</p>
                        <div className="flex gap-2 md:mb-8 mb-4">
                            <Linkedin
                                className="size-4 hover:text-blue-600"
                                onClick={() => window.open("https://www.linkedin.com/company/niural/posts/?feedView=all", "_", "")}
                            />
                            <Twitter
                                className="size-4 hover:text-blue-600"
                                onClick={() => window.open("https://x.com/niuralhq", "_", "")}
                            />
                        </div>
                        <img src={soc_type} alt="soc_type" />
                    </div>
                    <div className=" grid grid-cols-2 md:col-span-4 md:grid-cols-subgrid gap-y-4">
                        <div>
                            <p className="font-medium mb-4">Products</p>
                            <ul className=" flex flex-col gap-y-2">
                                {servicesLists
                                    .find(i => i.section === "Products")
                                    ?.services
                                    .map(i =>
                                        <Link to={`/niural/products/${i.toLowerCase()}`}>
                                            <li className="hover:text-green-500 cursor-pointer">
                                                {i}
                                            </li>
                                        </Link>
                                    )}
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium mb-4">Solutions</p>
                            <ul className=" flex flex-col gap-y-2">
                                {servicesLists
                                    .find(i => i.section === "Solutions")
                                    ?.services
                                    .map(i =>
                                        <Link to={`/niural/solutions/${i.toLowerCase()}`}>
                                            <li className="hover:text-green-500 cursor-pointer">
                                                {i}
                                            </li>
                                        </Link>
                                    )}
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium mb-4">Company</p>
                            <ul className=" flex flex-col gap-y-2">
                                {servicesLists
                                    .find(i => i.section === "Company")
                                    ?.services
                                    .map(i =>
                                        <Link to={`/niural/company/${i.toLowerCase()}`}>
                                            <li className="hover:text-green-500 cursor-pointer">
                                                {i}
                                            </li>
                                        </Link>
                                    )}
                            </ul>
                        </div>
                        <div>
                            <p className="font-medium mb-4">Resources</p>
                            <ul className=" flex flex-col gap-y-2">
                                {servicesLists
                                    .find(i => i.section === "Resources")
                                    ?.services
                                    .map(i =>
                                        <Link to={`/niural/resources/${i.toLowerCase()}`}>
                                            <li className="hover:text-green-500 cursor-pointer">
                                                {i}
                                            </li>
                                        </Link>
                                    )}
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:items-center w-full p-4 md:p-0 md:my-20">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center md:w-[1280px] gap-y-2 md:gap-x-4">
                        <p className="text-gray-400">© 2025 Niural Inc.</p>
                        <p className="hover:text-green-400 cursor-pointer">Terms of Service</p>
                        <p className="hover:text-green-400 cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-green-400 cursor-pointer">Cookie Policy</p>
                    </div>

                </div>

                <div className="flex items-center justify-center w-full p-4 md:p-0 my-20">
                    <div className="flex flex-col items-center justify-center text-xs gap-y-4 md:w-[1280px] text-gray-500">
                        <p className="text-center">Niural Inc., 16192 Coastal Highway, Lewes DE 19958, United States</p>
                        <p className="text-center">Niural is a financial technology company and is not a bank. Banking services provided by i3 bank; Member FDIC and JP Morgan Bank; Member FDIC.</p>
                        <p className="text-center">Payment services in some countries for Niural Inc. are provided by The Currency Cloud Inc. which operates in partnership with Community Federal Savings Bank (CFSB) to facilitate payments in all 50 states in the US. CFSB is registered with the Federal Deposit Insurance Corporation (FDIC Certificate# 57129). The Currency Cloud Inc is registered with FinCEN and authorized in 39 states to transmit money (MSB Registration Number: 31000160311064). Registered Office: Niural Inc., 16192 Coastal Highway, Lewes DE 19958, United States</p>
                        <p>*Exclusions apply based on supported payments methods in certain jurisdictions.</p>
                    </div>
                </div>

                <div className="p-2 md:w-[1280px] ">
                    <img src={footer_text} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer