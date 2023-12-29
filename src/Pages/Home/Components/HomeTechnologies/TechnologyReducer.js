import { initialState } from "./initailState";
import { CHANGE_SELECTED } from "./constants";

export const TechnologyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED:
      return { ...state, selected: action.payload.selected };
    default:
      return { ...state };
  }
};
