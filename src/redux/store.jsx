import { configureStore } from '@reduxjs/toolkit';
import { persistedAppReducer } from './appSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    phonebook: persistedAppReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
