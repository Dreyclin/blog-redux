import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdd: {
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

export const { postAdd } = postsSlice.actions

export default postsSlice.reducer