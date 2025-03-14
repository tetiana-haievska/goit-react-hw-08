// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
//   try {
//     const { data } = await axios.get('/contacts');
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const addContact = createAsyncThunk('contacts/add', async (contact, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/contacts', contact);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     return { id: contactId };
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/contacts");
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post("/contacts", contact);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});