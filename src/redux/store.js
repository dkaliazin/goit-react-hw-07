import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './FiltersSlice';
import contactsReducer from './ContactsSlice';
export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		search: filterReducer,
	},
});