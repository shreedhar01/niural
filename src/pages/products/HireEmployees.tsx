import React, { useEffect, useState } from "react";
import { HeroBanner, InfiniteMove } from "../../components/products";
import { product3 } from "../../assets/landing_images/products";
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

const HireEmployees: React.FC = () => {
    useEffect(() => {
        document.title = "Niural EOR | Niural"
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
                feature="EOR"
                feature_slogon="Hire Employees Internationally with Niural as EOR"
                feature_statement="Niural helps you hire employees compliantly across 150+ countries and reduce administrative burdens and management costs without the need to set up your own entities."
                img={product3}
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

export default HireEmployees