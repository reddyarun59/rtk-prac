import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    { id:1, name:"Arun"},
    { id:2, name:"Ganguly"},
    { id:3, name:"Laxman"}
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const selectAllUsers=(state)=>state.users;

export default usersSlice.reducer;