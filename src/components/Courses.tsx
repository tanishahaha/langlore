import React from "react";
import {
  FaPlay,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import tulu from "../../public/imgs/tulu.png";

function Courses() {
  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center max-w-screen-lg bg-bgcard bg-opacity-35 p-8  shadow-lg   text-white border-t border-white max-lg:bg-transparent max-lg:border-none rounded-[2rem]">
        <div className="rounded-lg w-[90%] h-[55vh]">
          <h1 className="text-3xl font-semibold mb-2">
            Learn Tulu: A Beginner's Course
          </h1>
          <img
            src={tulu}
            alt="Colorful abstract symbols representing language"
            className="w-full h-full bg-cover"
          />

          <div className="mb-10">
            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "78%" }}
              ></div>
            </div>
            <p className="text-blue-400 mt-2">Course Completion Status: 78%</p>
          </div>
        </div>

        <div className="w-[90%] h-full mt-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Module 1: Numbers</h2>
              <span className="text-sm text-gray-400">8 Lessons • 30 mins</span>
            </div>
            <div className="space-y-2">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    {i === 4 ? (
                      <FaClipboardList className="mr-3" />
                    ) : (
                      <FaPlay className="mr-3" />
                    )}
                    <span>
                      {i === 4 ? "Take The Tests" : `${i + 1}. Numbers`}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-400 mr-3">5 Pages</span>
                    <button className="text-blue-400">
                      {i === 4 ? "Give Test" : "View"}
                    </button>
                    <FaChevronDown
                      className={`ml-3 ${i === 4 ? "hidden" : ""}`}
                    />
                    <FaChevronUp
                      className={`ml-3 ${i === 4 ? "" : "hidden"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">
                  Lesson {i + 2}: {["Curriculum", "Components", "Coding"][i]}
                </h2>
                <span className="text-sm text-gray-400">
                  1/2 Videos • 1h 28m
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaPlay className="mr-3" />
                  <span>1. Introduction</span>
                </div>
                <FaChevronDown className="ml-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
