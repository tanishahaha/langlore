import React from "react";
import TeamMember from "./AboutCards";

const Team: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full">
      <div className="text-center py-12 ">
        <p className="md:text-lgsubsubheading mb-3 text-gray-200 text-mdsubsubheading">
          Preservation
        </p>
        <h1 className="md:text-lgheading text-mdheading font-bold text-white mb-4">
          Meet Our Team
        </h1>
        <p className="md:text-lgsubsubheading text-mdsubsubheading text-gray-400 ">
          Passionate individuals dedicated to our mission.
        </p>
      </div>
      <div className="flex flex-wrap justify-center  w-full items-center text-center max-md:flex-col">
        <div className="lg:w-1/3 md:w-full  mb-8 ">
          <TeamMember
            name="John Doe"
            title="Language Expert"
            description="John is a polyglot with a deep understanding of various languages."
            linkedin="#"
            twitter="#"
            website="#"
            image="../../../public/imgs/Team.png"
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Jane Smith"
            title="Linguistics Specialist"
            description="Jane has a strong academic background in linguistics and language preservation."
            linkedin="#"
            twitter="#"
            website="#"
            image="../../public/imgs/Team.png"
          />
        </div>
        <div className="lg:w-1/3 md:w-full mb-8">
          <TeamMember
            name="David Johnson"
            title="Cultural Anthropologist"
            description="David has spent years studying and documenting endangered cultures and their languages."
            linkedin="#"
            twitter="#"
            website="#"
            image="../../public/imgs/Team.png"
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Michael Brown"
            title="Technology Specialist"
            description="Michael combines his technical expertise with a love for language preservation."
            linkedin="#"
            twitter="#"
            website="#"
            image="../../public/imgs/Team.png"
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="We're hiring!"
            title="Open positions "
            description="Join our team and make a difference in language preservation."
            linkedin="#"
            twitter="#"
            website="#"
            image="../../public/imgs/Team.png"
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Full name"
            title="Job title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            linkedin="#"
            twitter="#"
            website="#"
            image="../../public/imgs/Team.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
