import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React from "react";
import {
  EditOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";

export default function QuanLyViTri(): JSX.Element {
  interface DataType {
    key: React.Key;
    deleteAt: boolean;
    _id: string;
    name: string;
    province: string;
    country: string;
    image: string;
    valueate: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Địa danh",
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
      title: "Tỉnh",
      dataIndex: "province",
      width: "8%",
    },
    {
        title: "Hình ảnh",
        dataIndex: "image",
        width: "20%",
    },
    {
      title: "Quốc gia",
      dataIndex: "country",
      width: "15%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Đánh giá",
      dataIndex: "valueate",
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
      deleteAt: false,
      _id: "6169521befe193001c0a5b33",
      name: "Long Xuyen",
      province: "An Giang",
      country: "VN",
      image: "https://airbnb.cybersoft.edu.vn/public/temp/1660813446779_1.jpg",
      valueate: 9,
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
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
