

import { ActionType } from "../action-types";
import { Action } from "../actions/index"


// our state is always going to be a number
const initialState = 0;




// reducer takes 2 parameters: state and  action: that holds type and payload
const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
