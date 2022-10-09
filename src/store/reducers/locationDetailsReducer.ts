import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../interfaces/location";
import { fetchLocationDetailsApi } from "../../services/locations";

export const fetchLocationDetailsAction = createAsyncThunk(
  "locationDetails/fetchLocationDetails",
  async (id: number | undefined) => {
    const response = await fetchLocationDetailsApi(id);

    console.log(response);

    return response.data.content;
  }
);

interface LocationDetailsState {
  locationDetails: Location | null;
}

const INITIAL_STATE: LocationDetailsState = {
  locationDetails: null,
};

const locationDetailsSlice = createSlice({
  name: "locationDetails",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchLocationDetailsAction.fulfilled,
      (state: LocationDetailsState, action: PayloadAction<Location>) => {
        state.locationDetails = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const locationDetailsActions = locationDetailsSlice.actions;
export const locationDetailsReducer = locationDetailsSlice.reducer;
