import React, { type ButtonHTMLAttributes } from "react"


interface ILoading extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    loading?:number
}

const Loading: React.FC<ILoading> = ({ children,loading=0, ...props }) => {
    return (
        <button
            className="loading_effect text-sm md:text-base"
            style={{ '--loading-width': `${loading}%` } as React.CSSProperties}
            {...props}
        >
            {children}
        </button>

    )
}

export default Loading
