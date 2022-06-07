import { configureStore  } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';

import FormSlice from './form/formSlice';
import NotificationSlice from './notification/notificationSlice';
import NotificationNotReadSlice from './notification/notificationNotReadSlice';
import SetNotificationNotReadSlice from './notification/setNotificationNotRead';
import AuthSlice from './auth/authSlice';
import hospitalManagerNameSlice from './hospitalManagerName/hospitalManagerNameSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  auth: AuthSlice,
  form: FormSlice,
  notification: NotificationSlice,
  notificationNotRead: NotificationNotReadSlice ,
  setNotificationNotRead:SetNotificationNotReadSlice,
  hospitalManagerName: hospitalManagerNameSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    immutableCheck: false,
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);
