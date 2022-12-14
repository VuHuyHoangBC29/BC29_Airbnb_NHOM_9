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

    const { name, password, phone, birthday, gender, role } = values;

    console.log({ name, password, phone, birthday, gender, role });
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

  console.log(params.id);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchUserDetailedInfoAction(parseInt(params.id)));
    }
  }, [params.id]);

  const { userDetail } = useSelector(
    (state: RootState) => state.userDetailsReducer
  );

  useEffect(() => {
    if (params.id) {
      form.setFieldsValue({
        ...userDetail,
        birthday: moment(userDetail?.birthday),
        gender: true ? UserGender.true : UserGender.false,
      });
    }
  }, [params.id]);

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
          label="H??? v?? t??n"
          name="name"
          rules={[{ required: true, message: "Ch??a nh???p t??n!" }]}
        >
          <Input />
        </Form.Item>

        {!params.id && (
          <Form.Item
            label="M???t kh???u"
            name="password"
            rules={[{ required: true, message: "Ch??a nh???p m???t kh???u!" }]}
          >
            <Input.Password />
          </Form.Item>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Ch??a nh???p email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="S??? ??i???n tho???i"
          name="phone"
          rules={[{ required: true, message: "Ch??a nh???p s??? ??i???n tho???i!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="?????a ch???"
          name="address"
          rules={[{ required: true, message: "Ch??a nh???p ?????a ch???!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ng??y sinh"
          name="birthday"
          rules={[{ required: true, message: "Ch??a nh???p ng??y sinh!" }]}
        >
          <DatePicker onChange={onChange} />
        </Form.Item>

        <Form.Item
          label="Gi???i t??nh"
          name="gender"
          rules={[{ required: true, message: "Ch??a ch???n gi???i t??nh!" }]}
        >
          <Select style={{ width: 120 }} onChange={handleChangeOne}>
            <Option value="true">Nam</Option>
            <Option value="false">N???</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Lo???i ng?????i d??ng"
          name="type"
          rules={[{ required: true, message: "Ch??a ch???n lo???i ng?????i d??ng!" }]}
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
