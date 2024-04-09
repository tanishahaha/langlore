import React from "react";
import {
  FaCheck,
  FaUsers,
  FaExpand,
  FaRocket,
  FaHandPaper,
  FaSpaceShuttle,
} from "react-icons/fa";
const Cardsanimation: React.FC = () =>{
  return(
    <div className="container w-1/2 max-md:w-full ">
        <ul id="cards">
          <li className="card" id="card1">
            <div className="card-body  py-8 items-center ">
              <div className="flex space-x-4">
                <div className="icon-bg py-3 rounded-full">
                  <FaCheck className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-[15px] md:text-lg font-bold my-1  tracking-widest capitalize">
                    Mission Kickoff
                  </h3>
                  <p className="text-gray-400 ">
                    LangLore was founded with the mission to preserve endangered
                    languages, their scripts, and associated cultures.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card" id="card2">
            <div className="card-body items-center  py-8 ">
                <div className="flex space-x-4">

              <div className="icon-bg py-3 rounded-full">
                <FaUsers className="text-3xl" />
              </div>
              <div>
                <h3 className="text-[15px] md:text-lg font-bold my-1 tracking-widest capitalize">
                  Empowering Communities
                </h3>
                <p className="text-gray-400">
                  We dug deep to research our target communities and identified
                  our starting point - the Tulu community.
                </p>
              </div>
                </div>
            </div>
          </li>

          <li className="card" id="card3">
            <div className="card-body  items-center py-8 ">
                <div className="flex space-x-4">

              <div className="icon-bg py-3 rounded-full">
                <FaExpand className="text-3xl" />
              </div>
              <div>
                <h3 className="text-[15px] md:text-lg font-bold my-1  tracking-widest capitalize">
                  Expanding Reach
                </h3>
                <p className="text-gray-400 ">
                  We gained recognition and interest from fellow enthusiasts of
                  our cause like Ashoka University, Ka-Naada, the ELA, EKStep
                  Foundation, universities like Mangalore University, and
                  Government lobbyists fighting for the representation of
                  endangered languages like Tulu in the Constitution.
                </p>
              </div>
                </div>
            </div>
          </li>

          <li className="card" id="card4">
            <div className="card-body items-center  py-8 ">
                <div className="flex space-x-4">

              <div className="icon-bg py-3 rounded-full">
                <FaRocket className="text-3xl" />
              </div>
              <div>
                <h3 className="text-[15px] md:text-lg font-bold my-1  tracking-widest capitalize">
                  The Alphas
                </h3>
                <p className="text-gray-400 ">
                  We are currently developing the Alpha release of our platform
                  (what you see now) & launching our first course to a limited
                  number of users.
                </p>
              </div>
                </div>
            </div>
          </li>

          <li className="card" id="card5">

            <div className="card-body  items-center py-8 ">
                <div className="flex space-x-4">

              <div className="icon-bg py-3 rounded-full">
                <FaHandPaper className="text-3xl" />
              </div>
              <div>
                <h3 className="text-[15px] md:text-lg font-bold my-1  tracking-widest capitalize">
                  The Soft Launch
                </h3>
                <p className="text-gray-400 ">
                  Up next, we will launch a fully-loaded Tulu course to the
                  general public before scaling.
                </p>
              </div>
                </div>
            </div>
          </li>

          <li className="card" id="card6">
            <div className="card-body  items-center py-8 ">
                <div className="flex space-x-4">

              <div className="icon-bg py-3 rounded-full">
                <FaSpaceShuttle className="text-3xl" />
              </div>
              <div>
                <h3 className="text-[15px] md:text-lg font-bold my-1  tracking-widest capitalize">
                  The Liftoff
                </h3>
                <p className="text-gray-400 ">
                  The best is yet to come! Sign up to stay tuned to our
                  progress, and support our cause!
                </p>
              </div>
                </div>
            </div>
          </li>
        </ul>
      </div>
  )
}
export default Cardsanimation;