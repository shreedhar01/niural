import React from "react";
import { HeroBanner } from "../../components/products";
import { wallet_img } from "../../assets/products";

const Wallet : React.FC = ()=>{
    return (
        <div>
            <HeroBanner
            feature="wallet"
             feature_slogon="The Ultimate Flexibility & Speed for Global Payments"
             feature_statement="With Niural Wallet, you can pay your workers instantly in 100+ local currencies or stablecoin without the need for costly wires or waiting on ACH payments."
             img={wallet_img}
            />
        </div>
    )
}

export default Wallet