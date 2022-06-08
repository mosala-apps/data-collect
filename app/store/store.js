import { configureStore  } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import NotificationSlice from './notification/notificationSlice';
import NotificationNotReadSlice from './notification/notificationNotReadSlice';
import SetNotificationNotReadSlice from './notification/setNotificationNotRead';
import HospitalSlice from './hospital/hospitalSlice';
import AuthSlice from './auth/authSlice';
import FormSlice from './form/formSlice';
import hospitalManagerNameSlice from './hospitalManagerName/hospitalManagerNameSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  auth: AuthSlice,
  notification: NotificationSlice,
  notificationNotRead: NotificationNotReadSlice ,
  setNotificationNotRead:SetNotificationNotReadSlice,
  hospital: HospitalSlice,
  hospitalManagerName: hospitalManagerNameSlice,
  formSlice: FormSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    serializableCheck: false
  }),
});
export const persistor = persistStore(store);
