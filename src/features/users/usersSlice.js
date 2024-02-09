import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "0", name: "Maksym Sur"},
    {id: "1", name: "Danil Andreev"},
    {id: "2", name: "Maksik 4erniy"},
    {id: "3", name: "Bohdan Bogomdan"},
    {id: "4", name: "Valeriy Polonikov"},
    {id: "5", name: "Milana Amina"}
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})


export default userSlice.reducer