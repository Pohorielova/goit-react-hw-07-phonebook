import { createAction, createSlice } from '@reduxjs/toolkit';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from './operations';

const InitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
export const changeFilterValue = createAction('phonebook/changeFilterValue');

const appSlice = createSlice({
  name: 'phonebook',
  initialState: InitialState,
  extraReducers: {
    [changeFilterValue](state, action) {
      state.filter = action.payload;
    },
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

// const persistConfig = {
//   key: 'phonebook',
//   storage,
// };

// export const persistedAppReducer = persistReducer(
//   persistConfig,
//   appSlice.reducer
// );

export const appReducer = appSlice.reducer;

// Selectors
export const getItems = state => state.phonebook.contacts.items;
export const getLoad = state => state.phonebook.contacts.isLoading;
export const getError = state => state.phonebook.contacts.error;
export const getFilter = state => state.phonebook.filter;
