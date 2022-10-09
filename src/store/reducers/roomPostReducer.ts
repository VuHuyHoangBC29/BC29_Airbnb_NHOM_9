import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomInfo } from "../../interfaces/roomInfo";
import { fetchPostRoomApi } from "../../services/roomInfo";


export const fetchPostRoomAction = createAsyncThunk(
  "roomInfo/fetchInfoRoomList",
  async (data:any) => {
    const response = await fetchPostRoomApi(data);
    return response.data.content;
  }
);

interface RoomPostState {
  roomPostList: RoomInfo[];
}

const INITIAL_STATE: RoomPostState = {
  roomPostList: [],
};

const roomPostSlice = createSlice({
  name: "Room-Info",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPostRoomAction.fulfilled,
      (state: RoomPostState, actions: PayloadAction<RoomInfo[]>) => {
        state.roomPostList = actions.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const roomPostAction = roomPostSlice.actions;
export const roomPostReducer = roomPostSlice.reducer;
