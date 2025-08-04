import React from "react";
import { HeroBanner } from "../../components/products";
import { product4 } from "../../assets/landing_images/products";

const Contractor_management : React.FC = ()=>{
    return (
        <div>
            <HeroBanner
            feature="Contractor Management"
             feature_slogon="Hire Any Type of Contractor Worldwide"
             feature_statement="Niural helps you compliantly hire a variety of contractor types, allowing you to expand with the flexibility to meet diverse workforce needs."
             img={product4}
            />
        </div>
    )
}

export default Contractor_management