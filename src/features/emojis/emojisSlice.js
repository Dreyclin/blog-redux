import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id: "0", emoji: "🤙", count: 0},
    {id: "1", emoji: "🤘", count: 0},
    {id: "2", emoji: "🥰", count: 0},
    {id: "3", emoji: "👍", count: 0},
]

const emojisSlice = createSlice({
    name: "emojis",
    initialState,
    reducers: {
        countEmoji(state, action) {

        }
    }
})


export const {countEmoji} = emojisSlice.actions

export default emojisSlice.reducer;