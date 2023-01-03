import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './auth.service';

const user = JSON.parse(localStorage.getItem("user"));
const userToken = JSON.parse(localStorage.getItem("userToken"));

const initialState = {
    user: user ? user : null,
    userToken: userToken ? userToken : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const register = createAsyncThunk(
    "auth/register",
    async(user, thunkAPI) => {
        try {
            return await authService.register(user);
        } catch (error) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async(user, thunkAPI) => {
        try {
            return await authService.login(user);
        } catch (error) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getDetails = createAsyncThunk(
    "auth/getDetails",
    async(_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.userToken;
            return await authService.getDetails(token);
        } catch (error) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return thunkAPI.rejectWithValue(message);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";            
            // state.userToken = null;

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userToken = action.payload.token;
            state.message = action.payload.message;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            state.user = null;
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userToken = action.payload.token;
            state.message = action.payload.message;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            state.user = null;
        })
        .addCase(getDetails.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload.message;
        })
        .addCase(getDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            state.user = null;
        })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;