import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomInfo } from "../../interfaces/roomInfo";
import { fetchPutRoomApi } from "../../services/roomInfo";



export const fetchPutRoomAction = createAsyncThunk(
  "locationPut/fetchLocationPut",
  async (object: any) => {
    const respone = await fetchPutRoomApi(object.id, object.data);
    return respone.data.content;
  }
);
interface locationPutState {
  locationPut: RoomInfo[];
}
const INITIAL_STATE: locationPutState = {
  locationPut: [],
};

const roomPutSlice = createSlice({
  name: "locationPut",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
        fetchPutRoomAction.fulfilled,
      (state: locationPutState, action: PayloadAction<RoomInfo[]>) => {
        state.locationPut = action.payload;
        console.log("fulfilled");
      }
    );
  },
});
export const roomPutActions = roomPutSlice.actions;
export const roomPutReducer = roomPutSlice.reducer;