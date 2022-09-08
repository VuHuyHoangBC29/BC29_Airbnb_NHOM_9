import { Button, Checkbox, Form, Input, DatePicker, Select } from "antd";
import type { DatePickerProps } from "antd";
import React from "react";
import "./themnguoidung.scss";
import moment from "moment";

export default function ThemNguoiDung(): JSX.Element {
  const { Option } = Select;
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(moment(date).format("DD/MM/YYYY"));
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleChangeOne = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleChangeTwo = (value: string) => {
    console.log(`selected ${value}`);
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
        label="Họ và tên"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ngày sinh"
        name="birthday"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item
        label="Giới tính"
        name="gender"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Select style={{ width: 120 }} onChange={handleChangeOne}>
          <Option value="true">Nam</Option>
          <Option value="false">Nữ</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Loại người dùng"
        name="type"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Select style={{ width: 120 }} onChange={handleChangeTwo}>
          <Option value="ADMIN">Admin</Option>
          <Option value="USER">User</Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
