import React, { useContext ,useState} from "react";
import { TechnologyContext } from "./TechnologyContext";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { initialState } from "./initailState";
const HomeTechnologies = () => {
  // const {
  //   state: { selected, tech },
  //   changeSelected,
  // } = useContext(TechnologyContext);
  const [changeSelected, setchangeSelected] = useState("")
  const [selected, setselected] = useState(0)
  return (
    <div className="Home_Technologies">
      {/* <img
        className="Home_Landing_Image"
        src={homeLandingImage}
        alt="PointzerooImage"
      /> */}

      <h1 className="font-semibold lg:text-7xl md:text-5xl text-3xl lg:-mt-2 -mt-1 text-white">Technologies we work with</h1>
      <div
        // onScroll={() => console.log("Scrolled")}
        className="Home_Technologies_Datas"
      >
        <div className="Home_Technologies_Datas_Left">
          {initialState.tech.map((techname, index) => (
            <LeftSide
              techname={techname[0]}
              key={index}
              select={selected === index ? true : false}
              index={index}
              changeSelected={setselected}
            />
          ))}
        </div>

        <div className="Home_Technologies_Datas_Right">
          <RightSide selected={selected} tech={initialState.tech} />
        </div>
      </div>
    </div>
  );
};

export default HomeTechnologies;
