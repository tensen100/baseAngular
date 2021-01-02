/*
 Author: MECHREVO
 Create Time: 2021-01-01 21:38
 Description:
*/

import { UserStorage } from '../../storage';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.action';

export interface UserState {
  name: string;
  id: number;
}
export const initialState: UserState = UserStorage.get();

const setUser = (state: UserState, data): UserState => ({...state, ...data});

const userReducer = createReducer(
  initialState,
  on(UserActions.setUser, setUser)
);

export const reducer = (state: UserState |  undefined, action: Action) => userReducer(state, action);
