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
        <div className="bg-white flex flex-col justify-center  card_shadow items-center bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <div className="w-full h-[300px] mb-4">
                <Image src={image} alt={'seo'} width={300} height={300} className="object-cover rounded-lg" />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white mb-2">{serviceName}</h3>
                <p className="text-para para-large">{description}</p>
            </div>
        </div>
    );
};

export default Card;
