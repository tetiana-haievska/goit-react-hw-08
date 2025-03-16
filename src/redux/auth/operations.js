import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      console.log("Registering user:", credentials); // Дивимось, що відправляємо
      const { data } = await axios.post("/users/signup", credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  // <-- тут змінили
  try {
    await axios.post("/users/logOut");
    axios.defaults.headers.common.Authorization = "";
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) return thunkAPI.rejectWithValue("No token");

    try {
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
