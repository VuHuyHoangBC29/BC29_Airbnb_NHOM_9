import { Button, Checkbox, Form, Input, DatePicker, Select, Image } from "antd";
import type { DatePickerProps } from "antd";
import React, { useState } from "react";
import "./themvitri.scss";
import moment from "moment";

export default function ThemViTri(): JSX.Element {
  const [image, setImage] = useState<string>("");
  const [sendfile, setSendfile] = useState<string>();
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
  const hanldeChangeImage = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImage(event.target.result);
      setSendfile(file);
    };
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
        label="Địa danh"
        name="tenViTri"
        rules={[{ required: true, message: "Chưa nhập tên!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tỉnh Thành"
        name="tinhThanh"
        rules={[{ required: true, message: "Chưa nhập mật khẩu!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Quốc Gia"
        name="quocGia"
        rules={[{ required: true, message: "Chưa nhập số điện thoại!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <Input type="file" onChange={hanldeChangeImage} />
        <Image
          src={image}
          style={{ padding: "50px" }}
          alt="pic"
          onChange={hanldeChangeImage}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
