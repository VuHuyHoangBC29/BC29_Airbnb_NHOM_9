import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../interfaces/location";
import { fetchLocationsListApi } from "../../services/locations";

export const fetchLocationsListAction = createAsyncThunk(
  "location/fetchLocationsList",
  async () => {
    const response = await fetchLocationsListApi();

    console.log(response);

    return response.data;
  }
);

interface LocationState {
  locationsList: Location[];
}

const INITIAL_STATE: LocationState = {
  locationsList: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchLocationsListAction.fulfilled,
      (state: LocationState, action: PayloadAction<Location[]>) => {
        console.log("fulfilled");
        state.locationsList = action.payload;
      }
    );
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
