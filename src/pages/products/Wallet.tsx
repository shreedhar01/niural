import React, { useEffect } from "react";
import { Advantages, Features, HearFromClient, HeroBanner } from "../../components/products";
import { wallet_img } from "../../assets/products";
import { Book, BriefcaseBusiness, Globe, HandHelping, Hourglass, Landmark, LibraryBig, Play, Rocket, User } from "lucide-react";

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

    const key_advantages = [
        {
            icon:<Hourglass />,
            title:"Instant Payments",
            description:"Settle payments to employees, contractors, and vendors instantly"
        },
        {
            icon:< HandHelping/>,
            title:"Accounts Receivable",
            description:"Receive money from your customers directly to your wallet"
        },
        {
            icon:<LibraryBig />,
            title:"Audit-Ready Records",
            description:"Link your general ledger and accounting software for automatic record-keeping"
        },
    ]

    const hear_from_client = [
        {
            dialog: "Niural is not just a vendor to us but has become an extension of our team. We have multiple subsidiaries, complex payment needs, and lots of compliance requirements based on our growth. Niural was the only tech company that could handle all of it easily.",
            client: "David Kuhn, General Counsel, Karate.com"
        }
    ]

    const delivering_reasult = [
        {
            icon: <Globe />,
            topic: "100+ Local Currencies Supported:",
            explain: "Pay anyone in their desired currency."
        },
        {
            icon: <BriefcaseBusiness />,
            topic: "100% Reduction in Payment Settlement Time:",
            explain: "Same currency payments occur instantly."
        },
        {
            icon: <Rocket />,
            topic: "Boosted Workforce Satisfaction by 30%:",
            explain: "Instant international payments without issue makes for a better relationship with workers."
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

            <Advantages
                key_advantages={key_advantages}
            />

            <HearFromClient
                hear_from_client={hear_from_client}
                delivering_reasult={delivering_reasult}
            />
        </div>
    )
}

export default Wallet