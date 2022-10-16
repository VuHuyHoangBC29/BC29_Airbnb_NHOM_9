import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomBooking } from "../../interfaces/roombooking";
import { fetchRoomsBookingApi } from "../../services/roombooking";

export const fetchBookingRoomsAction = createAsyncThunk(
  "roomBooking/fetchBookingRoomList",
  async () => {
    const response = await fetchRoomsBookingApi();
    return response.data.content;
  }
);

interface RoomBookingState {
  roombookingList: RoomBooking[];
}

const INITIAL_STATE: RoomBookingState = {
  roombookingList: [],
};

const roomBookingsSlice = createSlice({
  name: "Room-booking",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchBookingRoomsAction.fulfilled,
      (state: RoomBookingState, actions: PayloadAction<RoomBooking[]>) => {
        state.roombookingList = actions.payload;
        console.log("fulfilled");
        
      }
    );
  },
});

export const roomBookingsAction = roomBookingsSlice.actions;
export const roomBookingsReducer = roomBookingsSlice.reducer;