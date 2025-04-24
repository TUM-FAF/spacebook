import { DateTime } from 'luxon';
import { createAction, ActionType } from 'typesafe-actions';
import { IDayPicture } from './types';

export enum MainActionsEnum {
  ADD_PICTURES = 'main/ADD_PICTURES',
  UPDATE_REQUEST_DATE = 'main/UPDATE_REQUEST_DATE',
  CHANGE_ERROR = 'main/CHANGE_ERROR',
}

export const addPictures = createAction(MainActionsEnum.ADD_PICTURES)<IDayPicture[]>();
export const updateRequestDate = createAction(MainActionsEnum.UPDATE_REQUEST_DATE)<DateTime>();
export const changeError = createAction(MainActionsEnum.CHANGE_ERROR)<Error | null>();

export const mainActions = {
  addPictures,
  updateRequestDate,
  changeError,
};

export type MainActionType = ActionType<typeof mainActions>;
