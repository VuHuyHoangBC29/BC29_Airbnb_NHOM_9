import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomInfo } from "../../interfaces/roomInfo";
import { fetchRoomDetailApi } from "../../services/roomInfo";

export const fetchDetailsRoomAction = createAsyncThunk(
  "roomDetails/fetchRoomDetails",
  async (id: number) => {
    const response = await fetchRoomDetailApi(id);
    return response.data.content;
  }
);

interface detailRoomState {
  roomDetail: RoomInfo[] | any;
}

const INITIAL_STATE: detailRoomState = {
  roomDetail: [],
};

const detailRoomSlice = createSlice({
  name: "roomDetails",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchDetailsRoomAction.fulfilled,
      (state: detailRoomState, action: PayloadAction<RoomInfo[]>) => {
        state.roomDetail = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const detailRoomActions = detailRoomSlice.actions;
export const detailRoomReducer = detailRoomSlice.reducer;
