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
        <div className="custom-inputColor rounded-3xl border-t border-t-white  h-fit bg-gradient-to-t from-gray-800 to-transparent overflow-hidden shadow-lg m-3 px-8 py-10 max-w-md max-md:py-8 max-md:px-6 tracking-wider">
            <img className="w-full rounded-xl" src={imageUrl} alt={altText} />
            <div className="pt-6">
                <div className="bg-gray-600 rounded-xl px-5 py-2 inline-block text-gray-300 text-mdsubsubheading">
                    {category}
                </div>
                <div className="font-semibold py-2 text-lgsubsubheading max-md:text-mdsubheading">{title}</div>
                <div className="text-gray-400 text-mdsubheading max-md:text-mdsubsubheading">{subtitle}</div>
                <div className="flex gap-3 items-center mt-5 ">
                    <FaUserCircle className="text-white" size={24}/>
                    <div className="text-mdsubheading space-y-1">
                        <p className="leading-none text-bluee">{author}</p>
                        <p className="text-white text-mdsubsubheading">{date} · {readTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
