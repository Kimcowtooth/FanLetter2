import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getLetters = createAsyncThunk(
  "GetLetters",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:4000/messages');
      return thunkAPI.fulfillWithValue(response.data);
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const letterSlice = createSlice({
  name: 'FanLetters',
  initialState,
  reducers: {
    addLetter: (state, action) => {
      return [action.payload, ...state];
    },
    deleteLetter: (state, action) => {
      return state.filter(letter => letter.id !== action.payload)
    },
    editLetter: (state, action) => {
      return state.map(letter => {
        if (letter.id === action.payload.id) {
          console.log(action);
          return { ...letter, letter: action.payload.newLetter };
        } else {
          return letter
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getLetters.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getLetters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.letters = action.payload
      })
      .addCase(__getLetters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload
      },)
  }
})

export default letterSlice.reducer
export const { addLetter, deleteLetter, editLetter } = letterSlice.actions;