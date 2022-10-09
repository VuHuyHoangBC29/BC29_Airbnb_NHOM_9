import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkDispatch } from "redux-thunk";
import { locationsListReducer } from "./reducers/locationsListReducer";
import { locationDetailsReducer } from "./reducers/locationDetailsReducer";
import { usersListReducer } from "./reducers/usersListReducer";
import { authenticationReducer } from "./reducers/authenicationReducer";
import { userDetailsReducer, userUpdateReducer } from "./reducers/userDetailsReducer";
import { roomsListReducer } from "./reducers/roomsListReducer";
import { roomBookingReducer } from "./reducers/roomBookingReducer";
import { roomReducer } from "./reducers/roomInfoReducer";
import { roomDetailsReducer } from "./reducers/roomDetailsReducer";
import { commentsListReducer } from "./reducers/commentsListReducer";
import { usersPostReducer } from "./reducers/userReducer";


const rootReducer = combineReducers({
  authenticationReducer,
  locationsListReducer,
  locationDetailsReducer,
  usersListReducer,
  userDetailsReducer,
  roomsListReducer,
  roomDetailsReducer,
  commentsListReducer,
  roomReducer,
  roomBookingReducer,
  usersPostReducer,
  userUpdateReducer,
});

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage: storage,
      whitelist: [
        "locationsListReducer",
        "authenticationReducer",
        "usersListReducer",
        "userDetailsReducer",
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
