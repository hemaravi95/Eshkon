import { createSlice } from '@reduxjs/toolkit';

interface AppState {
    theme: string;
    isLoaded: boolean;
}

const initialState: AppState = {
    theme: 'light',
    isLoaded: false,
};

export const themeSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload;
        },
    },
});

export const { toggleTheme, setIsLoaded } = themeSlice.actions;

export default themeSlice.reducer;