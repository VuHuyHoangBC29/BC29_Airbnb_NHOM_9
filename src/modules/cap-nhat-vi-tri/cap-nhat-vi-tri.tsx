import { Button, Form, Input, Image, notification } from "antd";
import React, { useEffect, useState } from "react";
import "../../modules/them-vi-tri/themvitri.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { fetchLocationDetailsAction } from "../../store/reducers/locationDetailsReducer";
import { fetchPutLocationAction } from "../../store/reducers/locationPutReducer";

export default function CapNhatViTri(): JSX.Element {
  const [form] = Form.useForm();
  const params: any = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<any>("");
  //   const [sendfile, setSendfile] = useState<string>();
  useEffect(() => {
    dispatch(fetchLocationDetailsAction(params.id));
  }, [params.id]);
  const { locationDetails } = useSelector(
    (state: RootState) => state.locationDetailsReducer
  );
  useEffect(() => {
    if (locationDetails) {
      form.setFieldsValue({
        ...locationDetails,
        hinhAnh: setImage(locationDetails.hinhAnh),
      });
    }
  }, [locationDetails]);
  const onFinish = async (values: any) => {
    values.id = 0;
    values.hinhAnh = image;
    if (values) {
      await dispatch(fetchPutLocationAction({ id: params.id, data: values }));
      notification.success({
        message: "Thêm vị trí thành công",
      });
    }
    navigate("/admin/quanlyvitri");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const hanldeChangeImage = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImage(event.target.result);
      //   setSendfile(file);
    };
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
        <Input type="file" name="hinhAnh" onChange={hanldeChangeImage} />
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
