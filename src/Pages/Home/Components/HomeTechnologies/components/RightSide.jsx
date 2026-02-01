import React from "react";
import ImageReturn from "../ImageReturn";

const RightSide = ({ selected, tech }) => {
  const currentTech = tech[selected];
  const techName = currentTech[0];
  const techLogos = currentTech[1];

  // Format tech names for display
  const formatName = (name) => {
    return name
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
      {techLogos.map((logoName, index) => (
        <div
          key={index}
          className="group p-4 sm:p-6 bg-gray-800/50 border border-white/5 rounded-2xl
                     flex flex-col items-center justify-center gap-3
                     transition-all duration-300 hover:border-cyan-500/30
                     hover:bg-gray-800/80 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/15
                     hover:scale-[1.02]"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black flex items-center justify-center
                          transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <img
              src={ImageReturn(techName, logoName)}
              alt={logoName}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <p className="text-gray-400 text-xs sm:text-sm font-medium text-center
                        group-hover:text-white transition-colors duration-300">
            {formatName(logoName)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RightSide;
