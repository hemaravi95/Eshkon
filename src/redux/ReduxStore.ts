
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer: {
        app: themeSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;