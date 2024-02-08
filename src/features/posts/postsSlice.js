import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: "Hello", content: "Content"}
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (
                title,
                content
            ) => {
                const id = nanoid();
                return {payload: {id, title, content}}
            }
        }
    }
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer