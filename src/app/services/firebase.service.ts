import { SaveData, SaveDataPayload } from '@model/save-data';
import * as firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyD2nqEBZ9toMVaGjgcTtM2orE3MpRAd6KE',
  authDomain: 'poc-time-spent-traning.firebaseapp.com',
  databaseURL: 'https://poc-time-spent-traning.firebaseio.com',
  projectId: 'poc-time-spent-traning',
  storageBucket: 'poc-time-spent-traning.appspot.com',
  messagingSenderId: '342075754709',
  appId: '1:342075754709:web:e3681215291e13ab667a5c',
  measurementId: 'G-KFMGR7P4NT',
};

export class FirebaseService implements SaveData {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  save({ chapterId, userId, time, type }: SaveDataPayload) {
    return firebase
      .database()
      .ref()
      .child(`${userId}/${chapterId}/${type}`)
      .push()
      .set(time);
  }
}
