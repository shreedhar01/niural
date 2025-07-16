import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const card = cva("flex flex-col  shadow", {
    variants: {
        size: {
            small: "md:w-108 m-2 mt-6",
            big: "max-w-[800px] m-2 mt-6"
        },
        varient: {
            primary: "",
            secondary: " justify-start"
        }
    },
    defaultVariants: {
        varient: "primary",
        size: "small"
    }
})

type CardVariants = VariantProps<typeof card>;

export interface ICard extends
    React.HTMLAttributes<HTMLDivElement>,
    CardVariants {
    heading: string
    info: string
    image: string
}

const Card: React.FC<ICard> = ({ size, varient, image, className, heading, info, ...props }) => {
    return (
        <div
            className={card({ size, varient, className })}
            {...props}
        >
            <div className="p-4">
                <p className="my-4 text-xl font-medium">{heading}</p>
                <p className="font-mono">{info}</p>

            </div>
            <div className="overflow-hidden w-fit">
                <img className="hover:scale-110 w-fit" src={image} alt="" />
            </div>
        </div>
    )
}

export default Card