import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const banner = cva("flex items-center px-4")

interface ITitleBanner extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof banner> {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const TitleBanner: React.FC<ITitleBanner> = ({
    children,
    icon,
    iconPosition,
    className,
    ...props
}) => {
    return <div
        className={banner({ className })}
        {...props}
    >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
    </div>
}

export default TitleBanner