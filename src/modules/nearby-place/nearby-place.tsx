import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationsListAction } from "../../store/reducers/locationReducer";
import { AppDispatch } from "../../store/store";

export default function NearbyPlace() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchLocationsListAction());
  }, []);

  return <div>nearby-place</div>;
}
