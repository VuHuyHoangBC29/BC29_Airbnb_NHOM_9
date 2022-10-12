import { Button, Card, DatePicker, Form, Input, Select } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { UserGender } from "../../enums/user";
import {
  fetchUserDetailedInfoAction,
  updateUserAction,
  updateUserAvatarAction,
} from "../../store/reducers/userDetailsReducer";
import { AppDispatch, RootState } from "../../store/store";

export default function ProfileInfoForm(): JSX.Element {
  const { Meta } = Card;

  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const [form] = Form.useForm();

  useEffect(() => {
    if (params.userId) {
      dispatch(fetchUserDetailedInfoAction(+params.userId));
    }
  }, [params.userId]);

  const { userDetail } = useSelector(
    (state: RootState) => state.userDetailsReducer
  );

  console.log(userDetail);

  useEffect(() => {
    if (userDetail) {
      form.setFieldsValue({
        ...userDetail,
        birthday: moment(userDetail?.birthday),
        gender: true ? UserGender.true : UserGender.false,
      });
    }
  }, [userDetail]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);

    let { name, email, phone, birthday, gender } = values;

    gender === "Nam" ? (gender = true) : (gender = false);

    const payload = {
      submitData: {
        submitData: {
          id: 0,
          name,
          email,
          phone,
          birthday: birthday.format("DD/MM/YYYY"),
          gender,
          role: userDetail!.role,
        },
        id: userDetail!.id,
      },
      callback: navigate,
    };

    console.log(payload);

    dispatch(updateUserAction(payload));
  };

  return (
    <div>
      <Form
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
          label="Họ tên"
          name="name"
          validateTrigger={["onBlur"]}
          rules={[
            {
              required: true,
              message: "Họ tên không được bỏ trống.",
            },
            // {
            //   pattern: new RegExp(
            //     "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            //       "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            //       "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
            //   ),
            //   message: "Họ tên không đúng định dạng.",
            // },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          validateTrigger={["onBlur"]}
          rules={[
            {
              required: true,
              message: "Email không được bỏ trống.",
            },
            {
              pattern: new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"),
              message: "Email không đúng định dạng.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          validateTrigger={["onBlur"]}
          rules={[
            {
              required: true,
              message: "Số điện thoại không được bỏ trống.",
            },
            {
              pattern: /^[0-9]+$/,
              message: "Số điện thoại không đúng định dạng.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ngày sinh"
          name="birthday"
          validateTrigger={["onBlur"]}
          rules={[
            {
              required: true,
              message: "Ngày sinh không được bỏ trống.",
            },
          ]}
        >
          <DatePicker
          //  onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="Giới tính"
          name="gender"
          validateTrigger={["onBlur"]}
          rules={[
            {
              required: true,
              message: "Giới tính không được bỏ trống.",
            },
          ]}
        >
          <Select
            style={{ width: 120 }}
            // onChange={handleChangeOne}
          >
            <Select.Option value="true">Nam</Select.Option>
            <Select.Option value="false">Nữ</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item shouldUpdate className="mt-3">
          {() => {
            return (
              <Button
                htmlType="submit"
                type="primary"
                disabled={
                  !form.isFieldsTouched() ||
                  form.getFieldsError().some((ele) => ele.errors.length > 0)
                }
              >
                SAVE
              </Button>
            );
          }}
        </Form.Item>
      </Form>
    </div>
  );
}
