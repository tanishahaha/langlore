import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface CardProps {
    title: string;
    subtitle: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    imageUrl: string;
    altText: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, category, author, date, readTime, imageUrl, altText }) => {
    return (
        <div className="custom-inputColor rounded-3xl border-t border-white h-fit bg-gradient-to-t from-gray-800 to-transparent overflow-hidden shadow-lg m-3 px-8 py-10 max-w-md">
            <img className="w-full  rounded-xl" src={imageUrl} alt={altText} />
            <div className="pt-6">
                <div className="bg-gray-600 rounded-xl py-3 px-4 inline-block text-gray-300 text-base">
                    {category}
                </div>
                <div className="md:text-xl font-semibold py-2">{title}</div>
                <div className="text-gray-400 text-justify">{subtitle}</div>
                <div className="flex items-center mt-4 ">
                    <FaUserCircle className="text-gray-400 mr-2" />
                    <div className="text-sm space-y-1">
                        <p className="text-gray-200 leading-none">{author}</p>
                        <p className="text-gray-400">{date} · {readTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
