import { IPostResponse } from "./../../../services/post-service/post-service.interface";
import { Api } from "./../../../services/api/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ASYNC_CREATE_ACTION_POST_ENUM, IPostState } from "./post.interface";

export const getAllPosts = createAsyncThunk(
	ASYNC_CREATE_ACTION_POST_ENUM.GET_POSTS,
	async () => {
		return await Api().post.getAll();
	}
);

export const initialState: IPostState = {
	posts: [],
};

export const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getAllPosts.fulfilled,
			(state, action: PayloadAction<IPostResponse[]>) => {
				state.posts = action.payload;
			}
		);
	},
});

export default postSlice.reducer;

// export const {} = postSlice.actions;
