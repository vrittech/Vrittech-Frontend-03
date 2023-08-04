import { createSlice } from "@reduxjs/toolkit";

const authSLice = createSlice({
    name: 'Auth',
    initialState: {
        isLoggedin: false,
        jwt: ''
    },
    reducers: {
        login: (state, data) => {
            state.isLoggedin = true;
            state.jwt = data.payload;
        },
        logout: (state) => {
            state.isLoggedin = false;
            state.jwt = '';

        }
    }
})

export default authSLice.reducer;

export const { login, logout } = authSLice.actions;