import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomInfo } from "../../interfaces/roomInfo";
import { fetchInfoRoomsApi } from "../../services/roomInfo";

export const fetchInfoRoomAction = createAsyncThunk(
  "roomsInfo/fetchInfoRoomsList",
  async () => {
    const response = await fetchInfoRoomsApi();
    return response.data.content;
  }
);

interface RoomInfoState {
  roominfoList: RoomInfo[];
}

const INITIAL_STATE: RoomInfoState = {
  roominfoList: [],
};

const roomInfoSlice = createSlice({
  name: "Room-Info",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchInfoRoomAction.fulfilled,
      (state: RoomInfoState, actions: PayloadAction<RoomInfo[]>) => {
        state.roominfoList = actions.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const roomAction = roomInfoSlice.actions;
export const roomReducer = roomInfoSlice.reducer;
