import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";


interface IAccordion {
    qna: IAccordionItem[]
}

const Accordion: React.FC<IAccordion> = ({ qna }) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center gap-y-16 w-full md:w-[1280px] px-2 md:px-0 py-16 md:py-32">
                <p className=" text-xl md:text-4xl font-medium">FAQ Section</p>
                <div className="flex flex-col w-full md:w-50/100">
                    {
                        qna.map(v =>
                            <AccordionItem
                                heading={v.heading}
                                body={v.body}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

interface IAccordionItem extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    heading: string,
    body: string
}


const AccordionItem: React.FC<IAccordionItem> = ({ heading, body }) => {
    const [expand, setExpand] = useState(false)
    const divRef = useRef<HTMLDivElement>(null)
    const [maxheight, setMaxHeight] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setMaxHeight(expand ? divRef.current.scrollHeight : 0)
        }
    }, [divRef, body, expand])

    return (
        <div className="flex flex-col gap-y-4 border-t border-t-gray-300 border-b border-b-gray-300 py-4">
            <button
                className="flex items-center justify-between"
                onClick={() => setExpand(!expand)}
            >
                <p className="md:text-xl font-medium text-start">{heading}</p>
                <div>

                    {expand === true ? <ChevronUp /> : <ChevronDown />}
                </div>
            </button>
            <div
                ref={divRef}
                className="overflow-hidden transition-[max-height] duration-300 ease-out"
                style={{ maxHeight: `${maxheight}px` }}
            >
                <p className="text-gray-600">{body}</p>
            </div>
        </div>
    )
}


export default Accordion