import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchUser = createAsyncThunk(
    'users/reg',
    async function(datas, {rejectWithValue}){
        try{
            const response = await fetch('http://localhost:8080/client',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(datas),
            });
            console.log(response)
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)

export const fetchLogin = createAsyncThunk(
    'users/reg',
    async function(datas, {rejectWithValue}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(datas),
            });

        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)


export const userSlice = createSlice({
    name:'users',
    initialState:{
        user:[],
        authorized: false,
    },
    reducers:{
        addUsers(state, action){
            state.user = action.payload;
            state.authorized = action.payload.auth;
        }
    },
    extraReducers:{
        [fetchUser.pending]: (state, action)=>{
            state.status = 'loading...';
            state.error = null;
        },
        [fetchUser.fulfilled]: (state, action)=>{
            state.phone = action.payload;
            state.status = "resolved"
            state.error = null
        },
        [fetchUser.rejected]: (state, action)=>{
            state.error = "Ошибка запроса"
            state.status = 'rejected'
        },
    }
})


export const {addUsers} = userSlice.actions;
export default userSlice.reducer