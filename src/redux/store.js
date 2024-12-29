import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer
    }
})


