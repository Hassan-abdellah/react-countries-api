import { configureStore } from "@reduxjs/toolkit";
import continentReducer from "../features/continents/continentSlice";
import themeReducer from '../features/theme/themeSlice';
export const store = configureStore({
reducer:{
    theme: themeReducer,
    continent: continentReducer,
},
});