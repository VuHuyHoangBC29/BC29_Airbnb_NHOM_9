import { Button, Checkbox, Form, Input, DatePicker, Select } from "antd";
import type { DatePickerProps } from "antd";
import React, { useEffect, useState } from "react";
import "./user-form.scss";
// import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useParams } from "react-router-dom";
import { fetchUserDetailedInfoAction } from "../../store/reducers/userDetailsReducer";
import moment from "moment";
import { UserGender } from "../../enums/user";

export default function UserForm(): JSX.Element {
  const { Option } = Select;

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(moment(date).format("DD/MM/YYYY"));
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);

    const { name, password, phone, birthday, gender, type } = values;

    console.log({ name, password, phone, birthday, gender, type });
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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
      lg: { span: 16 },
      xl: { span: 12 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 0,
      },
    },
  };

  const [form] = Form.useForm();

  const params = useParams();

  const [state, setState] = useState();

  console.log(params._id);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (params._id) {
      dispatch(fetchUserDetailedInfoAction(params._id));
    }
  }, [params._id]);

  const { userDetail } = useSelector(
    (state: RootState) => state.userDetailsReducer
  );

  // useEffect(() => {
  //   if (params._id) {
  //     form.setFieldsValue({
  //       ...userDetail,
  //       birthday: moment(userDetail?.birthday),
  //       gender: true ? UserGender.true : UserGender.false,
  //     });
  //   }
  // }, [params._id]);

  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ padding: 0, width: "90%", margin: "auto" }}
        autoComplete="off"
      >
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: "Chưa nhập tên!" }]}
        >
          <Input />
        </Form.Item>

        {!params._id && (
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Chưa nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
        )}

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
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Chưa nhập địa chỉ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ngày sinh"
          name="birthday"
          rules={[{ required: true, message: "Chưa nhập ngày sinh!" }]}
        >
          <DatePicker onChange={onChange} />
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
        <Form.Item
          // wrapperCol={{ offset: 8, span: 16 }}
          {...tailFormItemLayout}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
