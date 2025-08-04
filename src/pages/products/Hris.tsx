import React from "react";
import { HeroBanner } from "../../components/products";
import { hris_img } from "../../assets/products";

const Hris : React.FC = ()=>{
    return (
        <div>
            <HeroBanner
            feature="hris"
             feature_slogon="Unified Tools for Team Management"
             feature_statement="From timesheets to expenses, Niural HRIS is your central hub for managing employee data and workflows."
             img={hris_img}
            />
        </div>
    )
}

export default Hris