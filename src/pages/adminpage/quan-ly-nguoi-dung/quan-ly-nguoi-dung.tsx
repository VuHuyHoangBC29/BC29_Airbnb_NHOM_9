import { Table, Input, Space, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React, { useState } from "react";
import {
  EditOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Outlet, useNavigate } from "react-router-dom";

export default function QuanLyNguoiDung(): JSX.Element {
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        navigate("/admin/themnguoidung");
        return newLoadings;
      });
    }, 1000);
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  interface DataType {
    key: React.Key;
    tickets: Array<string>;
    deleteAt: boolean;
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    gender: boolean;
    address: string;
    type: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      width: "14%",
      //   filters: [
      //     {
      //       text: "Joe",
      //       value: "Joe",
      //     },
      //     {
      //       text: "Jim",
      //       value: "Jim",
      //     },
      //   ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      width: "8%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "15%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      width: "10%",
    },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      width: "5%",
    },
    {
      title: "Admin",
      dataIndex: "type",
      width: "5%",
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      width: "10%",
      render: (text, object) => {
        return (
          <>
            <a className="pl-4" href="">
              <EditOutlined />
            </a>
            <a className="pl-4" href="">
              <DeleteOutlined />
            </a>
            <a className="pl-4" href="">
              <SolutionOutlined />
            </a>
          </>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      tickets: [],
      deleteAt: false,
      _id: "61604bcdd1a292001ce8f17a",
      name: "Nguyễn Phong Hào Phóng",
      email: "hao9x0159@gmail.com",
      password: "$2a$10$9Ie16jOoUWm6opIEkbOXf.v8odVh9l2yNf.SSTwTgFaWG4t6fiFtO",
      phone: "0945077142",
      birthday: moment("1998-05-10T17:00:00.000Z").format("DD/MM/YYYY"),
      gender: true,
      address: "số 13 , 116/4 trại cá , hai bà trưng , hà nội",
      type: "ADMIN",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Space
        style={{ width: "100%" }}
        direction="vertical"
        className="w-100 py-3"
      >
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Thêm người dùng
        </Button>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
}
