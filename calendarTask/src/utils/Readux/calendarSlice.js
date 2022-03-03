import { createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
    name: 'dayDetails',
    initialState: {
        title: '',
        describtion: ''
    },
    reducers: {
        addNote: (state, action) => {
            state.title = action.payload.title
            state.describtion = action.payload.describtion
        }
    }
})

export const { addNote } = daySlice.actions;
export default daySlice.reducer;