import { DateTime } from 'luxon';
import { ActionType, createStandardAction, PayloadAC } from 'typesafe-actions';
import { IDayPicture } from './types';

export enum MainActionsEnum {
  ADD_PICTURES = 'main/ADD_PICTURES',
  UPDATE_REQUEST_DATE = 'main/UPDATE_REQUEST_DATE',
}

export interface IMainActions {
  addPictures: PayloadAC<typeof MainActionsEnum.ADD_PICTURES, IDayPicture[]>;
  updateRequestDate: PayloadAC<typeof MainActionsEnum.UPDATE_REQUEST_DATE, DateTime>;
}

export type MainActionType = ActionType<IMainActions>;

export const mainActions: IMainActions = {
  addPictures: createStandardAction(MainActionsEnum.ADD_PICTURES)<IDayPicture[]>(),
  updateRequestDate: createStandardAction(MainActionsEnum.UPDATE_REQUEST_DATE)<DateTime>(),
};
