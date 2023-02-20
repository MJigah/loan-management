import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loanService from './loan.service'

const loan = JSON.parse(localStorage.getItem("loan"));

const initialState = {
    loan: loan ? loan : null,
    isError: false,
    isSuccess: true,
    isLoading: false,
    message: "",
}

export const createLoan = createAsyncThunk(
    "loan/create",
    async(data, thunkAPI) => {
        try {
            return await loanService.create(data);
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

// export const login = createAsyncThunk(
//     "auth/login",
//     async(user, thunkAPI) => {
//         try {
//             return await authService.login(user);
//         } catch (error) {
//             const message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//           return thunkAPI.rejectWithValue(message);
//         }
//     }
// );

// export const getDetails = createAsyncThunk(
//     "auth/getDetails",
//     async(_, thunkAPI) => {
//         try {
//             const token = thunkAPI.getState().auth.userToken;
//             return await authService.getDetails(token);
//         } catch (error) {
//             const message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//           return thunkAPI.rejectWithValue(message);
//         }
//     }
// );



export const loanSlice = createSlice({
    name: "loan",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";            

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createLoan.pending, (state) => {
            state.isLoading = true
        })        
        .addCase(createLoan.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
        })
        .addCase(createLoan.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message
            state.loan = null;
        })
    }
})

export const { reset } = loanSlice.actions;
export default loanSlice.reducer;