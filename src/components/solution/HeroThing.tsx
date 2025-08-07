import React from "react";
import Button from "../Button";

interface IHero{
    title:string,
    hero:string,
    description:string
}

interface IHeroThing{
    hero_thing:IHero[]
}

const HeroThing: React.FC<IHeroThing> = ({hero_thing}) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col justify-center items-center md:w-[1280px] pt-16 pb-30 md:pb-60 px-2 md:px-0">
                {
                    hero_thing.map(i =>
                        <div className="flex flex-col gap-y-4 md:text-center md:w-50/100">
                            <p className="text-green-500">{i.title}</p>
                            <p className="text-4xl md:text-5xl font-medium ">{i.hero}</p>
                            <p className="md:text-xl text-gray-500">{i.description}</p>
                            <div>
                                <Button
                                    children="Get Started"
                                    className="rounded"
                                    onClick={() => window.open("https://app.niural.com/auth/employer/signup", "_", "noopener,noreferrer")}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HeroThing