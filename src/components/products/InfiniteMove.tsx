import React from "react";

interface IInfiniteMove extends React.HtmlHTMLAttributes<HTMLDivElement> {
    companies: string[];
    styleclass?: string;
}

const InfiniteMove: React.FC<IInfiniteMove> = ({ companies, styleclass,...props }) => {
    return (
        <div className="flex justify-center items-center w-full px-2 md:px-0">
            <div
                className="flex items-center md:w-[1280px] h-[200px] overflow-hidden horizontal-mask "
                {...props}
            >
                <div className={`flex animate-infinite-scroll ${styleclass} gap-x-24`}>
                    {[...companies, ...companies, ...companies].map((c, i) =>
                        <img key={i} className=" h-[30px] md:h-[40px] " src={c} alt="" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default InfiniteMove