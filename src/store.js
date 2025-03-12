import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/auth/authSlice';
import contactsReducer from './redux/contacts/contactsSlice';
import filtersReducer from './redux/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
