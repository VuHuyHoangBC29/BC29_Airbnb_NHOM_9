import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { USER_INFO_KEY } from "../constants/common";
import { RootState } from "../store/store";

export default function NoAuthGuard() {
  const { userInfo } = useSelector(
    (state: RootState) => state.authenticationReducer
  );

  const navigate = useNavigate();




    if (userInfo ) {
      console.log(123);
      
      navigate("/home1");
    }

  return (
    <div>
      <Outlet />
    </div>
  );
}
