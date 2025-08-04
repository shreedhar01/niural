import React, { useEffect } from "react";
import { Features, HeroBanner } from "../../components/products";
import { wallet_img } from "../../assets/products";
import { Book, Landmark, Play, User } from "lucide-react";

const Wallet: React.FC = () => {
    useEffect(() => {
        document.title = "Niural Wallet | Niural"
    }, [])

    const features = [
        {
            icon: <Play />,
            title: "Instant Payments",
            description: "Store money in your wallet for instant payments to employees, contractors, and vendors."
        },
        {
            icon: <User />,
            title: "Manage Payments from Customers",
            description: "Receive money directly to your wallet from customers."
        },
        {
            icon: <Landmark />,
            title: "Easy Bank Transfers",
            description: "Transfer money from your wallet to your bank account and vice versa."
        },
        {
            icon: <Book />,
            title: "Automatic Record Keeping",
            description: "Seamlessly integrates with your existing general ledger and accounting software, no manual entry is needed."
        },
    ]
    return (
        <div>
            <HeroBanner
                feature="wallet"
                feature_slogon="The Ultimate Flexibility & Speed for Global Payments"
                feature_statement="With Niural Wallet, you can pay your workers instantly in 100+ local currencies or stablecoin without the need for costly wires or waiting on ACH payments."
                img={wallet_img}
            />

            <Features
                features={features}
            />
        </div>
    )
}

export default Wallet