import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchPhone = createAsyncThunk(
    'phone/check',
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)


export const postPhone = createAsyncThunk(
    'phone/post',
    async function(datas, {rejectWithValue}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(datas),
            });
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)



export const phoneSlice = createSlice({
    name:'phone',
    initialState:{
        phone:[],
        status:null,
        error:null,
    },
    reducers:{
        addPhone(state, action){
            state.phone = action.payload;
        }
    },
    extraReducers:{
        [fetchPhone.pending]: (state, action)=>{
            state.status = 'loading...';
            state.error = null;
        },
        [fetchPhone.fulfilled]: (state, action)=>{
            state.phone = action.payload;
            state.status = "resolved"
            state.error = null
        },
        [fetchPhone.rejected]: (state, action)=>{
            state.error = "Ошибка запроса"
            state.status = 'rejected'
        },
    }
})

export const {addPhone} = phoneSlice.actions;
export default phoneSlice.reducer