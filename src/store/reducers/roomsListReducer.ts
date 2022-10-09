import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Room } from "../../interfaces/room";
import { fetchRoomsListApi } from "../../services/room";

export const fetchRoomsListAction = createAsyncThunk(
  "roomsList/fetchRoomsList",
  async () => {
    const response = await fetchRoomsListApi();

    console.log(response);

    return response.data.content;
  }
);

interface RoomsListState {
  roomsList: Room[];
}

const INITIAL_STATE: RoomsListState = {
  roomsList: [],
};

const roomsListSlice = createSlice({
  name: "roomsList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRoomsListAction.fulfilled,
      (state: RoomsListState, action: PayloadAction<Room[]>) => {
        state.roomsList = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const roomsListActions = roomsListSlice.actions;
export const roomsListReducer = roomsListSlice.reducer;
