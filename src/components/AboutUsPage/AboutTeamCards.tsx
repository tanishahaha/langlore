import React from "react";
import TeamMember from "./AboutCards";
import eisha from '../../../public/imgs/Eisha_Shetty.jpg'
import vaibhav from '../../../public/imgs/Vaibhav_Sharma.jpg'
import Rayaan from '../../../public/imgs/Mohammed_Rayaan.jpg'
import Deekshika from '../../../public/imgs/Deekshika_Ganesh.jpg'
import Zahanat from '../../../public/imgs/Zahanat_Khan.jpeg'
import Madhuja from '../../../public/imgs/Madhuja_Joshi.jpg'
import Vedant from '../../../public/imgs/Vedant_Jha.jpeg'
import Shivangi from '../../../public/imgs/Shivangi_Chaurasiya.jpg'
import Tanisha from '../../../public/imgs/Tanisha_Amin.jpg'
import Ruchit from '../../../public/imgs/Ruchit_Mehta.png'
import Vinay from '../../../public/imgs/Vinaykumar_Choursiya.jpeg'
import Sangeet from '../../../public/imgs/Sangeet_Muralidhar.jpeg'


const Team: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap w-full" data-aos="fade-up">
      <div className="text-center py-12 ">
       
        <h1 className="md:text-lgheading text-mdheading font-bold text-white mb-4">
          Meet Our Team
        </h1>
        <p className="md:text-lgsubsubheading text-mdsubsubheading text-gray-400 ">
          Passionate individuals dedicated to our mission.
        </p>
      </div>
      <div className="flex flex-wrap justify-center  w-full  items-center text-center max-md:flex-col ">
        <div className="lg:w-1/3 md:w-full  mb-8 ">
          <TeamMember
            name="Eisha Sathish Shetty"
            title="Founder | Product and Courses"
            description="Eisha is the Founder of LangLore and is working to solve a home-hitting problem that is omnipresent, not widely addressed, and is well within the grasp of solving."
            linkedin="https://www.linkedin.com/in/eisha-sathish-shetty/"
            twitter="https://twitter.com/ShettyEisha"
           
            image={eisha}
            
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Vaibhav Sharma"
            title="Founder | Platform Development"
            description="Vaibhav is the Founder of LangLore along with Eisha and is working to build LangLore to become a meaningful platform that helps society preserve its cultural richness."
            linkedin="https://www.linkedin.com/in/t3chnician/"
            twitter="https://twitter.com/T3chnician_"
            
            image={vaibhav}
          />
        </div>
        <div className="lg:w-1/3 md:w-full mb-8">
          <TeamMember
            name="Mohammed Rayaan"
            title="Content Curation | Hyperlocal Journalism"
            description="Rayaan is passionate about using solution-based hyperlocal journalism & education to empower communities, providing valuable information to inspire actionable life choices."
            linkedin="https://www.linkedin.com/in/mohammed-rayaan-232887135/"
            twitter=""
            
            image={Rayaan}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Deekshika Ganesh"
            title="Social Media | Research and Business Development"
            description="Deekshika loves being around people and their stories. The vision behind this project and the opportunity of exploring new cultures are what motivate her the most."
            linkedin="https://www.linkedin.com/in/deekshikaganesh/"
            twitter=""
            
            image={Deekshika}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Zahanat Khan"
            title="Content Curation | Research and Operations"
            description="Zahanat sees value in the power of literature and the vision of LangLore and its enrich the cultural landscape application to her own culture."
            linkedin="https://www.linkedin.com/in/zahanat-21a77623a/"
            twitter=""
            
            image={Zahanat}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Madhuja Joshi"
            title="Social Media | Research and Business Development"
            description="Madhuja has first-hand experience in local languages being barriers to efficient communication and is keen on getting work done on the ground to solve this problem."
            linkedin="https://www.linkedin.com/in/madhuja-joshi-542856184/"
            twitter="https://twitter.com/itsmadhujaaa"
            
            image={Madhuja}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Sangeet Muralidhar"
            title="Head of Engineering"
            description="Sangeet brings in his technological prowess to ensure the engineering team is free of bugs or blockers, and sites like LangLore get built securely."
            linkedin="https://www.linkedin.com/in/sangeet-muralidhar/"
            twitter="https://twitter.com/0xgitgat"
            
            image={Sangeet}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Madhuja Joshi"
            title="Social Media | Research and Business Development"
            description="Madhuja has first-hand experience in local languages being barriers to efficient communication and is keen on getting work done on the ground to solve this problem."
            linkedin="https://www.linkedin.com/in/madhuja-joshi-542856184/"
            twitter="https://twitter.com/itsmadhujaaa"
            
            image={Vedant}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Madhuja Joshi"
            title="Social Media | Research and Business Development"
            description="Madhuja has first-hand experience in local languages being barriers to efficient communication and is keen on getting work done on the ground to solve this problem."
            linkedin="https://www.linkedin.com/in/madhuja-joshi-542856184/"
            twitter="https://twitter.com/itsmadhujaaa"
            
            image={Ruchit}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Madhuja Joshi"
            title="Social Media | Research and Business Development"
            description="Madhuja has first-hand experience in local languages being barriers to efficient communication and is keen on getting work done on the ground to solve this problem."
            linkedin="https://www.linkedin.com/in/madhuja-joshi-542856184/"
            twitter="https://twitter.com/itsmadhujaaa"
            
            image={Shivangi}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Madhuja Joshi"
            title="Social Media | Research and Business Development"
            description="Madhuja has first-hand experience in local languages being barriers to efficient communication and is keen on getting work done on the ground to solve this problem."
            linkedin="https://www.linkedin.com/in/madhuja-joshi-542856184/"
            twitter="https://twitter.com/itsmadhujaaa"
            
            image={Vinay}
          />
        </div>
        <div className="lg:w-1/3 md:w-full  mb-8">
          <TeamMember
            name="Madhuja Joshi"
            title="Social Media | Research and Business Development"
            description="Madhuja has first-hand experience in local languages being barriers to efficient communication and is keen on getting work done on the ground to solve this problem."
            linkedin="https://www.linkedin.com/in/madhuja-joshi-542856184/"
            twitter="https://twitter.com/itsmadhujaaa"
            
            image={Tanisha}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Team;
