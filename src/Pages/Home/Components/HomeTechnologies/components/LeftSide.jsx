import React from "react";

const LeftSide = ({ techname, isSelected, index, onSelect }) => {
  // Format display name
  const displayName = techname === "DIGIAL_MARKETING" ? "Digital Marketing" : techname;

  return (
    <button
      onClick={() => onSelect(index)}
      className={`
        px-5 py-3 rounded-xl font-medium text-sm sm:text-base
        transition-all duration-300 text-left
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]
        ${isSelected
          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-white/5 hover:border-white/20'
        }
      `}
    >
      {displayName}
    </button>
  );
};

export default LeftSide;
