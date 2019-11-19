import { combineReducers } from 'redux';
import { catsFactsRedcuer } from './catsFactsReducer';

export const rootReducer = combineReducers({
  catsFactData: catsFactsRedcuer,
})