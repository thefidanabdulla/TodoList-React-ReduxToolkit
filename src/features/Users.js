import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {value: []},
    reducers:{
        addUser: (state, action) =>{
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateUserName:(state, action) =>{
            state.value.map((user) => {
                if(user.id === action.payload.id && action.payload.name !== ''){
                     user.name = action.payload.name
                }
            })
        }
    }  
})
export const {addUser, deleteUser, updateUserName} = userSlice.actions;
export default userSlice.reducer;