import { DateTime } from 'luxon';
import { isActionOf } from 'typesafe-actions';
import { mainActions, MainActionType } from './actions';
import { IDayPicture } from './types';

export interface IMainState {
  dayPictures: IDayPicture[];
  requestDate: DateTime;
}

export const initialState: IMainState = {
  dayPictures: [],
  requestDate: DateTime.local(),
};

export function mainReducer(state: IMainState, action: MainActionType): IMainState {
  if (isActionOf(mainActions.addPictures, action)) {
    return { ...state, dayPictures: state.dayPictures.concat(action.payload) };
  }
  if (isActionOf(mainActions.updateRequestDate, action)) {
    return { ...state, requestDate: action.payload };
  }
  return state;
}
