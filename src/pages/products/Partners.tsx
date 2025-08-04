import React from "react";
import { HeroBanner } from "../../components/products";
import { partners_img } from "../../assets/products";

const Partners : React.FC = ()=>{
    return (
        <div>
            <HeroBanner
            feature="partners"
             feature_slogon="Niural Helps Partners Do More with Less"
             feature_statement="Our platform offers tailored solutions for partners - CPA and accounting firms, payroll bureaus, PEO and health brokers & fractional CFOs - enabling you to automate payroll, streamline workflows, and foster better collaboration with your clients."
             img={partners_img}
            />
        </div>
    )
}

export default Partners