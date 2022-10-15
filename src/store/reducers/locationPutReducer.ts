import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationPOST } from "../../interfaces/locationPOST";
import { fetchPutLocationApi } from "../../services/locations";

export const fetchPutLocationAction = createAsyncThunk(
  "locationPut/fetchLocationPut",
  async (object: any) => {
    const respone = await fetchPutLocationApi(object.id, object.data);
    return respone.data.content;
  }
);
interface locationPutState {
  locationPut: LocationPOST[];
}
const INITIAL_STATE: locationPutState = {
  locationPut: [],
};

const locationPutSlice = createSlice({
  name: "locationPut",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
        fetchPutLocationAction.fulfilled,
      (state: locationPutState, action: PayloadAction<LocationPOST[]>) => {
        state.locationPut = action.payload;
        console.log("fulfilled");
      }
    );
  },
});
export const locationPutActions = locationPutSlice.actions;
export const locationPutReducer = locationPutSlice.reducer;