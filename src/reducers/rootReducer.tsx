import { combineReducers } from 'redux';
import { counterReducer, I_CounterReducer } from './counterReducer';

export interface IApplicationState {
  counterReducer: I_CounterReducer
}
export default combineReducers<IApplicationState>({
  counterReducer
});