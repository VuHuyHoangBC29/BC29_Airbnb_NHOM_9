import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomBooking } from "../../interfaces/roombooking";
import { fetchDetailBookingApi, fetchPostBookingApi } from "../../services/roombooking";

export const fetchBookingPostAction = createAsyncThunk(
  "roomInfo/fetchInfoRoomList",
  async (data:any) => {
    const response = await fetchPostBookingApi(data);
    return response.data.content;
  }
);
export const fetchBookingDetailAction = createAsyncThunk(
  "roomInfo/fetchInfoRoomList",
  async (id:number) => {
    const response = await fetchDetailBookingApi(id);
    return response.data.content;
  }
);

interface RoomBookingState {
  roombookingPost: RoomBooking[];
}

const INITIAL_STATE: RoomBookingState = {
  roombookingPost: [],
};


interface RoomDetailBookingState {
  roombookingDetail: any;
}

const INITIAL_STATE1: RoomDetailBookingState = {
  roombookingDetail: [],
};

const roomBookingPostSlice = createSlice({
  name: "Room-booking",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchBookingPostAction.fulfilled,
      (state: RoomBookingState, actions: PayloadAction<RoomBooking[]>) => {
        state.roombookingPost = actions.payload;
        console.log("fulfilled");
        
      }
    );
  },
});
const roomBookingDetailSlice = createSlice({
  name: "Room-booking",
  initialState: INITIAL_STATE1,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchBookingPostAction.fulfilled,
      (state: RoomDetailBookingState, actions: PayloadAction<any>) => {
        state.roombookingDetail = actions.payload;
        console.log("fulfilled");
        
      }
    );
  },
});

export const roomBookingPostAction = roomBookingPostSlice.actions;
export const roomBookingPostReducer = roomBookingPostSlice.reducer;

export const roomBookingDetailAction = roomBookingDetailSlice.actions;
export const roomBookingDetailReducer = roomBookingDetailSlice.reducer;