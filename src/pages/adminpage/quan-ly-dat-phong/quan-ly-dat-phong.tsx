import { Table, Input, Space, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchBookingRoomsAction } from "../../../store/reducers/roomBookingReducer";
import { fetchDeleteBookingApi } from "../../../services/roombooking";

export default function QuanLyDatPhong(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { roombookingList } = useSelector(
    (state: RootState) => state.roomBookingsReducer
  );
  useEffect(() => {
    dispatch(fetchBookingRoomsAction());
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
        navigate("/admin/themdatphong");
        return newLoadings;
      });
    }, 1000);
  };


  interface DataType {
    key: React.Key;
    id: number;
    maPhong: number;
    ngayDen: string;
    ngayDi: string;
    soLuongKhach: number;
    maNguoiDung: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Mã Phòng",
      dataIndex: "maPhong",
      width: "5%",
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
      title: "Ngày Đến",
      dataIndex: "ngayDen",
      width: "10%",
    },
    {
      title: "Ngày Đi",
      dataIndex: "ngayDi",
      width: "10%",
    },
    {
      title: "Số lượng khách",
      dataIndex: "soLuongKhach",
      width: "5%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Mã người dùng ",
      dataIndex: "maNguoiDung",
      width: "5%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      width: "5%",
      render: (text: number) => {
        return (
          <div className="d-flex">
            <NavLink className="pl-4" to={`/admin/${text}/capnhatdatphong`}>
              <EditOutlined />
            </NavLink>
            <a
              className="pl-4"
              onClick={async () => {
                await fetchDeleteBookingApi(text);
                await dispatch(fetchBookingRoomsAction());
              }}
            >
              <DeleteOutlined />
            </a>
          </div>
        );
      },
    },
  ];

  const data = roombookingList?.map((ele, index) => {
    return {
      key: index + 1,
      id: ele.id,
      maPhong: ele.maPhong,
      ngayDen: ele.ngayDen,
      ngayDi: ele.ngayDi,
      soLuongKhach: ele.soLuongKhach,
      maNguoiDung: ele.maNguoiDung,
      tuongTac: ele.id,
    };
  });

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    // console.log("params", pagination, filters, sorter, extra);
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
          Đặt phòng
        </Button>

      </Space>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
}
