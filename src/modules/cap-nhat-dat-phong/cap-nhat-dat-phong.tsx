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

import React, { useEffect } from "react";
import "./themvitri.scss";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

import { useNavigate, useParams } from "react-router-dom";
import { fetchBookingDetailAction } from "../../store/reducers/bookingPostReducer";
import moment from "moment";
import { fetchPutBookingApi } from "../../services/roombooking";

export default function CapNhatDatPhong(): JSX.Element {
  const params: any = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { roombookingDetail } = useSelector(
    (state: RootState) => state.roomBookingDetailReducer
  );
  console.log(roombookingDetail);

  useEffect(() => {
    dispatch(fetchBookingDetailAction(params.id));
  }, []);
  useEffect(() => {
    if (roombookingDetail) {
      form.setFieldsValue({
        ...roombookingDetail,
        ngayDen: moment(roombookingDetail.ngayDen),
        ngayDi: moment(roombookingDetail.ngayDi),
      });
    }
  }, [roombookingDetail]);

  const onFinish = async (values: any) => {
    values.id = 0;
    if (values) {
      await fetchPutBookingApi( params.id,values);
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
      form={form}
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
