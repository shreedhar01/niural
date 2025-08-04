import React from "react";
import { HeroBanner } from "../../components/products";
import { product5 } from "../../assets/landing_images/products";

const Pay : React.FC = ()=>{
    return (
        <div>
            <HeroBanner
            feature="pay"
             feature_slogon="Master Your Cash Flow"
             feature_statement="Niural Pay supports both accounts payable and accounts receivable, making it a powerful solution for businesses worldwide."
             img={product5}
            />
        </div>
    )
}

export default Pay