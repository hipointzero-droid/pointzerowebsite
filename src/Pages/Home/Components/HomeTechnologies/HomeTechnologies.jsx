import React, { useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { initialState } from "./initailState";

const HomeTechnologies = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
            Technologies We{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We leverage cutting-edge technologies to build powerful solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Categories - Left Side */}
          <div className="lg:w-1/4">
            <div className="flex flex-wrap lg:flex-col gap-3">
              {initialState.tech.map((techItem, index) => (
                <LeftSide
                  key={index}
                  techname={techItem[0]}
                  isSelected={selected === index}
                  index={index}
                  onSelect={setSelected}
                />
              ))}
            </div>
          </div>

          {/* Tech Logos - Right Side */}
          <div className="lg:w-3/4">
            <div className="p-6 lg:p-8 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-3xl">
              <RightSide selected={selected} tech={initialState.tech} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTechnologies;
