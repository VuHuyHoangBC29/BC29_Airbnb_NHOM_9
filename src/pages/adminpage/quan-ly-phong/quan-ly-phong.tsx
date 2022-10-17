import { Table, Input, Space, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import {
  EditOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchInfoRoomAction } from "../../../store/reducers/roomInfoReducer";
import { fetchDeleteRoomApi } from "../../../services/roomInfo";

export default function QuanLyPhong(): JSX.Element {

  const dispatch = useDispatch<AppDispatch>();
  const { roominfoList } = useSelector((state: RootState) => state.roomReducer);
  useEffect(() => {
     dispatch(fetchInfoRoomAction());
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
        navigate("/admin/themphong");
        return newLoadings;
      });
    }, 1000);
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  interface DataType {
    key: React.Key;
    id: number;
    tenPhong: string;
    khach: number;
    phongNgu: number;
    giuong: number;
    phongTam: number;
    moTa: string;
    giaTien: number;
    mayGiat: boolean;
    banLa: boolean;
    tivi: boolean;
    dieuHoa: boolean;
    wifi: boolean;
    bep: boolean;
    doXe: boolean;
    hoBoi: boolean;
    banUi: boolean;
    maViTri: number;
    hinhAnh: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      width: "1%",
    },
    {
      title: "Mã vị trí",
      dataIndex: "maViTri",
      width: "3%",
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
      title: "Tên phòng",
      dataIndex: "tenPhong",
      width: "10%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "5%",
      render: (text: string) => {
        return <img src={text} style={{ width: 70, height: 50 }} />;
      },
    },
    {
      title: "Người thuê ",
      dataIndex: "khach",
      width: "5%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Giá tiền ",
      dataIndex: "giaTien",
      width: "5%",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      width: "5%",
      render: (text) => {
        return (
          <div className="d-flex">
            <NavLink className="pl-4" to={`/admin/${text}/capnhatphong`}>
              <EditOutlined />
            </NavLink>
            <a
              className="pl-4"
              onClick={async () => {
                await fetchDeleteRoomApi(text);
                await dispatch(fetchInfoRoomAction());
              }}
            >
              <DeleteOutlined />
            </a>
          </div>
        );
      },
    },
  ];

  const data = roominfoList?.map((ele, index) => {
    return {
      key: index + 1,
      id: ele.id,
      tenPhong: ele.tenPhong,
      khach: ele.khach,
      phongNgu: ele.phongNgu,
      giuong: ele.giuong,
      phongTam: ele.phongTam,
      moTa: ele.moTa,
      giaTien: ele.giaTien,
      mayGiat: ele.mayGiat,
      banLa: ele.banLa,
      tivi: ele.tivi,
      dieuHoa: ele.dieuHoa,
      wifi: ele.wifi,
      bep: ele.bep,
      doXe: ele.doXe,
      hoBoi: ele.hoBoi,
      banUi: ele.banUi,
      maViTri: ele.maViTri,
      hinhAnh: ele.hinhAnh,
      tuongTac: ele.id,
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
          Thêm phòng
        </Button>
        {/* <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        /> */}
      </Space>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
}
