import React, { useEffect, useState } from "react";
import { HeroBanner, InfiniteMove } from "../../components/products";
import { product1 } from "../../assets/landing_images/products";
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

const Payroll: React.FC = () => {
    useEffect(() => {
        document.title = "Payroll | Niural"
    }, [])

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
                feature="Payroll"
                feature_slogon="Payroll Reimagined"
                feature_statement="Niural Payroll simplifies payroll for all kinds of businesses. We ensure compliance, automate tax calculations, and support flexible payment methods to ensure a smooth experience for you and your team with our proprietary tax engine."
                img={product1}
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

export default Payroll