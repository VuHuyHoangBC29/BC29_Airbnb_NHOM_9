import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../interfaces/location";
import { LocationPOST } from "../../interfaces/locationPOST";
import {
  createLocationApi,
  fetchLocationsListApi,
} from "../../services/locations";

export const fetchLocationsListAction = createAsyncThunk(
  "location/fetchLocationsList",
  async () => {
    const response = await fetchLocationsListApi();

    console.log(response);

    return response.data;
  }
);

export const createLocationAction = createAsyncThunk(
  "location/createLocation",
  async (data: LocationPOST) => {
    // await createLocationApi(data);

    const response = await createLocationApi(data);

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
    builder.addCase(
      createLocationAction.fulfilled,
      (state: LocationState, action: PayloadAction<Location>) => {
        console.log("fulfilled");

        let newLocationList = [...state.locationsList];

        newLocationList.push({ ...action.payload });

        state.locationsList = newLocationList;
      }
    );
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
