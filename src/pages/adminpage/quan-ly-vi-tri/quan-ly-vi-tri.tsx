import { Table, Input, Space, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchLocationsListAction } from "../../../store/reducers/locationsListReducer";

export default function QuanLyViTri(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { locationsList } = useSelector(
    (state: RootState) => state.locationsListReducer
  );
  useEffect(() => {
    dispatch(fetchLocationsListAction());
  }, []);



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
        navigate("/admin/themvitri");
        return newLoadings;
      });
    }, 1000);
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  interface DataType {
    key: React.Key;
    id: number;
    tenViTri: string | undefined;
    tinhThanh: string | undefined;
    quocGia: string | undefined;
    hinhAnh: string | undefined;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Địa danh",
      dataIndex: "tenViTri",
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
      // sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
      width: "8%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "10%",
      render: (text: string) => {
        return <img src={text} style={{ width: 70, height: 50 }} />;
      },
    },
    {
      title: "Quốc gia",
      dataIndex: "quocGia",
      width: "5%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      width: "5%",
      render: (text, object) => {
        return (
          <>
            <a className="pl-4" href="">
              <EditOutlined />
            </a>
            <a className="pl-4" href="">
              <DeleteOutlined />
            </a>
          </>
        );
      },
    },
  ];

  const data = locationsList?.map((ele, index) => {  
    return {
      key: index + 1,
      id: ele.id,
      tenViTri: ele.tenViTri,
      tinhThanh: ele.tinhThanh,
      quocGia: ele.quocGia,
      hinhAnh: ele.hinhAnh,
    };
  });

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
          Thêm vị trí
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
