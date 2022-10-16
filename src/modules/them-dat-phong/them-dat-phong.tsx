import {
  Button,
  Checkbox,
  Form,
  Input,
  DatePicker,
  Select,
  Image,
  notification,
  InputNumber,
} from "antd";
import type { DatePickerProps } from "antd";
import React, { useState } from "react";
import "./themvitri.scss";
import moment from "moment";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

import { useNavigate } from "react-router-dom";
import { fetchBookingPostAction } from "../../store/reducers/bookingPostReducer";
import { fetchBookingRoomsAction } from "../../store/reducers/roomBookingReducer";

export default function ThemDatPhong(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const onFinish = async (values: any) => {
    values.id = 0;
    // console.log(values);
    if (values) {
      await dispatch(fetchBookingPostAction(values));
      await dispatch(fetchBookingRoomsAction());
      notification.success({
        message: "Thêm vị trí thành công",
      });
    }
    navigate("/admin/quanlydatphong");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Mã phòng"
        name="maPhong"
        rules={[{ required: true, message: "Chưa nhập tên!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Ngày Đến"
        name="ngayDen"
        rules={[{ required: true, message: "Chưa nhập mật khẩu!" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Ngày đi"
        name="ngayDi"
        rules={[{ required: true, message: "Chưa nhập số điện thoại!" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Số lượng khách"
        name="soLuongKhach"
        rules={[{ required: true, message: "Chưa nhập số điện thoại!" }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Mã người dùng"
        name="maNguoiDung"
        rules={[{ required: true, message: "Chưa nhập số điện thoại!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
