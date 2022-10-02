import React, { useEffect, useState } from "react";
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
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchUserDetailedInfoAction,
  fetchUserUpdateAction,
} from "../../store/reducers/userDetailsReducer";
import { AppDispatch, RootState } from "../../store/store";

export default function CapNhatNguoiDung(): JSX.Element {
  const param: any = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<string>("");
  const [sendfile, setSendfile] = useState<string>();
  const [form] = Form.useForm();
  const { Option } = Select;
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // console.log(moment(date).format("DD/MM/YYYY"));
  };

  const onFinish = async (values: any) => {
    values.birthday = values.birthday.format("DD/MM/YYYY");
    try {
      if (values) {
        console.log(values);
        // Post APi
        await dispatch(fetchUserUpdateAction({id:param.id, data:values} ));

        navigate("/admin/quanlynguoidung");
      }
    } catch (error) {
      notification.error({
        message: `${error}`,
      });
    }
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

  const { userDetail } = useSelector(
    (state: RootState) => state.userDetailsReducer
  );
  useEffect(() => {
    dispatch(fetchUserDetailedInfoAction(param.id));
  }, []);
  //
  console.log(userDetail);

  useEffect(() => {
    if (userDetail) {
      form.setFieldsValue({
        ...userDetail,
        birthday: moment(userDetail.birthday, "DD-MM-YYYY"),
      });
    }
  }, [userDetail]);

  let allowedDateFormats = [
    "DD/MM/YYYY",
    "D/M/YYYY",
    "DD.MM.YYYY",
    "D.M.YYYY",
    "DD. MM. YYYY",
    "D. M. YYYY",
    "DD-MM-YYYY",
  ];
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
        {/* <Input /> */}
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
