import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersListAction } from "../../store/reducers/userReducer";
import { AppDispatch, RootState } from "../../store/store";

export default function Home2() {
  const { usersList } = useSelector(
    (state: RootState) => state.usersListReducer
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsersListAction());
  }, []);

  console.log(usersList);

  return <div>home2</div>;
}
