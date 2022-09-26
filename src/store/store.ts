import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkDispatch } from "redux-thunk";
import { locationReducer } from "./reducers/locationReducer";
import { usersListReducer } from "./reducers/userReducer";
import { authenticationReducer } from "./reducers/authenicationReducer";
import { userDetailsReducer } from "./reducers/userDetailsReducer";
import { roomReducer } from "./reducers/roomInfoReducer";
import { roomBookingReducer } from "./reducers/roomBookingReducer";

const rootReducer = combineReducers({
  locationReducer,
  usersListReducer,
  authenticationReducer,
  userDetailsReducer,
  roomReducer,
  roomBookingReducer,
  // usersPostReducer,
});

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage: storage,
      whitelist: [
        "locationReducer",
        "authenticationReducer",
        "usersListReducer",
        "userDetailsReducer",
        "roomReducer",
      ],
    },
    rootReducer
  ),
  devTools: true,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store["getState"]>;

export type AppDispatch = typeof store["dispatch"] &
  ThunkDispatch<RootState, void, AnyAction>;
