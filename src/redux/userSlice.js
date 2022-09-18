import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.userInfo = action.payload
            state.isLoading = true
        }
    }
})

export const { fetchData } = userSlice.actions
export default userSlice.reducer