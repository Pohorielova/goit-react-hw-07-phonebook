import { createSlice } from '@reduxjs/toolkit';
// import { appReducer } from './appSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const InitialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const appSlice = createSlice({
  name: 'phonebook',
  initialState: InitialState,
  reducers: {
    add(state, action) {
      state.contacts.items.push(action.payload);
    },
    remove(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
};

export const persistedAppReducer = persistReducer(
  persistConfig,
  appSlice.reducer
);

export const { add, remove, setFilter } = appSlice.actions;
// export const appReducer = appSlice.reducer;

// Selectors
export const getContacts = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.contacts.filter;
