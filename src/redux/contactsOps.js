import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://66c165aef83fffcb58793a85.mockapi.io';

export const getContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return (response.data);            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContact);
            return (response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
