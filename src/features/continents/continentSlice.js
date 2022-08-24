import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    continents:[],
}

export const continentSlice = createSlice({
    name:'continent',
    initialState,
    reducers:{
        addContinent: (state,action) => {
            if(!state.continents.includes(action.payload)){
                state.continents.push(action.payload);
            }
        },
        removeContinent: (state,action) => {
            state.continents = state.continents.filter((continent,index) => index !== action.payload);
        }
    }
});

export const {addContinent,removeContinent} = continentSlice.actions;
export default continentSlice.reducer;