import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkTheme: JSON.parse(localStorage.getItem('darkMode')) || false,
}

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
            localStorage.setItem('darkMode', JSON.stringify(state.darkTheme));
        }
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;