import { Table, Input, Space, Button } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import {
  EditOutlined,
  SolutionOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersListAction } from "../../../store/reducers/userReducer";
import { USER_INFO_KEY } from "../../../constants/common";
import { fetchDeleteUserApi } from "../../../services/user";

export default function QuanLyNguoiDung(): JSX.Element {
  const [pageCurrent, setPageCurrent] = useState<number>(1);  
  const dispatch = useDispatch<AppDispatch>();
  const { usersList } = useSelector(
    (state: RootState) => state.usersListReducer
  );
  useEffect(() => {
    dispatch(fetchUsersListAction(1));
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
        navigate("/admin/themnguoidung");
        return newLoadings;
      });
    }, 1000);
  };
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  interface DataType {
    key: React.Key;
    id: number;
    name: string;
    email: string;
    password: string | null;
    phone: number | null;
    birthday: string;
    avatar: string | null;
    gender: boolean | null;
    role: string;
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
      // sorter: (a, b) => a.name.length - b.name.length,
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
      title: "Password",
      dataIndex: "password",
      width: "5%",
      //   sorter: (a, b) => a.age - b.age,
    },
    // {
    //   title: "Địa chỉ",
    //   dataIndex: "address",
    //   width: "10%",
    // },
    {
      title: "Ngày sinh",
      dataIndex: "birthday",
      width: "5%",
    },
    {
      title: "Admin",
      dataIndex: "role",
      width: "5%",
    },
    {
      title: "Tương tác",
      dataIndex: "tuongTac",
      width: "10%",
      render: (text) => {
        return (
          <>
            <NavLink className="pl-4" to={`/admin/${text}/editnguoidung`}>
              <EditOutlined />
            </NavLink>
            <a
              className="pl-4"
              onClick={async () => {
                await fetchDeleteUserApi(text);
                await dispatch(
                  fetchUsersListAction(pageCurrent)
                );
              }}
            >
              <DeleteOutlined />
            </a>
          </>
        );
      },
    },
  ];

  const data = usersList?.map((ele, index) => {
    return {
      key: index + 1,
      id: ele.id,
      name: ele.name,
      email: ele.email,
      password: ele.password,
      phone: ele.phone,
      birthday: ele.birthday,
      avatar: ele.avatar,
      gender: ele.gender,
      role: ele.role,
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
          Thêm người dùng
        </Button>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{
          pageSize: 10,
          total: 100,
          onChange: async (page) => {
            await dispatch(fetchUsersListAction(page));
            setPageCurrent(page);
          },
        }}
      />
    </>
  );
}
