import { StarFilled } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  DatePickerProps,
  Divider,
  List,
  notification,
  Rate,
  Row,
  Select,
  Space,
} from "antd";
import moment from "moment";
import type { RangePickerProps } from "antd/es/date-picker";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { bookTicketAction } from "../../store/reducers/ticketsListReducer";
import { useNavigate } from "react-router-dom";
import RoomSummary from "./roomSummary";
import RoomTraits from "./roomTraits";
import RoomUtilities from "./roomUtilities";
import RoomComments from "./roomComments";
import RoomBooking from "./roomBooking";

export default function RoomDetails(): JSX.Element {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 96 }}>
        <Col
          className="gutter-row"
          // span={18}
          flex={5}
        >
          <RoomSummary />

          <Divider></Divider>

          <RoomTraits />

          <Divider></Divider>

          <RoomUtilities />

          <Divider></Divider>
          
          <RoomComments />
        </Col>

        <Col
          className="gutter-row"
          // span={6}
          flex={2}
          style={{ display: "flex", justifyContent: "right" }}
        >
          <RoomBooking />
        </Col>
      </Row>
    </div>
  );
}
