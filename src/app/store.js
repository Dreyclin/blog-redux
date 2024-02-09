import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import emojisReducer from "../features/emojis/emojisSlice";


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        emojis: emojisReducer
    }
})