import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import authHeader from "../../services/auth-header";

export const login = createAsyncThunk("auth/login", async (userData) => {
	try {
		const response = await axios.post(
			"http://localhost:3000/auth/login",
			userData
		);
		// console.log(response)
		if (response.data.token) {
			localStorage.setItem("user", JSON.stringify(response.data));
		}
		// console.log(response.data);
		return response.data;
	} catch (error) {
		// console.log(error);
		if (error.response) {
			// console.log(error.response.data.message);
			throw { message: error.response.data.message };
		} else {
			// console.log(error)
			console.log(error.message);
			throw error.message;
		}
	}
});

export const logout = createAsyncThunk("auth/logout", async () => {
	localStorage.removeItem("user");
});

export const register = createAsyncThunk("auth/register", async (userData) => {
	const response = await axios.post(
		"http://localhost:3000/auth/register",
		userData
	);
	return response.status;
});

export const changePassword = createAsyncThunk(
	"auth/changePassword",
	async (passwordData, { getState }) => {
		const { user } = getState().auth;
		const response = await axios.put(
			`http://localhost:3000/auth/change-password/${user.id}`,
			passwordData,
			{
				headers: authHeader(),
			}
		);
		return response.status;
	}
);

// SLICE
const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: JSON.parse(localStorage.getItem("user")) || null,
		isFetching: false,
		error: false,
		payload: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isFetching = true;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.isFetching = false;
				state.error = false;
				state.payload = payload;
			})
			.addCase(login.rejected, (state) => {
				state.isFetching = false;
				state.error = true;
			})
			.addCase(logout.pending, (state) => {
				state.isFetching = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
				state.isFetching = false;
				state.error = false;
			})
			.addCase(logout.rejected, (state, { payload }) => {
				state.isFetching = false;
				state.error = true;
			})
			.addCase(register.pending, (state) => {
				state.isFetching = true;
			})
			.addCase(register.fulfilled, (state) => {
				state.isFetching = false;
				state.error = false;
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.isFetching = false;
				state.error = true;
			})
			.addCase(changePassword.pending, (state) => {
				state.isFetching = true;
			})
			.addCase(changePassword.fulfilled, (state) => {
				state.isFetching = false;
				state.error = false;
			})
			.addCase(changePassword.rejected, (state, { payload }) => {
				state.isFetching = false;
				state.error = true;
			});
	},
});

export default authSlice.reducer;
