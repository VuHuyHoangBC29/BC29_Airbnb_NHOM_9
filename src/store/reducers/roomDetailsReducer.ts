import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Room } from "../../interfaces/room";
import { fetchRoomDetailsApi } from "../../services/room";

export const fetchRoomDetailsAction = createAsyncThunk(
  "roomDetails/fetchRoomDetails",
  async (id: number) => {
    const response = await fetchRoomDetailsApi(id);

    console.log(response);

    return response.data.content;
  }
);

interface RoomDetailsState {
  roomDetails: Room | null;
}

const INITIAL_STATE: RoomDetailsState = {
  roomDetails: null,
};

const roomDetailsSlice = createSlice({
  name: "roomDetails",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRoomDetailsAction.fulfilled,
      (state: RoomDetailsState, action: PayloadAction<Room>) => {
        state.roomDetails = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const roomDetailsActions = roomDetailsSlice.actions;
export const roomDetailsReducer = roomDetailsSlice.reducer;
