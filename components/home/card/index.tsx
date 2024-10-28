import React from "react";
import Image, { StaticImageData } from "next/image";
import Seo from "../../../app/assets/seo.png";


interface CardProps {
    image: StaticImageData; 
    serviceName: string;
    description : string
    
}

const Card = ({image, serviceName, description}:CardProps) => {
    return (
        <div className="w-full sm:w-[31%] h-[380px] bg-white flex flex-col items-center  card_shadow bg-opacity-10 backdrop-blur-lg p-5  rounded-lg shadow-md transform transition duration-300 hover:scale-105 cursor-pointer">
            <div className="flex justify-center">
                <Image src={image} alt={'seo'} width={250} height={250} quality={100} className="object-cover rounded-lg" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold text-white mb-2">{serviceName}</h3>
                <p className="text-para text-[18px] text-center">{description}</p>
            </div>
        </div>
    );
};

export default Card;
