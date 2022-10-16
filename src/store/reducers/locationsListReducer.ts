import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../interfaces/location";
import { LocationPOST } from "../../interfaces/locationPOST";
import {
  createLocationApi,
  fetchLocationsListApi,
} from "../../services/locations";

export const fetchLocationsListAction = createAsyncThunk(
  "locationsList/fetchLocationsList",
  async () => {
    const response = await fetchLocationsListApi();

    return response.data.content;
  }
);



interface LocationsListState {
  locationsList: Location[];
}

const INITIAL_STATE: LocationsListState = {
  locationsList: [],
};

const locationsListSlice = createSlice({
  name: "locationsList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchLocationsListAction.fulfilled,
      (state: LocationsListState, action: PayloadAction<Location[]>) => {
        state.locationsList = action.payload;
        console.log("fulfilled");
      }
    );

  },
});

export const locationsListActions = locationsListSlice.actions;
export const locationsListReducer = locationsListSlice.reducer;
