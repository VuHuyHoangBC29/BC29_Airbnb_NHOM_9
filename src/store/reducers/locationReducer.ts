import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../interfaces/location";
import { LocationPOST } from "../../interfaces/locationPOST";
import {
  fetchPostLocationApi,
  fetchLocationsListApi,
} from "../../services/locations";

export const fetchLocationsListAction = createAsyncThunk(
  "location/fetchLocationsList",
  async () => {
    const response = await fetchLocationsListApi();
    return response.data.content;
  }
);

export const createLocationAction = createAsyncThunk(
  "location/createLocation",
  async (data: LocationPOST) => {

    const response = await fetchPostLocationApi(data);

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
        state.locationsList = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
