import {
  Button,
  Checkbox,
  Form,
  Input,
  DatePicker,
  Select,
  Image,
  notification,
} from "antd";
import type { DatePickerProps } from "antd";
import React, { useEffect, useState } from "react";
import "./themnguoidung.scss";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchUserPostAction } from "../../store/reducers/userPostReducer";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserDetailedInfoAction } from "../../store/reducers/userDetailsReducer";

export default function ThemNguoiDung(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<string>("");
  const [sendfile, setSendfile] = useState<string>();
  const [form] = Form.useForm();
  const formData = new FormData();
  const { Option } = Select;
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(moment(date).format("DD/MM/YYYY"));
  };
  const onFinish = async (values: any) => {
    values.birthday = values.birthday.format("DD/MM/YYYY");
      if (values) {
        await dispatch(fetchUserPostAction(values));
        notification.success({
          message: "Thêm người dùng thành công",
        });
      }
      navigate("/admin/quanlynguoidung");
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
  let allowedDateFormats = ['DD/MM/YYYY', 'D/M/YYYY', 'DD.MM.YYYY', 'D.M.YYYY', 'DD. MM. YYYY', 'D. M. YYYY','DD-MM-YYYY'];

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        avatar: "",
        gender: false,
        role: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Họ và tên"
        name="name"
        rules={[{ required: true, message: "Chưa nhập tên!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Chưa nhập mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Chưa nhập email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[{ required: true, message: "Chưa nhập số điện thoại!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ngày sinh"
        name="birthday"
        rules={[{ required: true, message: "Chưa nhập ngày sinh!" }]}
      >
        <DatePicker onChange={onChange} format={allowedDateFormats} />
      </Form.Item>
      <Form.Item
        label="Giới tính"
        name="gender"
        rules={[{ required: true, message: "Chưa chọn giới tính!" }]}
      >
        <Select style={{ width: 120 }} onChange={handleChangeOne}>
          <Option value="true">Nam</Option>
          <Option value="false">Nữ</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Loại người dùng"
        name="type"
        rules={[{ required: true, message: "Chưa chọn loại người dùng!" }]}
      >
        <Select style={{ width: 120 }} onChange={handleChangeTwo}>
          <Option value="ADMIN">Admin</Option>
          <Option value="USER">User</Option>
        </Select>
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
