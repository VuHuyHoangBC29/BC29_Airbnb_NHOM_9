import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Select, Skeleton } from "antd";
import { Image } from "antd";
import { Col, Divider, Row } from "antd";
import { Avatar, List } from "antd";
import { Rate } from "antd";

import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

import { StarFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchLocationDetailsAction } from "../../store/reducers/locationDetailsReducer";
import { fetchRoomDetailsAction } from "../../store/reducers/roomDetailsReducer";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCommentsListAction } from "../../store/reducers/commentsListReducer";
import Item from "antd/lib/list/Item";
import RoomTitle from "../../modules/booking/roomTitle";
import RoomDetails from "../../modules/booking/roomDetails";

export default function Booking() {


  const params = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };

  useEffect(() => {
    if (params.roomId) {
      dispatch(fetchRoomDetailsAction(+params.roomId));
    }
  }, [params.roomId]);

  const { roomDetails } = useSelector(
    (state: RootState) => state.roomDetailsReducer
  );

  useEffect(() => {
    if (roomDetails) {
      dispatch(fetchLocationDetailsAction(roomDetails.maViTri));
    }
  }, [roomDetails]);

  useEffect(() => {
    dispatch(fetchCommentsListAction());
  }, []);

  // const commentsListByRoomId = commentsList.filter((ele, idx) => {
  //   return ele.maPhong === roomDetails?.id;
  // });

  // console.log(commentsListByRoomId);

  // const starArr = commentsListByRoomId.map((ele) => ele.saoBinhLuan);

  // console.log(starArr);

  // const avgStar =
  //   starArr.reduce(
  //     (previousValue, currentValue) => previousValue + currentValue,
  //     0
  //   ) / starArr.length;

  // console.log(avgStar);

  // const roomGuestAmount = roomDetails?.khach;

  // console.log(roomGuestAmount);

  // let roomGuestAmountArr = [];

  // if (roomDetails?.khach) {
  //   for (let i = 1; i <= roomDetails?.khach; i++) {
  //     roomGuestAmountArr.push(i);
  //   }
  // }

  // const roomCommentsData = commentsListByRoomId.map((ele, idx) => {
  //   return {
  //     // title: `${(<Rate disabled defaultValue={ele.saoBinhLuan} />)} - ${
  //     //   ele.ngayBinhLuan
  //     // }`,
  //     // title: <Rate disabled defaultValue={ele.saoBinhLuan} />,
  //     title: (
  //       <div>
  //         <Rate disabled defaultValue={ele.saoBinhLuan} /> -{" "}
  //         <span>{ele.ngayBinhLuan}</span>
  //       </div>
  //     ),
  //     description: `${ele.noiDung} <br/> ${ele.ngayBinhLuan}`,
  //   };
  // });

  // const roomUtil = {
  //   banLa: "Bàn là",
  //   banUi: "Bàn ủi",
  //   bep: "Bếp",
  //   dieuHoa: "Điều hòa",
  //   doXe: "Đỗ xe",
  //   hoBoi: "Hồ bơi",
  //   mayGiat: "Máy giặt",
  //   tivi: "Tivi",
  //   wifi: "Wifi",
  // };

  // let roomUtilsArr: string[] = [];

  // for (const property in roomDetails) {
  //   if (
  //     property === "id" ||
  //     property === "moTa" ||
  //     property === "hinhAnh" ||
  //     property === "tenPhong" ||
  //     property === "giaTien" ||
  //     property === "maViTri" ||
  //     property === "khach" ||
  //     property === "phongNgu" ||
  //     property === "phongTam" ||
  //     property === "giuong"
  //   ) {
  //     roomUtilsArr = [...roomUtilsArr];
  //   } else if (roomDetails[property as keyof typeof roomDetails] === false) {
  //     roomUtilsArr = [...roomUtilsArr];
  //   } else {
  //     roomUtilsArr.push(roomUtil[property as keyof typeof roomUtil]);
  //   }
  // }

  return (
    <div>
      <RoomTitle />

      <RoomDetails />
    </div>
  );
}
