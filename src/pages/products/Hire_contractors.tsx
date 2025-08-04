import React from "react";
import { HeroBanner } from "../../components/products";
import {hire_contractor_img} from "../../assets/products"

const Hire_contractor : React.FC = ()=>{
    return (
        <div>
            <HeroBanner
            feature="AOR"
             feature_slogon="Hire & Manage Global Contractors with Niural AOR"
             feature_statement="Niural helps you compliantly hire and pay contractors across the globe in a single platform, allowing you to expand your workforce worldwide."
             img={hire_contractor_img}
            />
        </div>
    )
}

export default Hire_contractor