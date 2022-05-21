import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPartPhone = createAsyncThunk(
  "partPhone/check",
  async function (_,{rejectWithValue}) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePartPhone = createAsyncThunk(
    "partPhone/delete",
    async function (id,{rejectWithValue, dispatch}) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,{
              method: 'DELETE'
          }
        );
        dispatch(removePartPhone(id))
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

export const partPhoneSlice = createSlice({
  name: "partPhone",
  initialState: {
    partPhone: [],
    status: null,
    error: null,
  },
  reducers: {
      removePartPhone(state, action){
        state.partPhone = state.partPhone.filter(partPhones=>partPhones.id === action.payload.id)
      }
  },
  extraReducers: {
    [fetchPartPhone.pending]: (state, action) => {
      state.status = "loading...";
      state.error = null;
    },
    [fetchPartPhone.fulfilled]: (state, action) => {
      state.partPhone = action.payload;
      state.status = "resolved";
      state.error = null;
    },
    [fetchPartPhone.rejected]: (state, action) => {
      state.error = "Ошибка запроса";
      state.status = "rejected";
    },
  },
});

export const {removePartPhone} = partPhoneSlice.actions;

export default partPhoneSlice.reducer;
