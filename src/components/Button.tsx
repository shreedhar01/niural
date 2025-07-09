import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
    "inline-flex items-center justify-between", {
    variants: {
        size: {
            big: "h-12 px-5 text-base",
            mid: " h-10 px-4 text-sm",
        },
        variant: {
            primary: "bg-green-500 text-white shadow",
            secondary: "bg-white text-black hover:bg-gray-200 shadow"
        },
        hasIcon: {
            true: "gap-2",
            false: null
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "big"
    }
})

export interface ButtonProps extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}


const Button: React.FC<ButtonProps> = ({
    size,
    variant,
    icon,
    iconPosition,
    className,
    children,
    ...props
}) => {
    return (
        <button
            className={button({ size, variant, hasIcon: !icon, className })}
            {...props}
        >
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
        </button>
    )
}

export default Button