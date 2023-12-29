import React, { useEffect } from "react";
import { TOTAL_FILES } from "../constants";
import ImageReturn from "../ImageReturn";

const RightSide = ({ selected, tech }) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      {Array(TOTAL_FILES-1)
        .fill(0)
        .map((l, index) => (
          <div key={index} className="Home_Technologies_Datas_Right_Box">
            <img
              // style={{ width: 50, height: 50 }}
              src={ImageReturn(tech[selected][0], tech[selected][1][index])}
              className="Home_Technologies_Datas_Right_Box_Image"
              alt="logo"
            />
          </div>
        ))}
    </div>
  );
};

export default RightSide;
