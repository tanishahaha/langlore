import React from 'react';
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
interface TeamMemberProps {
    name: string;
    title: string;
    description: string;
    linkedin: string;
    twitter: string;
    website: string;
    image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, description, linkedin, twitter, website, image }) => {
    return (
        <div className="flex text-gray-300  flex-col items-center p-4">
            <img src={image} alt={`Profile picture of ${name}`} className="mb-4 rounded-full" />
            <h3 className="text-lgsubsubheading text-white font-semibold">{name}</h3>
            <p className="text-mdsubheading font-medium ">{title}</p>
            <p className="text-center w-2/3 mt-3 text-mdsubheading">{description}</p>
            <div className="flex space-x-3 mt-4">
                <a href={linkedin} className="text-white hover:text-gray-100"><FaLinkedin size={24}/></a>
                <a href={twitter} className="text-white hover:text-gray-100"><FaTwitter size={24}/></a>
                <a href={website} className="text-white hover:text-gray-100"><FaGlobe size={24}/></a>
            </div>
        </div>
    );
};

export default TeamMember;
