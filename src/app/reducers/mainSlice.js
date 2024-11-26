import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        isModal: false,
        scroll: 0,
    },
    reducers: {
        changeModal: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isModal = !state.isModal
        },
        changeScroll: (state, action) => {
            state.scroll = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { changeModal, changeScroll } = mainSlice.actions

export default mainSlice.reducer