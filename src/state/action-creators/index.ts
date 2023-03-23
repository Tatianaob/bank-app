// our action creators are function that dispatch actions
// we are going to have 3 different actions creators, deposit, withdraw, bankrup

import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";



export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};


export const withdrawMoney = (amount:number) => {
    return (dispatch: Dispatch<Action>)=> {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        });
    };
};


export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT,
        });
    };
};