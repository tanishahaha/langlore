import React from "react";
import { FaCheck, FaUsers, FaExpand, FaRocket, FaHandPaper, FaSpaceShuttle } from "react-icons/fa";

const cardsData = [
  {
    icon: <FaCheck className="text-3xl" />,
    title: "Mission Kickoff",
    description: "LangLore was founded with the mission to preserve endangered languages, their scripts, and associated cultures."
  },
  {
    icon: <FaUsers className="text-3xl" />,
    title: "Empowering Communities",
    description: "We dug deep to research our target communities and identified our starting point - the Tulu community."
  },
  {
    icon: <FaExpand className="text-3xl" />,
    title: "Expanding Reach",
    description: "We gained recognition and interest from fellow enthusiasts of our cause like Ashoka University, Ka-Naada, the ELA, EKStep Foundation, universities like Mangalore University, and Government lobbyists fighting for the representation of endangered languages like Tulu in the Constitution."
  },
  {
    icon: <FaRocket className="text-3xl" />,
    title: "The Alphas",
    description: "We are currently developing the Alpha release of our platform (what you see now) & launching our first course to a limited number of users."
  },
  {
    icon: <FaHandPaper className="text-3xl" />,
    title: "The Soft Launch",
    description: "Up next, we will launch a fully-loaded Tulu course to the general public before scaling."
  },
  {
    icon: <FaSpaceShuttle className="text-3xl" />,
    title: "The Liftoff",
    description: "The best is yet to come! Sign up to stay tuned to our progress, and support our cause!"
  }
];

const Cardsanimation: React.FC = () => {
  return (
    <div className="container w-1/2 max-md:w-full">
      <ul id="cards">
        {cardsData.map((card, index) => (
          <li className="cardC" id={`card${index + 1}`} key={index}>
            <div className="card-body items-center py-8">
              <div className="flex space-x-4 justify-start text-left">
                <div className="icon-bg py-3 rounded-full">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-[15px] md:text-lg font-bold my-1 tracking-widest capitalize">
                    {card.title}
                  </h3>
                  <p className="text-gray-400">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cardsanimation;
