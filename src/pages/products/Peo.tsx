import React, { useEffect, useState } from "react";
import { HeroBanner, InfiniteMove } from "../../components/products";
import { product2 } from "../../assets/landing_images/products";
import {
    aetna,
    chase,
    cigna,
    fed_now,
    guideline,
    healthequity,
    kaiser_permanent,
    manulife,
    metlife,
    nationwide,
    rh_by_sw,
    the_hartford,
    the_canada_life,
    united_healthcare,
    visa,
    wells_fargo
} from "../../assets/products/payroll"

const Peo: React.FC = () => {
    useEffect(()=>{
        document.title = "Niural PEO | Niural"
    },[])

    const [animate, setAnimate] = useState(1);

    const companies = [
        aetna,
        chase,
        cigna,
        fed_now,
        guideline,
        healthequity,
        kaiser_permanent,
        manulife,
        metlife,
        nationwide,
        rh_by_sw,
        the_hartford,
        the_canada_life,
        united_healthcare,
        visa,
        wells_fargo
    ]
    return (
        <div>
            <HeroBanner
                feature="PEO"
                feature_slogon="Get Enterprise-Level Benefits, Regardless of Size"
                feature_statement="Niural PEO gives businesses of all sizes access to enterprise-level benefits, simplifying HR, compliance, and employee management. From healthcare to retirement, Niural ensures your global workforce is cared for."
                img={product2}
            />
            <InfiniteMove
                companies={companies}
                onMouseEnter={() => setAnimate(0)}
                onMouseLeave={() => setAnimate(1)}
                styleclass={animate ? "" : "animate_paused"}
            />
        </div>
    )
}

export default Peo