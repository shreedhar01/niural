import React from "react";
// import { Link } from "react-router-dom";
// import Pricing from "../pages/Pricing";
import { logo } from "../assets";
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center  md:w-[1280px] gap-2">
            <div>
                <img src={logo} alt="brand logo" />
                <ul>
                    <li className="flex gap-1 cursor-pointer">Products {<ChevronDown />}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header