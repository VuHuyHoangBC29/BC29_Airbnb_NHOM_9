import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../interfaces/location";
import { LocationPOST } from "../../interfaces/locationPOST";
import {
   fetchPostLocationApi,
} from "../../services/locations";

export const fetchPostLocationsAction = createAsyncThunk(
  "location/fetchPostLocations",
  async (data:string) => {
    const response = await fetchPostLocationApi(data);
    console.log(data);
    return response.data.content;
  }
);



interface PostLocationState {
  locationsPost: Location[];
}

const INITIAL_STATE: PostLocationState = {
  locationsPost: [],
};

const locationPostSlice = createSlice({
  name: "location",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchPostLocationsAction.fulfilled,
      (state: PostLocationState, action: PayloadAction<Location[]>) => {
        state.locationsPost = action.payload;
        console.log("fulfilled");
      }
    );
  },
});

export const locationPostActions = locationPostSlice.actions;
export const locationPostReducer = locationPostSlice.reducer;
