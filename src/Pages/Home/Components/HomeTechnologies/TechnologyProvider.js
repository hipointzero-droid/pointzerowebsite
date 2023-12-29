import React, { useReducer } from "react";
import { TechnologyContext } from "./TechnologyContext";
import { initialState } from "./initailState";
import { TechnologyReducer } from "./TechnologyReducer";
import { CHANGE_SELECTED } from "./constants";

const TechnologyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TechnologyReducer, initialState);

  const changeSelected = (index) => {
    dispatch({ type: CHANGE_SELECTED, payload: { selected: index } });
  };

  return (
    <TechnologyContext.Provider value={{ state, changeSelected }}>
      {children}
    </TechnologyContext.Provider>
  );
};

export default TechnologyProvider;
