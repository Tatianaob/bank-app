

// our action is an object that contains the type: string and the payload: that will be a number
// type Action = {
//     type: string,
//     payload?: number
// 




import { ActionType } from "../action-types";

interface DepositAction {
    type: ActionType.DEPOSIT
    payload: number;
  }
interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number;
}

interface BankrupAction {
    type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithdrawAction | BankrupAction;