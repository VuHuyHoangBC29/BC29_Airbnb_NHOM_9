import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../interfaces/comment";
import { fetchCommentsListApi } from "../../services/comment";

export const fetchCommentsListAction = createAsyncThunk(
  "commentsList/fetchCommentsList",
  async () => {
    const response = await fetchCommentsListApi();

    console.log(response);

    return response.data.content;
  }
);

interface CommentsListState {
  commentsList: Comment[];
}

const INITIAL_STATE: CommentsListState = {
  commentsList: [],
};

const commentsListSlice = createSlice({
  name: "commentsList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCommentsListAction.fulfilled,
      (state: CommentsListState, action: PayloadAction<Comment[]>) => {
        state.commentsList = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const commentsListActions = commentsListSlice.actions;
export const commentsListReducer = commentsListSlice.reducer;
