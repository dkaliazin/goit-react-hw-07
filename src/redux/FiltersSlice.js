import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
	name: 'search',
	initialState: {
		name: ""
	},
	reducers: {
		setSearch(value, action) {
			value.name = action.payload
		}
	}
});
export const selectFilter = value => value.search.name;
export const { setSearch } = slice.actions;

export default slice.reducer;