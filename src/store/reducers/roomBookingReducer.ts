import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomBooking } from "../../interfaces/roombooking";
import { fetchRoomBookingApi } from "../../services/roombooking";

export const fetchBookingRoomAction = createAsyncThunk(
  "roomInfo/fetchInfoRoomList",
  async () => {
    const response = await fetchRoomBookingApi();
    return response.data.content;
  }
);

interface RoomBookingState {
  roombookingList: RoomBooking[];
}

const INITIAL_STATE: RoomBookingState = {
  roombookingList: [],
};

const roomBookingSlice = createSlice({
  name: "Room-booking",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchBookingRoomAction.fulfilled,
      (state: RoomBookingState, actions: PayloadAction<RoomBooking[]>) => {
        state.roombookingList = actions.payload;
        console.log("fulfilled");
        
      }
    );
  },
});

export const roomBookingAction = roomBookingSlice.actions;
export const roomBookingReducer = roomBookingSlice.reducer;