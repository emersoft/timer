import { ActionData } from '@model/app';

export interface SaveDataPayload extends ActionData {
  time: number;
}

export interface SaveData {
  save<T>(payload: SaveDataPayload): Promise<T>;
}
