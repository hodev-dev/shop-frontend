import { combineReducers } from 'redux';
import authReducer, { IauthReducer } from './authReducer';
import counterReducer, { ICounterReducer } from './counterReducer';

export interface IApplicationState {
  counterReducer: ICounterReducer
  authReducer: IauthReducer
}

export default combineReducers<IApplicationState>({
  counterReducer,
  authReducer
});