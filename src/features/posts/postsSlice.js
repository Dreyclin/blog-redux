import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [

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
                content,
                userId
            ) => {
                const id = nanoid();
                return {payload: {id, title, content, userId}}
            }
        }
    }
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer