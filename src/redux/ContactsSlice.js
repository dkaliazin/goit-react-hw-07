import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './contactsOps';
import { selectFilter } from './filtersSlice';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
			.addCase(getContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getContacts.fulfilled, (state,action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(getContacts.rejected, (state, action) => {
				state.loading = true;
				state.error = action.payload;
			})
			.addCase(addContact.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = true;
				state.items.push(action.payload);
			})
			.addCase(addContact.rejected, (state, action) => {
				state.loading = true;
				state.error = action.payload;
			})
			.addCase(deleteContact.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = true;
				state.items = state.items.filter(item => item.id !== action.payload);
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.loading = true;
				state.error = action.payload;
			})
	}
});
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }
);
export default contactsSlice.reducer;