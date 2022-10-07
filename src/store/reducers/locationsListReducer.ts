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

    console.log(response);

    return response.data.content;
  }
);

export const createLocationAction = createAsyncThunk(
  "locationsList/createLocation",
  async (data: LocationPOST) => {
    // await createLocationApi(data);

    const response = await createLocationApi(data);

    return response.data;
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
        console.log("fulfilled");
        state.locationsList = action.payload;
      }
    );
    // builder.addCase(
    //   createLocationAction.fulfilled,
    //   (state: LocationsListState, action: PayloadAction<Location>) => {
    //     console.log("fulfilled");

    //     let newLocationList = [...state.locationsList];

    //     newLocationList.push({ ...action.payload });

    //     state.locationsList = newLocationList;
    //   }
    // );
  },
});

export const locationsListActions = locationsListSlice.actions;
export const locationsListReducer = locationsListSlice.reducer;
